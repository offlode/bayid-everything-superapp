import '../styles/globals.css';
export const metadata = { title: 'Bayid Everything', description: 'Ride • Cleaning • Wash • Store' };
export default function Root({children}:{children:React.ReactNode}){
  return <html lang='en'><body>
    <header className='container' style={{paddingBottom:0}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <a href='/' style={{fontWeight:600}}>Bayid Everything</a>
        <nav style={{display:'flex',gap:8}}>
          <a className='btn btn-ghost' href='/ride'>BuyItRide</a>
          <a className='btn btn-ghost' href='/cleaning'>BuyItClean</a>
          <a className='btn btn-ghost' href='/wash'>BuyItWash</a>
          <a className='btn btn-ghost' href='/store'>Store</a>
          <a className='btn btn-primary' href='/dashboard'>Admin</a>
        </nav>
      </div>
    </header>
    <main className='container'>{children}</main>
  </body></html>
}
