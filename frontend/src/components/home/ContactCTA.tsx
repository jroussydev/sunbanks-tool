import { Link } from "react-router-dom"

export default function ContactCTA() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-slate-200 px-8 py-14 text-center shadow-xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#0D5BFF]">
          Contact
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-[#001A5A]">
          Un projet ou une question ?
        </h2>

        <p className="mt-6 text-lg text-slate-600 leading-8">
          Besoin d’un site web, d’une refonte ou d’un accompagnement technique ?
          Parlons-en simplement.
        </p>

        <div className="mt-8">
          <Link
            to="/contact"
            className="inline-block rounded-full bg-[#0D5BFF] px-8 py-3 font-semibold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:bg-[#001A5A] hover:shadow-xl"
          >
            Me contacter
          </Link>
        </div>
      </div>
    </section>
  )
}