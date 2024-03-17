import { AppDataSource } from "../data-source" // this manages the data
import { Request, Response } from "express"
import { Customer } from "../entity/Customer"

export class CustomerController {  
    //using export class to be able to access this class

    //retrieving a repository for the customer class
    private customerRepository = AppDataSource.getRepository(Customer)

    //method fetching all the customers
    async all() {
        return this.customerRepository.find()
    }

    async one(request: Request) {
        const id = parseInt(request.params.id)


        const user = await this.customerRepository.findOne({
            where: { id }
        })

        if (!user) {
            return "unregistered customer"
        }
        return user
    }
    //method to create a customer
    async save(request: Request) {
        const { firstName, lastName, email } = request.body;

        const customer = Object.assign(new Customer(), {
            firstName,
            lastName,
            email
        })

        return this.customerRepository.save(customer)
    }

    //method to delete a customer
    async remove(request: Request) {
        const id = parseInt(request.params.id)

        let customerToRemove = await this.customerRepository.findOneBy({ id })

        if (!customerToRemove) {
            return "this customer not exist"
        }

        await this.customerRepository.remove(customerToRemove)

        return "customer has been removed"
    }

    //method to count the customers
    async count(response: Response) {
        const count = await this.customerRepository.count();
        return response.json({ count });
    }

}