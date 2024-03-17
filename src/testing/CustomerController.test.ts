import { CustomerController } from "../controller/CustomerController"; 
import { Request, Response } from "express";

// mocking the AppDataSource
jest.mock("../data-source", () => ({
    AppDataSource: {
        getRepository: jest.fn(() => ({
            save: jest.fn(),
        }))
    }
}));

describe("CustomerController", () => {
    let customerController: CustomerController;
    let mockRequest: Partial<Request>; // mock request object
    let mockResponse: Partial<Response>; // mock response object
    let mockNext: jest.Mock;

    beforeEach(() => {
        customerController = new CustomerController();
        mockRequest = {} as Partial<Request>;
        mockResponse = {} as Partial<Response>;
        mockNext = jest.fn();
    });

    it("should save a customer", async () => {
      // Mock request body
      const requestBody = {
          firstName: "Hello",
          lastName: "World",
          email: "hello@gmail.com"
      };
      mockRequest.body = requestBody;
  
      // Call save method
      await customerController.save(mockRequest as Request);
  });

  
  
});
