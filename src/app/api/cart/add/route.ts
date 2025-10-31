import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../lib/db";

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const productId = String(form.get("productId") || "");
  const guest = req.cookies.get("guest")?.value || "guest";

  if (!productId)
    return NextResponse.redirect(new URL("/store", req.url));

  let cart = await db.cart.findFirst({ where: { guestId: guest } });
  if (!cart) {
    cart = await db.cart.create({ data: { guestId: guest } });
  }

  const existing = await db.cartItem.findFirst({
    where: { cartId: cart.id, productId },
  });

  if (existing) {
    await db.cartItem.update({
      where: { id: existing.id },
      data: { qty: existing.qty + 1 },
    });
  } else {
    await db.cartItem.create({
      data: { cartId: cart.id, productId, qty: 1 },
    });
  }

  return NextResponse.redirect(new URL("/cart", req.url));
}
