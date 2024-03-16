import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Customer } from "./entity/Customer"
import { OrderItem } from "./entity/OrderItem"
import { Order } from "./entity/Order"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "331425",
    database: "sales_dashboard",
    synchronize: true,
    logging: false,
    entities: [User, Customer, OrderItem, Order],
    migrations: [],
    subscribers: [],
})
