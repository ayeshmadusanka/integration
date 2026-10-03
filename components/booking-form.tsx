'use client'

import { useEffect } from 'react'
import { ArrowUpRight } from 'lucide-react'

export function BookingForm() {
  useEffect(() => {
    const form = document.getElementById('form') as HTMLFormElement | null
    const submitBtn = form?.querySelector<HTMLButtonElement>('button[type="submit"]')

    if (!form || !submitBtn) return

    const submitLabel = submitBtn.querySelector<HTMLElement>('[data-submit-label]')
    const originalText = submitLabel?.textContent ?? 'Send inquiry'

    const handleSubmit = async (event: SubmitEvent) => {
      event.preventDefault()

      const formData = new FormData(form)
      formData.append('access_key', 'e89a8491-86ef-44f9-b910-47bfa678c020')

      if (submitLabel) submitLabel.textContent = 'Sending...'
      submitBtn.disabled = true

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData,
        })

        const data = await response.json()

        if (response.ok) {
          window.alert('Success! Your message has been sent.')
          form.reset()
        } else {
          window.alert(`Error: ${data.message}`)
        }
      } catch {
        window.alert('Something went wrong. Please try again.')
      } finally {
        if (submitLabel) submitLabel.textContent = originalText
        submitBtn.disabled = false
      }
    }

    form.addEventListener('submit', handleSubmit)

    return () => form.removeEventListener('submit', handleSubmit)
  }, [])

  return (
    <form id="form" action="mailto:integration.ofc@gmail.com" method="post" encType="text/plain" className="grid gap-4 sm:grid-cols-2">
      <label className="sr-only" htmlFor="booking-name">Your name</label>
      <input id="booking-name" name="name" required placeholder="Your name" className="border-b border-border bg-transparent px-0 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary" />
      <label className="sr-only" htmlFor="booking-email">Email address</label>
      <input id="booking-email" name="email" type="email" required placeholder="Email address" className="border-b border-border bg-transparent px-0 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary" />
      <label className="sr-only" htmlFor="booking-message">Booking details</label>
      <textarea id="booking-message" name="message" required placeholder="Tell us about the show" rows={3} className="border-b border-border bg-transparent px-0 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary sm:col-span-2" />
      <button type="submit" className="justify-self-start border border-primary px-5 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
        <span data-submit-label>Send inquiry</span> <ArrowUpRight className="ml-2 inline" aria-hidden="true" />
      </button>
    </form>
  )
}
