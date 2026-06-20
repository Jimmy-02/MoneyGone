import {Router} from "express";
import { getImageKitAuth, requireAdmin } from "../controllers/adminController";

const router = Router();

router.use(requireAdmin);

router.get("/imagekit/auth",getImageKitAuth);
export default router;