import Image from "next/image";
import Link from "next/link";
const projects = [
    {
        title: "Fresh Corner",
        description:
            "A modern business website concept focused on product discovery, store locations, business inquiries, and a stronger digital presence.",
        category: "Business Website",
        tech: ["Next.js", "TypeScript", "Tailwind CSS"],
        image: "/projects/fresh-corner.jpg",
        link: "/projects/fresh-corner",
    },
    {
        title: "SaaS Dashboard",
        description:
            "A modern dashboard concept for managing customers, analytics, and business operations from a single interface.",
        category: "Web Application",
        tech: ["Next.js", "TypeScript", "PostgreSQL"],
        image: "/projects/saas-dashboard.jpg",
        link: "/projects/saas-dashboard",
    },
    {
        title: "E-Commerce Platform",
        description:
            "A responsive online shopping experience with product discovery, categories, shopping cart, and checkout flows.",
        category: "E-Commerce",
        tech: ["Next.js", "TypeScript", "Stripe"],
        image: "/projects/ecommerce.jpg",
        link: "/projects/ecommerce",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="border-t border-gray-200 py-24">
            <div className="mx-auto max-w-6xl px-6">
                {/* Section Header */}
                <div className="max-w-2xl">
                    <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
                        Selected Work
                    </p>

                    <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                        Projects that solve real problems.
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        A selection of websites and applications focused on usability,
                        performance, and real-world business needs.
                    </p>
                </div>

                {/* Project Cards */}
                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <article
                            key={project.title}
                            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl"
                        >
                            {/* Project Preview */}
                            {/* Project Image */}
                            <div className="relative h-52 overflow-hidden bg-gray-100 sm:h-56"> 
                                <Image
                                    src={project.image}
                                    alt={`${project.title} project preview`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover transition duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Project Information */}
                            <div className="p-7">
                                <p className="text-sm font-medium text-gray-500">
                                    {project.category}
                                </p>

                                <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                                    {project.title}
                                </h3>

                                <p className="mt-3 leading-7 text-gray-600">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {project.tech.map((technology) => (
                                        <span
                                            key={technology}
                                            className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
                                        >
                                            {technology}
                                        </span>
                                    ))}
                                </div>

                                {/* Project Link */}
                                <div className="mt-6">
                                    <Link
                                         href={project.link}
                                        className="inline-flex items-center text-sm font-semibold transition group-hover:gap-2"
                                    >
                                        View project
                                        <span className="ml-1">→</span>
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}