import {cookies} from 'next/headers'; import {db} from '@/lib/db';
export default async function C(){
  const g=(await cookies()).get('guest')?.value||'guest';
  let cart=await db.cart.findFirst({where:{guestId:g}}); if(!cart) cart=await db.cart.create({data:{guestId:g}});
  const items=await db.cartItem.findMany({where:{cartId:cart.id}});
  const products=await db.product.findMany({ where:{ id:{ in: items.map(i=>i.productId) } } });
  const map=new Map(products.map(p=>[p.id,p]));
  const total=items.reduce((s,i)=> s + (map.get(i.productId)?.priceCents||0)*i.qty, 0);
  return <div><h1>Cart</h1>
    {items.map(i=>{const p=map.get(i.productId)!; return <div key={i.id} className='card'>{p.title} × {i.qty}</div>})}
    <form action='/api/checkout/store' method='post'><input name='amount' type='hidden' value={total}/><button className='btn btn-primary'>Checkout</button></form>
  </div>
}
