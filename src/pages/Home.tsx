import { useNavigate } from "react-router-dom";
import Envelope from "../components/Envelope";
import { useEffect } from "react";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redireciona imediatamente se acessar a raiz
    if (window.location.pathname === "/") {
      navigate("/home", { replace: true });
    }

    // Adiciona listener para antes de descarregar a página
    const handleBeforeUnload = () => {
      // Limpa o estado de navegação
      window.history.replaceState(null, "", "/home");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [navigate]);

  return (
    <div className="flex bg-cover bg-center justify-center items-center bg-green-300 w-screen h-screen">
      <Envelope onClick={() => navigate("/section-one")} />
    </div>
  );
}
