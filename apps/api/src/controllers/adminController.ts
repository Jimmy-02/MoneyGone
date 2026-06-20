import type { Request, Response, NextFunction } from "express";
import { getLocalUser } from "../lib/users";
import { isAdmin } from "../lib/roles";
import { getAuth } from "@clerk/express";

export async function requireAdmin(req: Request, res: Response, next: NextFunction) {
    try{
        const {userId, isAuthenticated} = getAuth(req);
        if (!isAuthenticated || !userId) {
            res.status(401).json({ error: "Unauthorized" });
            return;
        }
        const user = await getLocalUser(userId);

        if(!isAdmin(user.role)){
            res.status(403).json({ error: "Admin only" });
            return;
        }
        next();
    } catch (error) {
        next(error);
    }
}