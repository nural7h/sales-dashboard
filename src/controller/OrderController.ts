import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Order } from "../entity/Order"

export class OrderController {

    private orderRepository = AppDataSource.getRepository(Order)

    //getting all the orders
    async all(request: Request, response: Response, next: NextFunction) {
        return this.orderRepository.find()
    }

    //getting one spesific order ny using id
    async one(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)


        const user = await this.orderRepository.findOne({
            where: { id }
        })

        if (!user) {
            return "unregistered order"
        }
        return user
    }

    //method for creating an order
    async save(request: Request, response: Response, next: NextFunction) {
        const { purchaseDate, country, device, customer, items } = request.body;

        const order = Object.assign(new Order(), {
            purchaseDate,
            country,
            device,
            customer,
            items
        })

        return this.orderRepository.save(order)
    }

    //method for deleting an order
    async remove(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        let customerToRemove = await this.orderRepository.findOneBy({ id })

        if (!customerToRemove) {
            return "this order not exist"
        }

        await this.orderRepository.remove(customerToRemove)

        return "order has been removed"
    }

}