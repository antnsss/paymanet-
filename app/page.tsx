'use client'

import { useFormStatus } from 'react-dom'

import { createCheckoutSession } from './actions/checkout'

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-3xl font-bold">Premium Subscription</h1>
      <p className="text-lg">Get full access for just <strong>$9.99</strong></p>

      <form action={createCheckoutSession}>
        <SubmitButton />
      </form>
    </div>
  )
}

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-lg transition disabled:opacity-50"
    >
      {pending ? 'Processing...' : 'Оплатити'}
    </button>
  )
}
