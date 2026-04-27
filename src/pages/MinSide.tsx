import { User, BookOpen, CheckCircle, Clock, Lock, TrendingUp } from "lucide-react";

export default function MinSide() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="section-title text-3xl">Min side</h1>
        <p className="section-subtitle text-base">Din personlege oversikt over kurs og progresjon</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
        {[
          { icon: BookOpen,     label: "Aktive kurs",   value: "—" },
          { icon: CheckCircle, label: "Fullførte trinn", value: "—" },
          { icon: Clock,       label: "Timar att",      value: "—" },
          { icon: TrendingUp,  label: "Progresjon",     value: "—" },
        ].map(({ icon: Icon, label, value }) => (
          <div key={label} className="card p-5 text-center">
            <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center mx-auto mb-3">
              <Icon className="w-5 h-5 text-primary-500" />
            </div>
            <div className="text-2xl font-bold text-slate-700 mb-0.5">{value}</div>
            <div className="text-xs text-slate-400 font-medium">{label}</div>
          </div>
        ))}
      </div>

      <div className="card flex flex-col items-center justify-center py-24 gap-5 text-center">
        <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center">
          <Lock className="w-8 h-8 text-slate-400" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-700 mb-2">Logg inn for å sjå din side</h2>
          <p className="text-slate-400 max-w-sm">
            Elevportalen er under utvikling. Her vil du snart kunne sjå dine kurs, timeplan og progresjon.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="btn-primary opacity-50 cursor-not-allowed" disabled>
            <User className="w-4 h-4" />
            Logg inn (kjem snart)
          </button>
          <button className="btn-secondary opacity-50 cursor-not-allowed" disabled>
            Registrer deg
          </button>
        </div>
      </div>
    </div>
  );
}
