const technologies = [
  {
    name: "Next.js",
    description: "React framework for modern web applications",
  },
  {
    name: "TypeScript",
    description: "Typed JavaScript for reliable applications",
  },
  {
    name: "React",
    description: "Component-based user interfaces",
  },
  {
    name: "Tailwind CSS",
    description: "Responsive and maintainable UI styling",
  },
  {
    name: "PostgreSQL",
    description: "Reliable relational database",
  },
  {
    name: "Prisma",
    description: "Type-safe database access for TypeScript",
  },
  {
    name: "Stripe",
    description: "Payments and checkout integration",
  },
  {
    name: "Git & GitHub",
    description: "Version control and collaborative development",
  },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="border-t border-gray-200 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
            Technology
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Tools I use to build.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            A modern development stack focused on performance, maintainability,
            and great user experiences.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-4">
          {technologies.map((technology) => (
            <div
              key={technology.name}
              className="bg-white p-6 transition hover:bg-gray-50"
            >
              <h3 className="text-lg font-semibold">
                {technology.name}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                {technology.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}