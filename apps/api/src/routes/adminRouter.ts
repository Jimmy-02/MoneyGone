import {Router} from "express";
import { createAdminProduct, getImageKitAuth, listAdminProducts, requireAdmin } from "../controllers/adminController";

const router = Router();

router.use(requireAdmin);

router.get("/imagekit/auth",getImageKitAuth);
router.get("/products", listAdminProducts);
router.post("/products", createAdminProduct);
export default router;