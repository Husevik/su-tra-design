import { BookOpen, FileText, Video, Link as LinkIcon, Lock, ExternalLink } from "lucide-react";

const CATEGORIES = [
  {
    icon: BookOpen,
    title: "Teorimateriale",
    color: "bg-violet-50 text-violet-500",
    items: [
      { label: "Trafikkens grunnreglar", locked: true },
      { label: "Skilt og vegmerking", locked: true },
      { label: "Vikeplikt og rekkjefølge", locked: true },
      { label: "Farleg gods og spesialtransport", locked: true },
    ],
  },
  {
    icon: Video,
    title: "Videoar",
    color: "bg-sky-50 text-sky-500",
    items: [
      { label: "Introduksjon til køyring", locked: true },
      { label: "Parkering og manøvrering", locked: true },
      { label: "Motorveikøyring", locked: true },
      { label: "Vinterkøyring og veggrep", locked: true },
    ],
  },
  {
    icon: FileText,
    title: "Prøveoppgåver",
    color: "bg-emerald-50 text-emerald-500",
    items: [
      { label: "Teoriprøve – øv på nett", locked: true },
      { label: "Skiltprøver", locked: true },
      { label: "Hastigheitsprøver", locked: true },
      { label: "Situasjonsoppgåver", locked: true },
    ],
  },
  {
    icon: LinkIcon,
    title: "Nyttige lenker",
    color: "bg-orange-50 text-orange-500",
    items: [
      { label: "Statens vegvesen – teoriprøve", locked: false, href: "https://www.vegvesen.no/forerkort/ta-forerkort/teoriprove/" },
      { label: "Teoriprøven.no", locked: false, href: "https://teoripruven.no" },
      { label: "Vegvesen – trafikkskole", locked: false, href: "https://www.vegvesen.no/forerkort/ta-forerkort/trafikkskole/" },
      { label: "Su-tra.no", locked: false, href: "https://su-tra.no" },
    ],
  },
];

export default function Ressurser() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="section-title text-3xl">Ressursar</h1>
        <p className="section-subtitle text-base">Materiale og lenker til hjelp i opplæringa</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {CATEGORIES.map((cat) => {
          const Icon = cat.icon;
          return (
            <div key={cat.title} className="card p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${cat.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h2 className="font-bold text-slate-800 text-lg">{cat.title}</h2>
              </div>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li key={item.label}>
                    {"href" in item && item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between gap-2 px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                      >
                        <span className="text-sm text-slate-600 group-hover:text-primary-600 transition-colors">{item.label}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-primary-500" />
                      </a>
                    ) : (
                      <div className="flex items-center justify-between gap-2 px-3 py-2.5 rounded-xl opacity-50 cursor-not-allowed">
                        <span className="text-sm text-slate-500">{item.label}</span>
                        <Lock className="w-3.5 h-3.5 text-slate-400" />
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="mt-6 p-5 bg-amber-50 border border-amber-100 rounded-2xl">
        <p className="text-amber-700 text-sm font-medium">
          Innlogging krevjast for å få tilgang til teorimateriale og videoar. Ressursbiblioteket er under utvikling.
        </p>
      </div>
    </div>
  );
}
