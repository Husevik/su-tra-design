import { Car, BookOpen, Calendar, Star, MapPin, Clock, Shield, ChevronRight, Award } from "lucide-react";
import type { Page } from "../App";

const COURSES = [
  {
    icon: Car,
    title: "Personbil",
    subtitle: "Klasse B",
    desc: "Komplett opplæring mot førarkortet i klasse B. Frå trafikalt grunnkurs til praktisk prøve.",
    color: "from-violet-500 to-primary-600",
    badge: "Mest populær",
  },
  {
    icon: BookOpen,
    title: "Trafikalt grunnkurs",
    subtitle: "Obligatorisk for alle",
    desc: "Obligatorisk kurs for alle nye førarar under 25 år. Gjennomføring på Stord, Bømlo og Kvinnherad.",
    color: "from-sky-500 to-blue-600",
    badge: null,
  },
  {
    icon: Car,
    title: "Bil og tilhenger",
    subtitle: "BE og B96",
    desc: "Lær å køyre bil med tilhenger trygt og effektivt. Dekker krava til kopling, brems og manøvrering.",
    color: "from-emerald-500 to-teal-600",
    badge: null,
  },
  {
    icon: Award,
    title: "Motorsykkel",
    subtitle: "Lett, mellomtung og tung",
    desc: "Opplæring for alle motorsykkelkategoriar — frå lett (A1) til tung (A). Tilpassa din erfaring.",
    color: "from-orange-500 to-amber-600",
    badge: null,
  },
  {
    icon: Shield,
    title: "Moped",
    subtitle: "Klasse AM",
    desc: "Praktisk og rask opplæring for moped. Perfekt for yngre førarar som vil kome seg rundt.",
    color: "from-pink-500 to-rose-600",
    badge: null,
  },
];

const STATS = [
  { value: "3", label: "Avdelingar", icon: MapPin },
  { value: "5", label: "Kurstypar", icon: BookOpen },
  { value: "98%", label: "Bestått ved prøve", icon: Star },
  { value: "24h", label: "Booking tilgjengeleg", icon: Clock },
];

interface HjemProps {
  onNavigate: (page: Page) => void;
}

export default function Hjem({ onNavigate }: HjemProps) {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-slate-900 via-primary-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary-400 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-violet-400 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-500/20 border border-primary-400/30 rounded-full text-primary-300 text-sm font-medium mb-6">
              <MapPin className="w-3.5 h-3.5" />
              Stord · Bømlo · Kvinnherad
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 tracking-tight">
              Bli framtidas
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-violet-400">
                trafikant!
              </span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
              Sunnhordland Trafikkopplæring tilbyr komplett køyreopplæring i Sunnhordland. Trygt, effektivt og tilpassa deg.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <button
                onClick={() => onNavigate("kurs")}
                className="btn-primary text-base px-6 py-3"
              >
                Sjå alle kurs
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate("kontakt")}
                className="btn-secondary text-base px-6 py-3 border-white/20 text-white hover:bg-white/10 hover:text-white bg-white/10"
              >
                Kontakt oss
              </button>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4 max-w-sm w-full">
            {STATS.map(({ value, label, icon: Icon }) => (
              <div key={label} className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center">
                <Icon className="w-6 h-6 text-primary-400 mx-auto mb-2" />
                <div className="text-3xl font-extrabold text-white mb-0.5">{value}</div>
                <div className="text-xs text-slate-400 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="section-title text-3xl">Våre kurs</h2>
          <p className="section-subtitle text-base">Vel kurset som passar deg best</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {COURSES.map((course) => {
            const Icon = course.icon;
            return (
              <button
                key={course.title}
                onClick={() => onNavigate("kurs")}
                className="card p-6 text-left group hover:-translate-y-1 transition-all duration-200 cursor-pointer w-full"
              >
                {course.badge && (
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary-600 bg-primary-50 px-2.5 py-0.5 rounded-full mb-3">
                    <Star className="w-3 h-3" />
                    {course.badge}
                  </span>
                )}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-0.5">{course.title}</h3>
                <p className="text-xs font-medium text-primary-500 mb-2">{course.subtitle}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{course.desc}</p>
                <div className="flex items-center gap-1 mt-4 text-sm font-semibold text-primary-600 group-hover:gap-2 transition-all">
                  Les meir <ChevronRight className="w-4 h-4" />
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <section className="bg-gradient-to-r from-primary-600 to-violet-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-extrabold mb-3">Klar til å starte?</h2>
          <p className="text-primary-100 mb-8 max-w-md mx-auto">Book din første time i dag og ta det første steget mot førarkortet.</p>
          <button onClick={() => onNavigate("timeplan")} className="bg-white text-primary-700 font-bold px-8 py-3 rounded-xl hover:bg-primary-50 transition-colors shadow-lg">
            Book time no
          </button>
        </div>
      </section>
    </div>
  );
}
