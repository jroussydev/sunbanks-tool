import Navbar from "./Navbar"
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="bg-[#020817]/95 border-b border-blue-500/20">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-3xl font-black text-white">
            <Logo className="h-14 lg:h-16" />
          </div>

          <div>
            <h1 className="text-xl font-bold text-white">
              JESS <span className="text-[#0D5BFF]">TECH</span>
            </h1>

            <p className="text-xs text-slate-300">
              Développement web & assistante technique
            </p>
          </div>
        </div>

        <Navbar />
      </div>
    </header>
  )
}