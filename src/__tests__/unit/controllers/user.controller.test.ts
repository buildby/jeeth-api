import { Request, NextFunction } from "express";
import * as UserController from "../../../controllers/User.controller";
import * as UserService from "../../../services/User.service";

describe('getUsers', () => {
  it('should call "getUsers"', async () => {
    const getUsers = jest.spyOn(UserService, 'getUsers');
    const mockRequest = {} as Request;
    const mockResponse: any = {
      status: () => ({
        json: jest.fn(),
      }),
    };
    const mockNext: NextFunction = jest.fn();

    await UserController.getUsers(mockRequest, mockResponse, mockNext);

    expect(getUsers).toHaveBeenCalled();
  });
})