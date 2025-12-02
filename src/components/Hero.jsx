import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Hero.css'; // Importaremos su propio estilo

function Hero() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    // Animación del Título: Aparece desde abajo (y: 50) y opacidad 0
    gsap.fromTo(titleRef.current, 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    // Animación del Subtítulo: Aparece un poco después (delay)
    gsap.fromTo(subtitleRef.current, 
      { opacity: 0 }, 
      { opacity: 1, duration: 1.5, delay: 0.5 }
    );
  }, []);

  return (
    <section className="hero-section">
      <div className="content">
        <h1 ref={titleRef}>PUCRO STUDIO</h1>
        <p ref={subtitleRef}>Brutalismo Minimalista & Estrategia Digital</p>
      </div>
    </section>
  );
}

export default Hero;