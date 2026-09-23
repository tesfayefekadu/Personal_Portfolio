const services = [
  {
    number: "01",
    title: "Business Websites",
    description:
      "Modern, responsive websites designed to help businesses establish a professional online presence and reach their customers.",
  },
  {
    number: "02",
    title: "Web Applications",
    description:
      "Interactive web applications built to solve specific business problems, improve workflows, and deliver useful digital experiences.",
  },
  {
    number: "03",
    title: "E-Commerce",
    description:
      "Online stores with product discovery, shopping carts, checkout experiences, and integrations for growing businesses.",
  },
  {
    number: "04",
    title: "Business Platforms",
    description:
      "Custom platforms and dashboards that help organizations manage information, operations, customers, and internal processes.",
  },
];

export default function Services() {
  return (
    <section id="services" className="border-t border-gray-200 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
            What I Build
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Digital products built around real needs.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            I focus on building practical digital experiences that are fast,
            responsive, accessible, and easy to use.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-gray-200 bg-gray-200 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.number}
              className="bg-white p-8 transition hover:bg-gray-50"
            >
              <span className="text-sm font-medium text-gray-400">
                {service.number}
              </span>

              <h3 className="mt-8 text-2xl font-semibold">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}