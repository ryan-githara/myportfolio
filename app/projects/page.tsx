import Link from "next/link";

const projects = [
  { id: 1, title: "Portfolio Website", desc: "My personal portfolio built with Next.js and Tailwind" },
  { id: 2, title: "E-commerce App", desc: "Modern shop with cart and checkout" },
  { id: 3, title: "Weather App", desc: "Shows weather using API" },
];

export default function ProjectsPage() {
  return (
    <main className="max-w-6xl mx-auto p-10">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <Link key={p.id} href={`/projects/${p.id}`} className="border rounded-2xl p-6 hover:shadow-lg hover:bg-gray-50 transition block">
            <h4 className="font-bold">{p.title}</h4>
            <p className="text-sm text-gray-600 mt-2">{p.desc}</p>
            <span className="text-blue-600 text-sm mt-4 inline-block">View Details →</span>
          </Link>
        ))}
      </div>
      <Link href="/" className="inline-block mt-10 text-sm underline">← Back Home</Link>
    </main>
  );
}