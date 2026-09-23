import Link from "next/link";
import Image from "next/image";
export default function EcommerceProject() {
    return (
        <>
            <main className="min-h-screen bg-[#fafafa]">
                <section className="mx-auto max-w-6xl px-6">

                    <div className="border-t border-gray-200 pt-8">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <Link
                                href="/projects/saas-dashboard"
                                className="text-sm font-semibold transition hover:text-gray-600"
                            >
                                ← Previous Project
                            </Link>

                            <Link
                                href="/#projects"
                                className="text-sm font-semibold transition hover:text-gray-600"
                            >
                                All Projects
                            </Link>

                            <Link
                                href="/projects/fresh-corner"
                                className="text-sm font-semibold transition hover:text-gray-600"
                            >
                                Next Project →
                            </Link>
                        </div>
                    </div>

                    <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
                        E-Commerce
                    </p>

                    <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">
                        E-Commerce Platform
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                        A responsive online shopping experience with product discovery,
                        categories, shopping cart, and checkout flows.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-2">
                        {["Next.js", "TypeScript", "Stripe"].map((technology) => (
                            <span
                                key={technology}
                                className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-600"
                            >
                                {technology}
                            </span>
                        ))}
                    </div>
                    <div className="mt-10 grid max-w-2xl gap-6 border-y border-gray-200 py-6 sm:grid-cols-2">
                        <div>
                            <p className="text-sm font-medium text-gray-400">
                                Role
                            </p>

                            <p className="mt-2 font-medium">
                                Full-Stack Developer
                            </p>
                        </div>

                        <div>
                            <p className="text-sm font-medium text-gray-400">
                                Type
                            </p>

                            <p className="mt-2 font-medium">
                                Application Concept
                            </p>
                        </div>
                    </div>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            href="#"
                            className="rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
                        >
                            Live Demo →
                        </a>

                        <a
                            href="#"
                            className="rounded-full border border-gray-300 px-5 py-3 text-sm font-semibold transition hover:bg-gray-100"
                        >
                            GitHub →
                        </a>
                    </div>

                    <div className="mt-16 overflow-hidden rounded-3xl border border-gray-200 bg-gray-100">
                        <Image
                            src="/projects/ecommerce.jpg"
                            alt="E-Commerce Platform project preview"
                            width={1600}
                            height={1000}
                            className="h-auto w-full"
                        />
                    </div>

                    <div className="mt-20 grid gap-12 md:grid-cols-3">
                        <div>
                            <p className="text-sm font-medium uppercase tracking-widest text-gray-400">
                                01
                            </p>

                            <h2 className="mt-4 text-2xl font-bold tracking-tight">
                                The Challenge
                            </h2>

                            <p className="mt-4 leading-7 text-gray-600">
                                Online stores need to make it easy for customers to discover products,
                                understand options, and move through checkout without unnecessary
                                friction.
                            </p>
                        </div>

                        <div>
                            <p className="text-sm font-medium uppercase tracking-widest text-gray-400">
                                02
                            </p>

                            <h2 className="mt-4 text-2xl font-bold tracking-tight">
                                The Approach
                            </h2>

                            <p className="mt-4 leading-7 text-gray-600">
                                The concept focuses on product discovery, clear categories, responsive
                                layouts, cart management, and a straightforward checkout experience.
                            </p>
                        </div>

                        <div>
                            <p className="text-sm font-medium uppercase tracking-widest text-gray-400">
                                03
                            </p>

                            <h2 className="mt-4 text-2xl font-bold tracking-tight">
                                The Outcome
                            </h2>
                            <p className="mt-4 leading-7 text-gray-600">
                                The result is a responsive e-commerce concept that demonstrates a
                                complete customer journey from product discovery through checkout.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

        </>
    );
}