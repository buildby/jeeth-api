import { RequestHandler } from "express";
import * as EarningService from "../services/Earning.service";
import * as DriverService from "../services/Driver.service";
import { Prisma } from "@prisma/client";

export const uploadEarnings: RequestHandler = async (req, res, next) => {
  try {
    let { dataToInsert } = req.body;
    if (dataToInsert.length > 0) {
      let allIndex = 0;
      for (let index = 0; index < dataToInsert.length; index++) {
        let {
          phone,
          vehicleNumber,
          tripId,
          tripDate,
          clientsite_id,
          distanceTravelled,
          escort,
          dropLocation,
          tripType,
          eta,
          ota,
          etd,
          otd,
          packageFare,
          shiftTime,
          headCount,
        } = dataToInsert[index];

        let query: any = {
          phone,
          vehicleNumber,
          tripId,
          tripDate,
          ClientSite: { connect: { id: clientsite_id } },
          distanceTravelled,
          escort,
          dropLocation,
          tripType,
          eta,
          ota,
          etd,
          otd,
          shiftTime,
          packageFare,
          headCount,
        };

        await EarningService.uploadEarnings({ ...query });

        allIndex++;
        if (dataToInsert.length == allIndex) {
          res.status(200).send({
            success: true,
          });
        }
      }
    } else {
      res.status(500).send({
        success: false,
      });
    }
  } catch (error) {
    next(error);
  }
};

export const fetchPastWeekEarning: RequestHandler = async (req, res, next) => {
  try {
    const { phone } = req.body;
    const today = new Date();
    const lastWeekStart = new Date(today);
    lastWeekStart.setDate(today.getDate() - 7);
    const pastWeekEarnings = await EarningService.fetchPastWeekEarning(
      phone,
      lastWeekStart,
      today
    );

    const driver = await DriverService.getDriverByPhone(phone);

    const datesInRange = [];
    let currentDate = new Date(today);

    for (let i = 0; i < 7; i++) {
      currentDate.setDate(currentDate.getDate() - 1); // Decrement the date by one day
      datesInRange.push(currentDate.toLocaleDateString("en-US"));
    }

    let ota: any = [];
    let otd: any = [];

    const result = await Promise.all(
      datesInRange.map(async (date) => {
        let matchingEarnings = pastWeekEarnings.filter((earning) => {
          let earningDate = new Date(
            earning.tripDate.getTime() -
              earning.tripDate.getTimezoneOffset() * 60000
          );
          return date == earningDate.toLocaleDateString("en-US");
        });

        let totalEarningAmount = 0;

        matchingEarnings.forEach((matchingEarning) => {
          let etaDate = new Date(matchingEarning.eta);
          let otaDate = new Date(matchingEarning.ota);

          let etdDate = new Date(matchingEarning.etd);
          let otdDate = new Date(matchingEarning.otd);

          if (etaDate > otaDate) {
            ota.push(matchingEarning);
          }

          if (etdDate > otdDate) {
            otd.push(matchingEarning);
          }

          const pricing = findPricing(
            matchingEarning.packageFare,
            matchingEarning.ClientSite?.BusinessModel[0].modeldata,
            matchingEarning.ClientSite?.BusinessModel[0].type,
            driver?.vehicleType,
            matchingEarning.distanceTravelled,
            driver?.vehicleFuelType
          );

          const earningAmount = calculateEarning(
            pricing,
            matchingEarning,
            matchingEarning.ClientSite?.BusinessModel[0].type
          );

          totalEarningAmount += parseFloat(earningAmount);
        });

        return {
          date: date,
          earning: totalEarningAmount.toFixed(2),
        };
      })
    );

    res.json({
      result: {
        performance: {
          ota: calculateOta(ota, pastWeekEarnings),
          otd: calculateOtd(otd, pastWeekEarnings),
        },
        earnings: result,
      },
    });
  } catch (error) {
    next(error);
  }
};

function calculateOta(ota: any, pastWeekEarnings: any) {
  return ((ota.length / pastWeekEarnings.length) * 100).toFixed(1);
}

function calculateOtd(otd: any, pastWeekEarnings: any) {
  return ((otd.length / pastWeekEarnings.length) * 100).toFixed(1);
}

function findPricing(
  packageFare: any,
  modelData: any,
  type: any,
  vehicleType: any,
  distanceTravelled: any,
  fuelType: any
) {
  if (type == "SLAB") {
    for (let i = 0; i < modelData.data.length; i++) {
      const range = modelData.data[i].range;

      if (distanceTravelled >= range.min && distanceTravelled <= range.max) {
        const vehiclePricing =
          modelData.data[i].vehicle_type[vehicleType.toLowerCase()];

        if (vehiclePricing) {
          if (fuelType == "Petrol" || fuelType == "Diesel") {
            const fuelPricing = vehiclePricing["Petrol/Diesel"];

            if (fuelPricing) {
              return fuelPricing;
            }
          } else if (fuelType == "EV") {
            const fuelPricing = vehiclePricing["EV/Hybrid"];

            if (fuelPricing) {
              return fuelPricing;
            }
          } else {
            const fuelPricing = vehiclePricing["CNG"];

            if (fuelPricing) {
              return fuelPricing;
            }
          }
        }
      }
    }
  } else if (type == "KM_FARE") {
    const vehiclePricing = modelData.data[0][vehicleType.toLowerCase()];

    if (vehiclePricing) {
      if (fuelType == "Petrol" || fuelType == "Diesel") {
        const fuelPricing = vehiclePricing["Petrol/Diesel"];

        if (fuelPricing) {
          return fuelPricing;
        }
      } else if (fuelType == "EV") {
        const fuelPricing = vehiclePricing["EV/Hybrid"];

        if (fuelPricing) {
          return fuelPricing;
        }
      } else {
        const fuelPricing = vehiclePricing["CNG"];

        if (fuelPricing) {
          return fuelPricing;
        }
      }
    }
  } else {
    return packageFare;
  }

  // If no pricing is found, you might want to handle this case accordingly
  return 0;
}

function calculateEarning(earning: any, pricing: any, type: any) {
  if (type == "SLAB") {
    return earning;
  } else if (type == "KM_FARE") {
    return earning * pricing.distanceTravelled;
  } else {
    return earning;
  }
}

export const fetchAllEarnings: RequestHandler = async (req, res, next) => {
  try {
    const { phone } = req.body;

    const earnings = await EarningService.fetchAllEarnings(phone);

    return res.status(200).json({
      result: "success",
      data: earnings,
    });
  } catch (error) {
    next(error);
  }
};
