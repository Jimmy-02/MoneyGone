import {Router} from "express";
import { getOrder, listOrders, createStreamChannel } from "../controllers/orderController";

const router = Router();

router.get("/", listOrders);
router.get("/:id", getOrder);
router.post("/:id/stream-channel", createStreamChannel);

export default router;