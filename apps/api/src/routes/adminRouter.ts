import {Router} from "express";
import { getImageKitAuth, listAdminProducts, requireAdmin } from "../controllers/adminController";

const router = Router();

router.use(requireAdmin);

router.get("/imagekit/auth",getImageKitAuth);
router.get("/products", listAdminProducts);
export default router;