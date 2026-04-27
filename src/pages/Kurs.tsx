import { Car, BookOpen, Shield, Award, ChevronRight, CheckCircle } from "lucide-react";

const COURSES = [
  {
    id: "personbil",
    icon: Car,
    title: "Personbil",
    subtitle: "Klasse B",
    color: "from-violet-500 to-primary-600",
    badge: "Mest populær",
    desc: "Komplett opplæring mot førarkortet i klasse B. Vi følgjer læreplanen til Statens vegvesen og tilpassar undervisninga til kvar enkelt elev.",
    includes: [
      "Trafikalt grunnkurs (TGK)",
      "Sikkerhetskurs på bane (trinn 2)",
      "Sikkerhetskurs på vei (trinn 3)",
      "Praktisk køyring og øvingskøyring",
      "Førarprøve-forberedelse",
    ],
    locations: ["Stord", "Bømlo", "Kvinnherad"],
  },
  {
    id: "tgk",
    icon: BookOpen,
    title: "Trafikalt grunnkurs",
    subtitle: "Obligatorisk for alle under 25 år",
    color: "from-sky-500 to-blue-600",
    badge: null,
    desc: "Trafikalt grunnkurs (TGK) er obligatorisk for alle som skal ta førarkortet og er under 25 år. Kurset gir deg ei solid grunnforståing av trafikk og sikkerheit.",
    includes: [
      "Temadag: Ulykker og sikkerheit",
      "Temadag: Rus og trafikk",
      "Temadag: Ungdom og trafikk",
      "Øvingskøyring på lukka bane",
    ],
    locations: ["Stord", "Bømlo", "Kvinnherad"],
  },
  {
    id: "tilhenger",
    icon: Car,
    title: "Bil og tilhenger",
    subtitle: "Klasse BE og B96",
    color: "from-emerald-500 to-teal-600",
    badge: null,
    desc: "Lær å køyre bil med tilhenger på ein trygg og effektiv måte. Kurset dekker kopling, manøvrering og bremsereglar for køyretøy med tilhenger.",
    includes: [
      "Klasse B96 – tilhenger opp til 4250 kg",
      "Klasse BE – tilhenger over 4250 kg",
      "Praktisk køyring med tilhenger",
      "Regler og ansvar",
    ],
    locations: ["Stord", "Bømlo"],
  },
  {
    id: "motorsykkel",
    icon: Award,
    title: "Motorsykkel",
    subtitle: "Klasse A1, A2 og A",
    color: "from-orange-500 to-amber-600",
    badge: null,
    desc: "Opplæring i alle motorsykkelkategoriar. Vi tilpassar kurset til din erfaring og dei krava som gjeld for di aldersgruppe.",
    includes: [
      "A1 – lett motorsykkel (16 år)",
      "A2 – mellomtung motorsykkel (18 år)",
      "A – tung motorsykkel (24 år, eller 20 år med A2)",
      "Manøvreringskurs og trafikkøyring",
    ],
    locations: ["Stord"],
  },
  {
    id: "moped",
    icon: Shield,
    title: "Moped",
    subtitle: "Klasse AM",
    color: "from-pink-500 to-rose-600",
    badge: null,
    desc: "Rask og praktisk opplæring for moped. Kurset er tilpassa ungdom som ynskjer å køyre moped trygt og lovleg.",
    includes: [
      "Klasse AM – moped opp til 45 km/t",
      "Obligatorisk kurs (8 timar)",
      "Trening på manøvrering",
      "Trafikale reglar for moped",
    ],
    locations: ["Stord", "Bømlo"],
  },
];

export default function Kurs() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="section-title text-3xl">Kurs</h1>
        <p className="section-subtitle text-base">Vel kurset som passar deg og dine behov</p>
      </div>

      <div className="space-y-6">
        {COURSES.map((course) => {
          const Icon = course.icon;
          return (
            <div key={course.id} className="card p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                    <div>
                      {course.badge && (
                        <span className="inline-flex text-xs font-semibold text-primary-600 bg-primary-50 px-2.5 py-0.5 rounded-full mr-2">
                          {course.badge}
                        </span>
                      )}
                      <h2 className="inline text-xl font-bold text-slate-900">{course.title}</h2>
                      <span className="ml-2 text-sm text-slate-400 font-medium">{course.subtitle}</span>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-4 leading-relaxed">{course.desc}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mb-4">
                    {course.includes.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
                    <div className="flex flex-wrap gap-2">
                      {course.locations.map((loc) => (
                        <span key={loc} className="text-xs font-medium bg-slate-100 text-slate-600 px-2.5 py-1 rounded-lg">
                          {loc}
                        </span>
                      ))}
                    </div>
                    <button className="btn-primary text-sm py-2 px-4 opacity-50 cursor-not-allowed" disabled>
                      Meld deg på
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 p-5 bg-primary-50 border border-primary-100 rounded-2xl text-center">
        <p className="text-primary-700 font-medium">Har du spørsmål om kurs? <button className="underline underline-offset-2 font-semibold">Ta kontakt med oss</button></p>
      </div>
    </div>
  );
}
