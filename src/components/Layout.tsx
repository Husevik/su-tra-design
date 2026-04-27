import { useState } from "react";
import { Menu, X, Car } from "lucide-react";
import type { Page } from "../App";
import { NAV_ITEMS } from "../App";

interface LayoutProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  children: React.ReactNode;
}

export default function Layout({ currentPage, onNavigate, children }: LayoutProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (page: Page) => {
    onNavigate(page);
    setMobileOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => handleNav("hjem")}
              className="flex items-center gap-2.5 group"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-md group-hover:shadow-primary-200 transition-shadow">
                <Car className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-bold text-lg text-slate-900 tracking-tight">
                SU‑TRA
              </span>
              <span className="hidden sm:inline text-xs font-medium text-slate-400 ml-0.5 mt-1">
                Trafikkskole
              </span>
            </button>

            <nav className="hidden md:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`
                    px-4 py-2 rounded-xl text-sm font-medium transition-all duration-150
                    ${currentPage === item.id
                      ? "bg-primary-50 text-primary-600"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    }
                  `}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => handleNav("minside")}
                className="btn-secondary text-sm py-2 px-4"
              >
                Logg inn
              </button>
              <button
                onClick={() => handleNav("kurs")}
                className="btn-primary text-sm py-2 px-4"
              >
                Kom i gang
              </button>
            </div>

            <button
              className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Meny"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-slate-100 bg-white px-4 pb-4 pt-2 space-y-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`
                  w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors
                  ${currentPage === item.id
                    ? "bg-primary-50 text-primary-600"
                    : "text-slate-700 hover:bg-slate-50"
                  }
                `}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <button onClick={() => handleNav("minside")} className="btn-secondary text-sm justify-center">
                Logg inn
              </button>
              <button onClick={() => handleNav("kurs")} className="btn-primary text-sm justify-center">
                Kom i gang
              </button>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-white border-t border-slate-100 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                  <Car className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold text-slate-900">SU-TRA</span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                Sunnhordland Trafikkopplæring.<br />
                Bli framtidas trafikant!
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-3 text-sm">Kurs</h3>
              <ul className="space-y-2 text-sm text-slate-500">
                <li>Personbil (klasse B)</li>
                <li>Trafikalt grunnkurs</li>
                <li>Bil og tilhenger (BE/B96)</li>
                <li>Motorsykkel</li>
                <li>Moped</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-3 text-sm">Kontakt</h3>
              <ul className="space-y-2 text-sm text-slate-500">
                <li>Stord · Bømlo · Kvinnherad</li>
                <li>post@su-tra.no</li>
                <li>su-tra.no</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-slate-100 text-center text-xs text-slate-400">
            © {new Date().getFullYear()} Sunnhordland Trafikkopplæring. Alle rettar forbeholdt.
          </div>
        </div>
      </footer>
    </div>
  );
}
