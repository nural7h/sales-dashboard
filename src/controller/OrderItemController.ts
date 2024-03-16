import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { OrderItem } from "../entity/OrderItem"

export class OrderItemController {

    private orderItemRepository = AppDataSource.getRepository(OrderItem)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.orderItemRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)


        const item = await this.orderItemRepository.findOne({
            where: { id }
        })

        if (!item) {
            return "unregistered item"
        }
        return item
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { EAN, quantity, price } = request.body;

        const item = Object.assign(new OrderItem(), {
            EAN,
            quantity,
            price,
            
        })

        return this.orderItemRepository.save(item)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        let itemToRemove = await this.orderItemRepository.findOneBy({ id })

        if (!itemToRemove) {
            return "this item not exist"
        }

        await this.orderItemRepository.remove(itemToRemove)

        return "item has been removed"
    }

}