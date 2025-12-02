import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Importamos el plugin de Scroll
import './Projects.css';

// Registramos el plugin para que GSAP pueda usarlo
gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Buscamos todas las tarjetas dentro del contenedor
    const cards = containerRef.current.querySelectorAll('.project-card');

    // Animamos cada tarjeta una por una
    gsap.fromTo(cards, 
      { y: 100, opacity: 0 }, // Empiezan abajo e invisibles
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        stagger: 0.2, // Espera 0.2s entre cada tarjeta
        scrollTrigger: {
          trigger: containerRef.current, // La animación inicia cuando este contenedor...
          start: "top 80%", // ...llega al 80% de la pantalla
        }
      }
    );
  }, []);

  return (
    <section id="proyectos" className="projects-section" ref={containerRef}>
      <h2>PROYECTOS SELECCIONADOS</h2>
      
      <div className="grid">
        {/* Proyecto 1 */}
        <div className="project-card">
          <div className="image-box" style={{backgroundColor: '#333'}}></div>
          <h3>ZAVRAE</h3>
          <p>Branding / Identidad</p>
        </div>

        {/* Proyecto 2 */}
        <div className="project-card">
          <div className="image-box" style={{backgroundColor: '#444'}}></div>
          <h3>CLAWDEPT</h3>
          <p>UI/UX Design</p>
        </div>

        {/* Proyecto 3 */}
        <div className="project-card">
          <div className="image-box" style={{backgroundColor: '#555'}}></div>
          <h3>ELVEE</h3>
          <p>Art Direction</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;