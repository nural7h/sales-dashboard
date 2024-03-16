import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";

import { OrderItem } from "./OrderItem";
import { Customer } from './Customer';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "date" })
  purchaseDate: Date;

  @Column()
  country: string;

  @Column()
  device: string;

  @ManyToOne(() => Customer, customer => customer.orders)
  customer: Customer;

  @OneToMany(() => OrderItem, orderItem => orderItem.order)
  items: OrderItem[];
}
