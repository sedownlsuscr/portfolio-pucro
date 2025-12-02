import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Services.css';

gsap.registerPlugin(ScrollTrigger);

function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Animación: Las líneas de servicio aparecen una por una al hacer scroll
    const services = sectionRef.current.querySelectorAll('.service-item');

    gsap.fromTo(services,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2, // Efecto cascada
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%", // Arranca cuando la sección está un poco visible
        }
      }
    );
  }, []);

  const misServicios = [
    "Strategic Branding",
    "Digital Product Design (UX/UI)",
    "Web Design (Framer & Figma)",
    "Social Content & Storytelling"
  ];

  return (
    <section id="servicios" className="services-section" ref={sectionRef}>
      <h2 className="section-title">LO QUE HACEMOS</h2>
      
      <div className="services-list">
        {misServicios.map((servicio, index) => (
          <div key={index} className="service-item">
            <span className="service-number">0{index + 1}</span>
            <h3 className="service-name">{servicio}</h3>
            <span className="arrow">↗</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;