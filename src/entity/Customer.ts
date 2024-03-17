import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Order } from "./Order";

@Entity()   // intializing the class as entity
export class Customer {

  @PrimaryGeneratedColumn()   // primary key
  id: number

  @Column()
  firstName: string

  @Column()
  lastName: string

  @Column()
  email:string

  @OneToMany(() => Order, order => order.customer)
  orders: Order[];
}
