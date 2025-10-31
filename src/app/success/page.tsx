export default function Success() {
  return (
    <div className="card p-6 text-center">
      <h1 className="text-2xl font-semibold mb-3 text-green-600">
        Payment Successful
      </h1>
      <p className="text-gray-700">
        Thank you! Your order has been processed successfully.
      </p>
      <a
        href="/store"
        className="btn btn-primary inline-block mt-4"
      >
        Continue Shopping
      </a>
    </div>
  );
}
