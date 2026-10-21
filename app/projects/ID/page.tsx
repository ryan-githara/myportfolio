import Link from "next/link";

const projects = [
  { id: "1", title: "Portfolio Website", desc: "My personal portfolio built with Next.js and Tailwind CSS" },
  { id: "2", title: "E-commerce App", desc: "Modern online shop with cart and checkout functionality" },
  { id: "3", title: "Weather App", desc: "App that shows weather using external API" },
];

export default function Projects() {
  return (
    <main className="max-w-6xl mx-auto p-10">
      <Link href="/" className="text-sm underline">← Back Home</Link>
      <h1 className="text-4xl font-bold mt-6 mb-10">My Projects</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`} className="border p-6 rounded-xl hover:bg-gray-50 hover:shadow-lg transition block">
            <h2 className="font-bold text-lg">{project.title}</h2>
            <p className="text-gray-600 text-sm mt-2">{project.desc}</p>
            <span className="text-blue-600 text-sm mt-4 inline-block font-medium">View Project →</span>
          </Link>
        ))}
      </div>
      <footer className="mt-16 border-t pt-8 text-sm text-gray-600">
        <p>Created by Ryan Waweru</p>
        <div className="mt-2 flex flex-col gap-1 sm:flex-row sm:gap-6">
          <a href="tel:0703450885" className="hover:text-blue-600">0703450885</a>
          <a href="mailto:ryanwaweru08@gmail.com" className="hover:text-blue-600">ryanwaweru08@gmail.com</a>
        </div>
      </footer>
    </main>
  );
}