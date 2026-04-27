import { MapPin, Phone, Mail, Clock, MessageSquare, Send } from "lucide-react";

const LOCATIONS = [
  {
    name: "Stord",
    address: "Sunnhordland Trafikkopplæring, Stord",
    phone: "+47 XX XX XX XX",
    email: "stord@su-tra.no",
    hours: "Man–fre 08:00–17:00",
  },
  {
    name: "Bømlo",
    address: "Sunnhordland Trafikkopplæring, Bømlo",
    phone: "+47 XX XX XX XX",
    email: "bomlo@su-tra.no",
    hours: "Man–fre 08:00–17:00",
  },
  {
    name: "Kvinnherad",
    address: "Sunnhordland Trafikkopplæring, Kvinnherad",
    phone: "+47 XX XX XX XX",
    email: "kvinnherad@su-tra.no",
    hours: "Man–tor 08:00–16:00",
  },
];

export default function Kontakt() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="section-title text-3xl">Kontakt oss</h1>
        <p className="section-subtitle text-base">Vi er her for å hjelpe deg</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
        {LOCATIONS.map((loc) => (
          <div key={loc.name} className="card p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-primary-50 flex items-center justify-center">
                <MapPin className="w-4.5 h-4.5 text-primary-500" />
              </div>
              <h2 className="font-bold text-slate-900 text-lg">{loc.name}</h2>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <MapPin className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                {loc.address}
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600">
                <Phone className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <a href={`tel:${loc.phone}`} className="hover:text-primary-600 transition-colors">{loc.phone}</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600">
                <Mail className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <a href={`mailto:${loc.email}`} className="hover:text-primary-600 transition-colors">{loc.email}</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600">
                <Clock className="w-4 h-4 text-slate-400 flex-shrink-0" />
                {loc.hours}
              </li>
            </ul>
          </div>
        ))}
      </div>

      <div className="card p-8 max-w-2xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center">
            <MessageSquare className="w-5 h-5 text-primary-500" />
          </div>
          <h2 className="font-bold text-slate-900 text-xl">Send oss ei melding</h2>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Namn</label>
              <input
                type="text"
                placeholder="Ola Nordmann"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">E-post</label>
              <input
                type="email"
                placeholder="ola@eksempel.no"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Kva gjeld det?</label>
            <select className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all bg-white text-slate-700">
              <option value="">Vel tema…</option>
              <option>Personbil (klasse B)</option>
              <option>Trafikalt grunnkurs</option>
              <option>Bil og tilhenger</option>
              <option>Motorsykkel</option>
              <option>Moped</option>
              <option>Anna</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Melding</label>
            <textarea
              rows={4}
              placeholder="Skriv meldinga di her…"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all resize-none"
            />
          </div>
          <button
            type="submit"
            className="btn-primary w-full justify-center opacity-50 cursor-not-allowed"
            disabled
          >
            <Send className="w-4 h-4" />
            Send melding (kjem snart)
          </button>
        </form>
        <p className="text-xs text-slate-400 text-center mt-4">
          Inntil skjema er aktivt: send e-post til <a href="mailto:post@su-tra.no" className="text-primary-500 underline">post@su-tra.no</a>
        </p>
      </div>
    </div>
  );
}
