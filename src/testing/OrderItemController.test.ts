import { OrderItemController } from "../controller/OrderItemController";
import { Request, Response } from "express";

// mocking the AppDataSource
jest.mock("../data-source", () => ({
    AppDataSource: {
        getRepository: jest.fn(() => ({
            save: jest.fn(),
        }))
    }
}));

describe("OrderItemController", () => {
    let orderItemController: OrderItemController;
    let mockRequest: Partial<Request>; // mock request object
    let mockResponse: Partial<Response>; // mock response object
    let mockNext: jest.Mock;

    beforeEach(() => {
        orderItemController = new OrderItemController();
        mockRequest = {} as Partial<Request>;
        mockResponse = {} as Partial<Response>;
        mockNext = jest.fn();
    });

    it("should save an order item", async () => {
      // Mock request body
      const requestBody = {
          EAN: "1234567890123",
          quantity: 2,
          price: 10.99
      };
      mockRequest.body = requestBody;
  
      // Call save method
      await orderItemController.save(mockRequest as Request);
  });
  
});
