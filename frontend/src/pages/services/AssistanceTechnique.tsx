import {
  MessageSquare,
  Search,
  Lightbulb,
  Wrench,
  CheckCircle2,
} from "lucide-react";

export default function AssistanceTechnique() {
  const cases = [
    "Problème sur un site internet",
    "Difficulté liée à un hébergement",
    "Question concernant un nom de domaine",
    "Configuration d’une adresse e-mail professionnelle",
    "Ajout ou modification d’un formulaire",
    "Conseil sur un projet web",
    "Aide pour comprendre certaines options techniques",
    "Assistance liée à la gestion d’un site internet",
  ];

  const actions = [
    "Obtenir des conseils sur un projet",
    "Résoudre un problème sur un site internet",
    "Être accompagné dans certaines configurations",
    "Comprendre les options disponibles",
    "Obtenir une aide ponctuelle",
    "Identifier l’origine d’un problème technique",
  ];

  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Prise de contact",
      text: "Vous expliquez votre situation, votre question ou la difficulté rencontrée.",
    },
    {
      number: "02",
      icon: Search,
      title: "Analyse du besoin",
      text: "Un échange permet de comprendre le problème et d’identifier les éléments nécessaires.",
    },
    {
      number: "03",
      icon: Lightbulb,
      title: "Recherche de solution",
      text: "Une solution est recherchée selon le problème rencontré et les informations disponibles.",
    },
    {
      number: "04",
      icon: Wrench,
      title: "Intervention",
      text: "Selon le besoin, une assistance, une correction ou un accompagnement peut être réalisé.",
    },
    {
      number: "05",
      icon: CheckCircle2,
      title: "Vérification",
      text: "Un point est réalisé afin de vérifier que la solution répond bien au besoin initial.",
    },
  ];

  const faqs = [
    {
      question:
        "Je ne sais pas exactement quel est mon problème, puis-je quand même vous contacter ?",
      answer:
        "Oui. Il n’est pas nécessaire d’avoir identifié l’origine du problème avant de prendre contact. Un premier échange permet de faire le point sur la situation.",
    },
    {
      question: "Pouvez-vous intervenir sur autre chose qu’un site internet ?",
      answer:
        "Oui. Selon la situation, l’assistance technique peut aussi concerner l’hébergement, les noms de domaine, les adresses e-mail professionnelles ou d’autres besoins techniques ponctuels.",
    },
    {
      question: "Puis-je demander simplement un conseil ?",
      answer:
        "Bien sûr. Certaines demandes nécessitent une intervention technique, d’autres se limitent à un besoin de conseil ou d’accompagnement.",
    },
    {
      question:
        "Puis-je vous contacter même si je ne sais pas quelle solution choisir ?",
      answer:
        "Oui. L’objectif est justement de vous aider à comprendre les différentes possibilités afin de trouver la solution la plus adaptée à votre situation.",
    },
  ];

  return (
    <main className="relative overflow-hidden">
      {/* Hero */}
      <section className="bg-slate-50 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-500">
            Assistance technique
          </p>

          <h1 className="max-w-4xl text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
            Une aide pour vos questions et difficultés techniques.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Il arrive parfois de se retrouver bloqué face à une question
            technique, un problème sur un site internet ou un outil que l’on ne
            maîtrise pas complètement. Jess Tech vous aide à comprendre la
            situation et à identifier les solutions possibles.
          </p>
        </div>
      </section>

      {/* Cas d'assistance */}
      <section className="bg-slate-950 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[35%_65%]">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-400">
                Besoins
              </p>

              <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">
                Dans quels cas faire appel à une assistance technique ?
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {cases.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-blue-500/20 bg-white/5 p-5 text-slate-300"
                >
                  ✓ {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Actions concrètes */}
      <section className="bg-slate-50 py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[35%_65%]">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-500">
                Concrètement
              </p>

              <h2 className="text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
                Que pouvez-vous faire concrètement ?
              </h2>
            </div>

            <div>
              <div className="grid gap-4 sm:grid-cols-2">
                {actions.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-white p-5 text-slate-700 shadow-sm"
                  >
                    ✓ {item}
                  </div>
                ))}
              </div>

              <p className="mt-8 text-base leading-8 text-slate-600">
                Certaines situations nécessitent une intervention technique,
                d’autres simplement un conseil ou un regard extérieur.
                L’objectif est d’apporter une aide adaptée à votre situation.
              </p>
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
            Comment se déroule une intervention ?
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
                Vous avez besoin d’être guidé ?
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((item) => (
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
              Besoin d’aide ?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300">
              Vous avez une question technique, un problème à résoudre ou besoin
              d’un accompagnement ponctuel ?
            </p>

            <a
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
            >
              Demander une assistance
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}