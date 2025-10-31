export default function Home() {
  return (
    <div className="grid md:grid-cols-4 gap-6">
      <a href="/ride" className="card p-6 hover:shadow-md transition">
        <div className="text-xs uppercase tracking-wide text-gray-500 mb-2">
          On-demand
        </div>
        <div className="text-2xl font-semibold mb-2">BuyItRide</div>
        <p className="text-gray-700">Uber-like booking with live ETAs.</p>
      </a>

      <a href="/cleaning" className="card p-6 hover:shadow-md transition">
        <div className="text-xs uppercase tracking-wide text-gray-500 mb-2">
          Home services
        </div>
        <div className="text-2xl font-semibold mb-2">BuyItClean</div>
        <p className="text-gray-700">Standard/Deep/Move-out with checklists.</p>
      </a>

      <a href="/wash" className="card p-6 hover:shadow-md transition">
        <div className="text-xs uppercase tracking-wide text-gray-500 mb-2">
          Laundry
