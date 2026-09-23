const technologies = [
  "Next.js",
  "TypeScript",
  "React",
  "Tailwind CSS",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl items-center px-6 py-16 sm:py-24">
        <div className="max-w-4xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Full-Stack Developer
          </p>

          <h1 className="max-w-4xl text-5xl font-bold tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-8xl">
            I build digital products
            <span className="text-gray-400"> that solve real problems.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600 sm:text-xl">
            I design and develop modern websites and web applications for
            businesses that want better digital experiences.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-gray-800"
            >
              View my work
            </a>

            <a
              href="#contact"
              className="rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-gray-100"
            >
              Let's talk
            </a>
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-gray-200 pt-6">
            <span className="text-sm text-gray-400">
              Building with
            </span>

            {technologies.map((technology) => (
              <span
                key={technology}
                className="text-sm font-medium text-gray-600"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}