import type { Request, Response, NextFunction } from "express";
import { db } from "../db";
import { products } from "../db/schema";
import { and, desc, eq } from "drizzle-orm";

export async function listProducts(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const cat =
      typeof req.query.category === "string" ? req.query.category.trim() : "";

    const activeOnly = eq(products.active, true);
    const whereClause = cat
      ? and(activeOnly, eq(products.category, cat))
      : activeOnly;

    const rows = await db
      .select()
      .from(products)
      .where(whereClause)
      .orderBy(desc(products.createdAt));

    res.json({ products: rows });
  } catch (e) {
    next(e);
  }
}