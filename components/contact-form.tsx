"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("YOUR_FORM_ID");

  if (state.succeeded) {
    return (
      <div className="rounded-2xl border border-gray-200 bg-white p-8">
        <h3 className="text-2xl font-semibold tracking-tight">
          Message sent.
        </h3>
        <p className="mt-3 leading-7 text-gray-600">
          Thanks for reaching out. I&apos;ll get back to you as soon as
          possible.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-gray-200 bg-white p-8"
    >
      <div>
        <label htmlFor="name" className="text-sm font-semibold">
          Name
        </label>

        <input
          id="name"
          type="text"
          name="name"
          required
          className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
          placeholder="Your name"
        />

        <ValidationError
          prefix="Name"
          field="name"
          errors={state.errors}
        />
      </div>

      <div className="mt-6">
        <label htmlFor="email" className="text-sm font-semibold">
          Email
        </label>

        <input
          id="email"
          type="email"
          name="email"
          required
          className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
          placeholder="you@example.com"
        />

        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
      </div>

      <div className="mt-6">
        <label htmlFor="message" className="text-sm font-semibold">
          Message
        </label>

        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="mt-2 w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
          placeholder="Tell me about your project..."
        />

        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="mt-6 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {state.submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}