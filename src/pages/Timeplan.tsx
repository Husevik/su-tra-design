import { Calendar, Clock, MapPin, Lock } from "lucide-react";

export default function Timeplan() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="section-title text-3xl">Timeplan</h1>
        <p className="section-subtitle text-base">Sjå og book ledige timar</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {[
          { icon: Calendar, label: "Velje dato", desc: "Vel ei veke som passar deg" },
          { icon: MapPin, label: "Velje stad",  desc: "Stord, Bømlo eller Kvinnherad" },
          { icon: Clock,   label: "Velje tid",  desc: "Morgen, ettermiddag eller kveld" },
        ].map(({ icon: Icon, label, desc }) => (
          <div key={label} className="card p-6 flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
              <Icon className="w-5 h-5 text-primary-500" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-0.5">{label}</h3>
              <p className="text-sm text-slate-500">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="card flex flex-col items-center justify-center py-24 gap-5 text-center">
        <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center">
          <Lock className="w-8 h-8 text-slate-400" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-700 mb-2">Timeplan kjem snart</h2>
          <p className="text-slate-400 max-w-sm">
            Online-booking er under utvikling. Ta kontakt med oss på telefon eller e-post for å bestille time.
          </p>
        </div>
        <button className="btn-primary opacity-50 cursor-not-allowed mt-2" disabled>
          <Calendar className="w-4 h-4" />
          Book online (kjem snart)
        </button>
      </div>
    </div>
  );
}
