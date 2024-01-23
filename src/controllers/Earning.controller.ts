import { RequestHandler } from "express";
import * as EarningService from "../services/Earning.service";
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
    const { phone } = req.params;
    const today = new Date();
    const lastWeekStart = new Date(today);
    lastWeekStart.setDate(today.getDate() - 7);
    const pastWeekEarnings = await EarningService.fetchPastWeekEarning(
      phone,
      lastWeekStart,
      today
    );

    const datesInRange = [];
    let currentDate = new Date(today);

    for (let i = 0; i < 7; i++) {
      currentDate.setDate(currentDate.getDate() - 1); // Decrement the date by one day

      datesInRange.push(currentDate.toLocaleDateString("en-US"));
    }

    console.log(datesInRange);

    const result = datesInRange.map((date) => {
      const matchingEarning = pastWeekEarnings.find((earning) => {
        let earningDate = new Date(
          earning.tripDate.getTime() -
            earning.tripDate.getTimezoneOffset() * 60000
        );
        return date === earningDate.toLocaleDateString("en-US");
      });
    
      return {
        date: date,
        earning: matchingEarning || 0,
      };
    });

    res.json({ result });
  } catch (error) {
    next(error);
  }
};
