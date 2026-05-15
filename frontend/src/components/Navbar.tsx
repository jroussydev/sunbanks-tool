import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="flex items-center gap-6">
      <Link to="/" className="text-[#001A5A] font-medium hover:text-[#0D5BFF] transition">
        Accueil
      </Link>

      <Link to="/services" className="text-[#001A5A] font-medium hover:text-[#0D5BFF] transition">
        Services
      </Link>

      <Link to="/contact" className="text-[#001A5A] font-medium hover:text-[#0D5BFF] transition">
        Contact
      </Link>
    </nav>
  )
}