
import {
  MessageSquare,
  Search,
  PenTool,
  Code2,
  CheckCircle2,
} from "lucide-react";

export default function DeveloppementWebSurMesure() {
  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Échange autour du besoin",
      text: "On discute du projet, des difficultés rencontrées et des fonctionnalités attendues.",
    },
    {
      number: "02",
      icon: Search,
      title: "Étude des possibilités",
      text: "Le besoin est analysé afin d’identifier les solutions envisageables.",
    },
    {
      number: "03",
      icon: PenTool,
      title: "Conception de la solution",
      text: "Le fonctionnement général et les fonctionnalités principales sont définis.",
    },
    {
      number: "04",
      icon: Code2,
      title: "Développement",
      text: "La solution est développée selon les éléments validés.",
    },
    {
      number: "05",
      icon: CheckCircle2,
      title: "Vérification et ajustements",
      text: "Des tests sont réalisés avant la mise en production.",
    },
  ];

  const examples = [
    "Fonctionnalités spécifiques",
    "Formulaires avancés",
    "Espaces membres",
    "Tableaux de bord",
    "Interfaces d’administration",
    "Outils de gestion personnalisés",
    "Systèmes de réservation",
    "Automatisations",
    "Applications web",
  ];

  return (
    <main className="relative overflow-hidden">
      {/* Hero */}
      <section className="bg-slate-50 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-500">
            Développement web sur mesure
          </p>

          <h1 className="max-w-4xl text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
            Une solution web adaptée à votre projet.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Certains besoins ne peuvent pas être couverts par un simple site
            internet ou par une solution prête à l’emploi. Le développement sur
            mesure permet de créer un outil adapté à votre situation, à vos
            contraintes et à votre façon de travailler.
          </p>
        </div>
      </section>

      {/* Présentation */}
      <section className="bg-slate-950 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[35%_65%]">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-400">
                Sur mesure
              </p>

              <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">
                Quand un site classique ne suffit plus.
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-slate-300">
              <p>
                Un développement sur mesure consiste à créer une solution pensée
                spécifiquement pour votre projet.
              </p>

              <p>
                Contrairement à un outil standardisé, le fonctionnement est
                défini en fonction de vos besoins, de vos contraintes et de votre
                manière de travailler.
              </p>

              <p>
                L’objectif est de partir d’un besoin concret pour construire une
                solution utile, claire et adaptée à son usage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Exemples */}
      <section className="bg-slate-50 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[35%_65%]">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-500">
                Possibilités
              </p>

              <h2 className="text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
                Que peut-on développer sur mesure ?
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {examples.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white p-5 text-slate-700 shadow-sm"
                >
                  ✓ {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Déroulement */}
      <section className="bg-slate-950 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-400">
            Méthode
          </p>

          <h2 className="max-w-3xl text-3xl font-black leading-tight text-white sm:text-4xl">
            Comment se déroule un projet ?
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="rounded-2xl border border-blue-500/20 bg-white/5 p-6"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-sm font-bold text-blue-400">
                      {step.number}
                    </span>

                    <Icon className="h-6 w-6 text-blue-400" />
                  </div>

                  <h3 className="text-lg font-bold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    {step.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[35%_65%]">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-500">
                Questions fréquentes
              </p>

              <h2 className="text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
                Vous avez un doute sur votre projet ?
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  question:
                    "Je ne sais pas si mon projet est réalisable, puis-je quand même vous contacter ?",
                  answer:
                    "Oui. Un premier échange permet d’étudier le projet et de déterminer les solutions envisageables, même si l’idée n’est pas encore totalement définie.",
                },
                {
                  question:
                    "Je ne sais pas exactement ce dont j’ai besoin, est-ce un problème ?",
                  answer:
                    "Non. Dans de nombreux cas, le besoin est identifié avant la solution. L’objectif est d’abord de comprendre ce que vous souhaitez mettre en place.",
                },
                {
                  question:
                    "Puis-je demander une fonctionnalité spécifique sur un site existant ?",
                  answer:
                    "Oui. Un développement sur mesure peut concerner un projet complet, mais aussi l’ajout ou l’amélioration d’une fonctionnalité sur un site déjà existant.",
                },
                {
                  question:
                    "Est-il possible de faire évoluer le projet par la suite ?",
                  answer:
                    "Oui. Une solution développée sur mesure peut évoluer dans le temps afin d’intégrer de nouvelles fonctionnalités ou de répondre à de nouveaux besoins.",
                },
                {
                  question:
                    "Dois-je connaître les aspects techniques du projet ?",
                  answer:
                    "Non. Vous n’avez pas besoin de connaître les technologies utilisées ou les méthodes de développement. L’important est avant tout d’expliquer votre besoin.",
                },
              ].map((item) => (
                <div
                  key={item.question}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-bold text-slate-900">
                    {item.question}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-950 p-8 text-center shadow-xl md:p-12">
            <h2 className="text-3xl font-black text-white sm:text-4xl">
              Un projet particulier en tête ?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300">
              Vous avez une idée, un besoin spécifique ou une problématique que
              vous ne parvenez pas à résoudre avec les solutions existantes ?
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