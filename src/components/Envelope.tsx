import HeartIcon from "../assets/heart-svgrepo-com.svg";

interface EnvelopeProps {
  onClick: () => void;
}

export default function Envelope({ onClick }: EnvelopeProps) {
  return (
    <div
      className="w-80 h-80 sm:w-96 sm:h-96 bg-pink-200 border-4 sm:border-8 border-black rounded-lg cursor-pointer relative overflow-auto"
      onClick={onClick}
    >
      <h1 className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-lg sm:text-2xl font-bold animate-bounce">
        clique aqui ↓
      </h1>
      <img
        src={HeartIcon}
        alt="Coração"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-24 sm:h-24"
      />
    </div>
  );
}
