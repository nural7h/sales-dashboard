import { UserController } from "./controller/UserController"
import { CustomerController } from "./controller/CustomerController"
import { OrderItemController } from "./controller/OrderItemController"
import { OrderController } from "./controller/OrderController"

export const Routes = [{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
}, {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove"
},
//// routes for cutomer
{
    method: "get",
    route: "/customers",
    controller: CustomerController,
    action: "all"
}, {
    method: "get",
    route: "/customers/:id",
    controller: CustomerController,
    action: "one"
}, {
    method: "post",
    route: "/customers",
    controller: CustomerController,
    action: "save"
}, {
    method: "delete",
    route: "/customers/:id",
    controller: CustomerController,
    action: "remove"
}, {
    method: "get",
    route: "/customers/count",
    controller: CustomerController,
    action: "count"
},

//// routes for order item
{
    method: "get",
    route: "/items",
    controller: OrderItemController,
    action: "all"
}, {
    method: "get",
    route: "/items/:id",
    controller: OrderItemController,
    action: "one"
}, {
    method: "post",
    route: "/items",
    controller: OrderItemController,
    action: "save"
}, {
    method: "delete",
    route: "/items/:id",
    controller: OrderItemController,
    action: "remove"
},

//// routes for order 
{
    method: "get",
    route: "/orders",
    controller: OrderController,
    action: "all"
}, {
    method: "get",
    route: "/orders/:id",
    controller: OrderController,
    action: "one"
}, {
    method: "post",
    route: "/orders",
    controller: OrderController,
    action: "save"
}, {
    method: "delete",
    route: "/orders/:id",
    controller: OrderController,
    action: "remove"
},

]