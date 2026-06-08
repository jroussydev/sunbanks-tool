import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="flex items-center gap-8">
      <Link to="/" className="text-slate-200 hover:text-[#0D5BFF] transition">
        Accueil
      </Link>

      <Link to="/services" className="text-slate-200 hover:text-[#0D5BFF] transition">
        Services
      </Link>

      <Link to="/realisations" className="text-slate-200 hover:text-[#0D5BFF] transition">
        Réalisations
      </Link>

      <Link to="/contact" className="text-slate-200 hover:text-[#0D5BFF] transition">
        Contact
      </Link>
    </nav>
  )
}