import { Link } from "react-router-dom"

export default function PortfolioPreview() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl bg-[#001A5A] px-8 py-16 text-white shadow-2xl md:px-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-300">
            Réalisations
          </p>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Découvrez les projets réalisés pour mes clients
          </h2>

          <p className="mt-6 max-w-3xl text-slate-200 leading-8 text-lg">
            Une sélection de réalisations sera présentée ici afin de découvrir
            des exemples concrets de projets web menés pour différents besoins
            et activités.
          </p>

          <div className="mt-10">
            <Link
              to="/realisations"
              className="inline-block rounded-full bg-white px-6 py-3 font-semibold text-[#001A5A] transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Voir les réalisations
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}