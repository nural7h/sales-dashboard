import { OrderController } from "../controller/OrderController";
import { Request, Response } from "express";
import { AppDataSource } from "../data-source";

// mocking the AppDataSource
jest.mock("../data-source", () => ({
  AppDataSource: {
      getRepository: jest.fn(() => ({
          save: jest.fn(),
      }))
  }
}));

describe("OrderItemController", () => {
  let orderController: OrderController;
  let mockRequest: Partial<Request>; // mock request object
  let mockResponse: Partial<Response>; // mock response object
  let mockNext: jest.Mock;

  beforeEach(() => {
      orderController = new OrderController();
      mockRequest = {} as Partial<Request>;
      mockResponse = {} as Partial<Response>;
      mockNext = jest.fn();
  });

  //an item to pass in the request body
  let item = {
    EAN: "1234567890123",
    quantity: 2,
    price: 10.99
  }

  it("should save an order item", async () => {
    // Mock request body
    const requestBody = {
        purchaseDate: "2024-03-15",
        country: "Denmark",
        device: "Samsung S20",
        customer:{
          id: 2
        },
        items:{item}
    };
    mockRequest.body = requestBody;

    // Call save method
    await orderController.save(mockRequest as Request);
});

});
