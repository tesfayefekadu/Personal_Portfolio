export default function About() {
  return (
    <section id="about" className="border-t border-gray-200 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-start">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
            About Me
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Building useful things for the web.
          </h2>
        </div>
        <div className="space-y-6 text-lg leading-8 text-gray-600">
          <p className="mt-6 text-lg leading-8 text-gray-600">
            I'm a developer focused on building modern websites and web
            applications with a strong focus on usability, performance, and
            clean design.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            I enjoy taking an idea or business problem and turning it into a
            practical digital product that people can actually use.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            I'm continuously improving my skills across frontend development,
            backend systems, databases, and modern web technologies.
          </p>
        </div>
      </div>
    </section>
  );
}