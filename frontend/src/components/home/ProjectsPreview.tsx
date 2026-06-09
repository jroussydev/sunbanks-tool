export default function ProjectsPreview() {
  const projects = [
    {
      title: "Sunbanks Tool",
      description: "Dashboard fullstack React / Node.js / PostgreSQL.",
    },
    {
      title: "Projet en préparation",
      description: "Nouvelle expérimentation technique en cours de conception.",
    },
    {
      title: "Outils internes",
      description: "Développements techniques et solutions en cours de construction.",
    },
  ]

  return (
    <section className="px-6 py-20">
      <div className="grid gap-10 lg:grid-cols-[25%_70%]">
        <div className="self-center">

  <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
    Dans les coulisses
  </p>

  <h2 className="text-4xl font-black text-white">
    Les projets techniques en cours
  </h2>

  <p className="mt-4 text-slate-400 leading-7">
    Outils internes, expérimentations et développements qui illustrent
    mon travail quotidien de développeuse.
  </p>

</div>

        <div className="space-y-4">
          {projects.map((project) => (
            <article
  key={project.title}
  className="
    group
    flex
    items-center
    justify-between
    rounded-2xl
    border
    border-blue-500/15
    bg-gradient-to-br
    from-[#081120]
    to-[#0b1d35]
    p-6
    transition
    duration-300
    hover:border-blue-400/50
    hover:-translate-y-1
  "
>
<div>

  <h3 className="text-xl font-bold text-white">
    {project.title}
  </h3>

  <p className="mt-2 text-slate-400">
    {project.description}
  </p>

</div>
<div className="text-2xl text-blue-400">
  →
</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}