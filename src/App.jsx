import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLogin from "./pages/login";
import PageCriarConta from "./pages/criar-conta";
import PageDashboard from "./pages/dashboard";
import PageCartoes from "./pages/cartoes";
import PagePagamento from "./pages/pagamento";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLogin />} />
        <Route path="/criar-conta" element={<PageCriarConta />} />
        <Route path="/dashboard" element={<PageDashboard />} />
        <Route path="/cartoes" element={<PageCartoes />} />
        <Route path="/pagamento" element={<PagePagamento />} />
      </Routes>
    </BrowserRouter>
  )
}