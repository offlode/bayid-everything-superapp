import { db } from "../../lib/db";

export default async function Store() {
  const products = await db.product.findMany({ take: 12 });

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((p) => (
        <div key={p.id} className="card p-4">
          {Array.isArray(p.images) && p.images[0] && (
            <img
              src={p.images[0]}
              className="w-full h-40 object-c
