import express from 'express';

import { createOrder, getOrders, updateOrder, deleteOrder } from '../controllers/orderController.js';


const orderRouter = express.Router();


orderRouter.post("/", createOrder);
orderRouter.get("/", getOrders);
orderRouter.patch("/:id", updateOrder);
orderRouter.delete("/:id", deleteOrder);



export default orderRouter;