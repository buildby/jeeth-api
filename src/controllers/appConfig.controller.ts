import { AppConfig } from "aws-sdk";
import * as AppConfigService from "../services/appConfig.service";
import { Response, Request, NextFunction } from "express";

// Vechjile Make Appcionfig = {
//     "type": "Vechile Make",
//     value: '["Toyota","Maruti"]',
// };

// Vechjile Model Appcionfig = {
//     "type": "Vechile Models",
//     value: '[{"make":"Toyota","modelName":"Fortuner"},{"make":"Maruti","modelName":"Swift"}]',
// };

export const insertAppConfig = async (
    req: any,
    res: Response,
    next: NextFunction
) => {

    let { type, value } = req.body;

    value = JSON.stringify(value);

    let data = await AppConfigService.createAppConfig({ type: type, value: value, });
    if (data) {
        res.status(200).json({
            message: "Details added successfully",
            detail: data,
            type: true,
        });
    } else {
        res.status(500).json({
            message: "Error adding Details",
            type: false,
        });
    }
};
export const fetchVehicleConfigs = async (
    req: any,
    res: Response,
    next: NextFunction
) => {

    let { type, value } = req.body;

    value = JSON.stringify(value);

    let data = await AppConfigService.createAppConfig({ type: type, value: value, });

    // const makes = await AppConfigService.fetchAppConfig('Vehicle Makes');
    // const models = await AppConfigService.fetchAppConfig('Vehicle Models');


    res.status(200).json({
        result: 'success',
        // data: { makes, models },
    });
};





// export const getAppConfigs = async (
//     req: any,
//     res: Response,
//     next: NextFunction
// ) => {

//     try {
//         const { types } = req.body;

//         const configs = await AppConfigModel.find({
//             type: { $in: types },
//         });

//         return res.status(200).json({
//             result: configs,
//             success: configs != null,
//         });

//     } catch (e) {
//         return res.status(400).json({
//             success: false,
//         });
//     }
// };