'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function SuccessPage() {
  const [showMessage, setShowMessage] = useState(false)

  useEffect(() => {
    localStorage.setItem('premium', 'true')

    const timer = setTimeout(() => setShowMessage(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="text-3xl font-bold text-green-600">Payment Successful!</h1>
      <p className="mt-4 text-lg text-gray-700">Дякую за вашу підписку </p>

      {showMessage && (
        <p className="mt-6 text-xl font-semibold text-indigo-700 animate-fade-in">
          🌟 У вас тепер <span className="text-indigo-600 font-bold">Premium</span> доступ!
        </p>
      )}

      <Link
        href="/"
        className="mt-10 bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-lg transition"
      >
        На головну сторінку
      </Link>
    </div>
  )
}
