import {db} from '@/lib/db';
async function getSimilar(id:string){
  const p=await db.product.findUnique({where:{id}});
  if(!p) return [];
  return db.product.findMany({ where:{ categoryId:p.categoryId, NOT:{ id } }, take:6, orderBy:{ ratingAvg:'desc' } });
}
export default async function P({params}:{params:{id:string}}){
  const p=await db.product.findUnique({where:{id:params.id}});
  if(!p) return <div>Not found</div>;
  const sims=await getSimilar(params.id);
  return <div className='grid' style={{gap:16}}>
    <div className='card'><h1 style={{fontWeight:700,fontSize:'1.5rem'}}>{p.title}</h1>
    <form action='/api/cart/add' method='post'><input type='hidden' name='productId' value={p.id}/><button className='btn btn-primary'>Add to cart</button></form></div>
    <div><div style={{fontWeight:600,marginBottom:8}}>Similar products</div>
      <div className='grid' style={{gap:12}}>{sims.map(s=><a key={s.id} href={'/store/'+s.id} className='card'>{s.title}</a>)}</div>
    </div>
  </div>
}
