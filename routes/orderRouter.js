import express from 'express';

import { createOrder, getOrders } from '../controllers/orderController.js';
import { deleteOrder } from '../controllers/orderController.js';


const orderRouter = express.Router();


orderRouter.post("/", createOrder);
orderRouter.get("/", getOrders);
orderRouter.delete("/:id", deleteOrder);



export default orderRouter;