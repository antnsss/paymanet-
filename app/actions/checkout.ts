'use server'

import Stripe from 'stripe'
import { redirect } from 'next/navigation'
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)


export async function createCheckoutSession() {
  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: { name: 'Premium Subscription' },
          unit_amount: 999, 
        },
        quantity: 1,
      },
    ],
    success_url: `${process.env.NEXT_PUBLIC_DOMAIN}/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_DOMAIN}/cancel`,
  })

  redirect(session.url!)
}
