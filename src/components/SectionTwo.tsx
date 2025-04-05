import star from "../assets/star.svg";
import globo from "../assets/globo.svg";
import { useEffect } from "react";

export default function SectionTwo() {
  useEffect(() => {
    const star = document.querySelector(".star-spin");
    if (star) {
      star.style.animationDuration = "40s";
    }
  }, []);

  return (
    <div className="relative overflow-hidden min-h-screen">
      <img
        src={star}
        alt="Star"
        className="star-spin absolute inset-0 m-auto w-3/4 h-3/4 opacity-20 animate-spin"
      />

      <div className="bg-rose-200 min-h-screen flex flex-col items-center justify-center">
        <div className="mb-8 text-center relative z-10">
          <img
            src={globo}
            alt="Globo"
            className="w-32 h-32 mx-auto mb-6 hover:rotate-12 hover:scale-110 transition-transform duration-500"
          />
          <h1 className="text-5xl md:text-6xl font-extrabold uppercase font-[Poppins]">
            <span className="text-white">House </span>
            <span className="text-[#162144]">Party</span>
          </h1>
        </div>

        <div className="w-full px-8 flex justify-between items-start relative -mt-4 mb-8">
          <div className="text-left animate-pulse hover:animate-bounce">
            <p className="text-4xl md:text-6xl font-bold text-gray-800 font-[BebasNeue]">
              20
            </p>
            <p className="text-4xl md:text-6xl font-bold text-gray-800 font-[BebasNeue]">
              ABRIL
            </p>
          </div>

          <div className="text-right">
            <p className="text-4xl md:text-6xl font-bold text-gray-800 font-[BebasNeue]">
              18H
            </p>
            <p className="text-xl md:text-2xl font-semibold text-gray-800 font-[Montserrat]">
              EM DIANTE
            </p>
          </div>
        </div>

        <div className="text-center mx-4 mt-12">
          <p className="text-3xl md:text-5xl font-bold text-gray-800 font-[Montserrat] hover:text-white transition-colors">
            Av. Anita Garibaldi
          </p>
          <p className="text-2xl md:text-4xl font-semibold text-gray-800 font-[Montserrat] hover:text-white transition-colors">
            1395
          </p>
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl md:text-2xl font-semibold text-gray-800 font-[Montserrat]">
            Confirmar presença no zap!
          </p>
        </div>
      </div>
    </div>
  );
}
