import ContactForm from "@/components/contact-form";
export default function Contact() {
  return (
    <section id="contact" className="border-t border-gray-200 py-24">
      
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl bg-black px-8 py-16 text-white sm:px-12 lg:px-16">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-gray-400">
              Get In Touch
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Have a project in mind?
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              Whether you need a business website, web application, or a
              custom digital product, I'd be happy to hear about your idea.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="mailto:your@email.com"
                className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
              >
                Send me an email
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold transition hover:bg-gray-50"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold transition hover:bg-gray-100"
              >
                LinkedIn
              </a>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}