export default function CancelPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-3xl font-bold text-red-600">❌ Payment Canceled</h1>
      <p className="mt-4 text-lg text-gray-700 max-w-md">
        Ти відмінив свою оплату. Не переживай ти зможеш повторити свою оплату за <strong>Premium Subscription</strong>.
      </p>

      <a
        href="/"
        className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-lg transition"
      >
        Back to Home
      </a>
    </div>
  )
}
