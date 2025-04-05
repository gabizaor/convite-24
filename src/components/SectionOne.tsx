import { useNavigate } from "react-router-dom";
import gabizao from "../assets/gabizao.jpg";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function SectionOne() {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const confettiCount = 100;
  const colors = ["#ff0080", "#7928ca", "#00ff88", "#ffcc00", "#00ccff"];
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    createConfetti();

    animateContent();

    return () => {
      cleanupConfetti();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  const createConfetti = () => {
    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement("div");
      styleConfetti(confetti);
      containerRef.current.appendChild(confetti);
      animateConfetti(confetti);
    }
  };

  const styleConfetti = (confetti) => {
    confetti.style.position = "absolute";
    confetti.style.width = `${Math.random() * 10 + 5}px`;
    confetti.style.height = `${Math.random() * 10 + 5}px`;
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    confetti.style.borderRadius = "50%";
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.top = `${Math.random() * -100}px`;
    confetti.style.opacity = 1;
    confetti.style.zIndex = "0";
  };

  const animateConfetti = (confetti) => {
    gsap.to(confetti, {
      y: window.innerHeight + 100,
      rotation: Math.random() * 360,
      x: `+=${(Math.random() - 0.5) * 100}`,
      duration: Math.random() * 5 + 5,
      ease: "power1.out",
      repeat: -1,
      delay: Math.random() * 5,
    });
  };

  const animateContent = () => {
    gsap.from(".content-item", {
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: "back.out(1.7)",
    });
  };

  const cleanupConfetti = () => {
    const confettiElements = document.querySelectorAll(
      '[style*="position: absolute"]'
    );
    confettiElements.forEach((el) => el.remove());
  };

  const renderMobileContent = () => (
    <div
      ref={containerRef}
      className="bg-[#162144] w-full min-h-screen flex flex-col justify-center items-center p-2 overflow-hidden relative"
    >
      {/* Conteúdo mobile com confetes */}
      <div className="w-full flex flex-col items-center justify-center flex-1 px-2 content-item">
        <div className="text-5xl text-white font-serif font-bold uppercase tracking-wider mb-2">
          gabizão
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-6xl font-bold uppercase text-center">
            <span className="text-green-300 block animate-pulse">faz</span>
            <span className="text-pink-200 block animate-bounce">24!</span>
          </h1>
          <img
            src={gabizao}
            alt="Imagem de Gabizão"
            className="w-full h-full mt-4 rounded-full object-cover"
          />
        </div>
      </div>
      <div className="w-full px-4 pb-2 content-item">
        <button
          onClick={() => navigate("/section-two")}
          className="w-full py-3 text-white rounded-full bg-gradient-to-r from-[#ff0080] to-[#7928ca] text-lg font-bold shadow-lg"
        >
          AVANÇAR 🎉
        </button>
      </div>
    </div>
  );

  const renderDesktopContent = () => (
    <div
      ref={containerRef}
      className="bg-[#162144] w-full min-h-screen flex justify-center items-center p-4 overflow-hidden relative"
    >
      {/* Efeito de confetes (serão adicionados via JS) */}
      <div className="p-4 md:p-6 space-y-4 md:space-y-6 h-full flex flex-col">
        <section className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 flex-1 content-item">
          <div className="flex items-center gap-4 md:gap-8">
            <div className="text-4xl sm:text-6xl md:text-8xl text-white font-serif font-bold uppercase tracking-wider vertical-text">
              gabizão
            </div>
            <h1 className="text-6xl sm:text-8xl md:text-[200px] font-bold uppercase flex flex-col items-start">
              <span className="text-green-300 animate-pulse">faz</span>
              <span className="text-pink-200 flex items-center gap-2 md:gap-6">
                <span className="animate-bounce">24!</span>
                <img
                  src={gabizao}
                  alt="Imagem de Gabizão"
                  className="w-60 h-60 sm:w-60 sm:h-60 md:w-80 md:h-80 transform hover:rotate-12 transition duration-500 bg-cover rounded-full "
                />
              </span>
            </h1>
          </div>
        </section>
        <div className="flex justify-end pb-4 content-item">
          <button
            onClick={() => navigate("/section-two")}
            className="px-6 py-3 animate-pulse text-white rounded-full bg-gradient-to-r from-[#ff0080] to-[#7928ca] text-lg font-bold shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
          >
            Avançar 🎉
          </button>
        </div>
      </div>
    </div>
  );

  return isMobile ? renderMobileContent() : renderDesktopContent();
}
