import Navbar from "./Navbar"

export default function Header() {
  return (
    <header className="bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#001A5A]">
            Jess Tech
          </h1>

          <p className="text-sm text-slate-500">
            Développement web & assistance technique
          </p>
        </div>

        <Navbar />
      </div>
    </header>
  )
}