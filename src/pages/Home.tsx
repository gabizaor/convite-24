import { useNavigate } from "react-router-dom";
import Envelope from "../components/Envelope";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex bg-cover bg-center justify-center items-center bg-green-300 w-screen h-screen">
      <Envelope onClick={() => navigate("/section-one")} />
    </div>
  );
}
