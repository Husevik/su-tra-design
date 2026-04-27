import { useState } from "react";
import Layout from "./components/Layout";
import Hjem from "./pages/Hjem";
import Kurs from "./pages/Kurs";
import Timeplan from "./pages/Timeplan";
import MinSide from "./pages/MinSide";
import Ressurser from "./pages/Ressurser";
import Kontakt from "./pages/Kontakt";

export type Page = "hjem" | "kurs" | "timeplan" | "minside" | "ressurser" | "kontakt";

export interface NavItem {
  id: Page;
  label: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: "hjem",      label: "Hjem" },
  { id: "kurs",      label: "Kurs" },
  { id: "timeplan",  label: "Timeplan" },
  { id: "minside",   label: "Min side" },
  { id: "ressurser", label: "Ressurser" },
  { id: "kontakt",   label: "Kontakt" },
];

export default function App() {
  const [page, setPage] = useState<Page>("hjem");

  const content: Record<Page, JSX.Element> = {
    hjem:      <Hjem onNavigate={setPage} />,
    kurs:      <Kurs />,
    timeplan:  <Timeplan />,
    minside:   <MinSide />,
    ressurser: <Ressurser />,
    kontakt:   <Kontakt />,
  };

  return (
    <Layout currentPage={page} onNavigate={setPage}>
      {content[page]}
    </Layout>
  );
}
