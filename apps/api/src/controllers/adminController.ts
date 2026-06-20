import type { Request, Response, NextFunction } from "express";
import { getLocalUser } from "../lib/users";
import { isAdmin } from "../lib/roles";
import { getAuth } from "@clerk/express";
import { getEnv } from "../lib/env";
import ImageKit from "@imagekit/nodejs";
import { products } from "../db/schema";
import { desc } from "drizzle-orm";
import { db } from "../db";

const env = getEnv();

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

export function getImageKitAuth(req: Request, res: Response, next: NextFunction) {
    try{
        const client = new ImageKit({privateKey: env.IMAGEKIT_PRIVATE_KEY});

        const auth = client.helper.getAuthenticationParameters();

        res.json({
            ...auth,
            publicKey: env.IMAGEKIT_PUBLIC_KEY,
            urlEndpoint: env.IMAGEKIT_URL_ENDPOINT,
        });
    } catch (error) {
        next(error);
    }
}

export async function listAdminProducts(_req: Request, res: Response, next: NextFunction) {
    try{
        const rows = await db.select().from(products).orderBy(desc(products.createdAt));;
        res.json({products: rows});
    }catch (error) {
        next(error);
    }
}