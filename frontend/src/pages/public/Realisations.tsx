export default function DansLesCoulisses() {
  const projects = [
    {
      title: "Dupont Plomberie",
      type: "Exercice de site vitrine",
      description:
        "Un projet d'entraînement autour d'un site vitrine pour un artisan plombier, avec présentation des services, formulaire de contact et mise en page responsive.",
      tags: ["React", "TypeScript", "Tailwind", "Responsive"],
    },
    {
      title: "Sunbanks Tool",
      type: "Projet interne",
      description:
        "Un outil web développé pour travailler la gestion de projets, les interfaces d'administration et la communication entre frontend et backend.",
      tags: ["React", "Node.js", "Express", "PostgreSQL"],
    },
  ];

  return (
    <main className="relative overflow-hidden">
      {/* Hero */}
      <section className="bg-slate-950 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-400">
            Dans les coulisses
          </p>

          <h1 className="max-w-4xl text-4xl font-black leading-tight text-white sm:text-5xl">
            Des projets internes pour montrer la méthode, les essais et les
            apprentissages.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Cette page regroupe des projets réalisés en interne, des exercices
            et des démonstrations techniques. Ils permettent de montrer le
            travail réalisé, les choix effectués et les compétences mises en
            pratique.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-slate-50 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[35%_65%]">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-500">
                Pourquoi cette page ?
              </p>

              <h2 className="text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
                Montrer le travail derrière les projets.
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-slate-600">
              <p>
                Les projets présentés ici ne sont pas forcément des réalisations
                clients. Il peut s’agir d’exercices, de démonstrations ou de
                projets internes réalisés pour expérimenter, apprendre ou tester
                certaines fonctionnalités.
              </p>

              <p>
                L’objectif est de montrer une manière de travailler : comprendre
                un besoin, construire une interface, rencontrer des difficultés,
                chercher des solutions et améliorer progressivement le résultat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projets */}
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-500">
              Projets internes
            </p>

            <h2 className="text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
              Exercices, démonstrations et expérimentations.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-500">
                  {project.type}
                </p>

                <h3 className="text-2xl font-black text-slate-900">
                  {project.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-950 p-8 text-center shadow-xl md:p-12">
            <h2 className="text-3xl font-black text-white sm:text-4xl">
              Un projet à construire ?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300">
              Ces projets montrent une partie de la méthode de travail. Pour un
              besoin réel, chaque solution est adaptée au contexte, aux objectifs
              et aux contraintes du projet.
            </p>

            <a
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
            >
              Échanger sur mon projet
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}