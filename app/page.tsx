import Link from "next/link";

export default function Home() {
  return (
    <main>
      <nav className="flex justify-between p-6 border-b max-w-6xl mx-auto">
        <Link href="/" className="font-bold text-xl">Rayzan.dev</Link>
        <div className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/projects" className="font-bold text-blue-600">Projects</Link>
        </div>
      </nav>

      <section className="max-w-6xl mx-auto p-10 text-center py-24">
        <h1 className="text-5xl font-bold">Hi, I'm Rayzan</h1>
        <p className="text-xl text-gray-600 mt-4">Full-Stack Developer | Next.js Learner</p>
        <p className="mt-6 max-w-xl mx-auto text-gray-500">
          Welcome to my portfolio. I build modern web apps with Next.js.
        </p>
        <Link href="/projects" className="inline-block mt-8 bg-black text-white px-8 py-3 rounded-full">
          See My Work
        </Link>
        <div className="mt-8 flex flex-col items-center gap-2 text-gray-600 sm:flex-row sm:justify-center sm:gap-6">
          <a href="tel:0703450885" className="hover:text-blue-600">0703450885</a>
          <a href="mailto:ryanwaweru08@gmail.com" className="hover:text-blue-600">ryanwaweru08@gmail.com</a>
        </div>
      </section>

      <section className="max-w-6xl mx-auto p-10 grid md:grid-cols-3 gap-6">
        <Link href="/projects/1" className="border p-6 rounded-xl hover:shadow-lg">
          <h3 className="font-bold">Portfolio Website</h3>
          <p className="text-sm text-gray-600 mt-2">Built with Next.js</p>
        </Link>
        <Link href="/projects/2" className="border p-6 rounded-xl hover:shadow-lg">
          <h3 className="font-bold">E-commerce App</h3>
          <p className="text-sm text-gray-600 mt-2">Shop with cart</p>
        </Link>
        <Link href="/projects/3" className="border p-6 rounded-xl hover:shadow-lg">
          <h3 className="font-bold">Weather App</h3>
          <p className="text-sm text-gray-600 mt-2">Live weather API</p>
        </Link>
      </section>
    </main>
  );
}