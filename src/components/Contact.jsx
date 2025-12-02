import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Animación: El texto del correo crece al entrar en pantalla
    gsap.fromTo(textRef.current,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        }
      }
    );
  }, []);

  return (
    <footer id="contacto" className="contact-section" ref={containerRef}>
      <div className="contact-content">
        <p className="subtitle">¿TIENES UN PROYECTO EN MENTE?</p>
        
        {/* Enlace directo para que te envíen correo al hacer clic */}
        <a href="mailto:pucrostudio@gmail.com" className="email-link" ref={textRef}>
          pucrostudio@gmail.com
        </a>

        <div className="footer-info">
          <div className="socials">
            <a href="#">INSTAGRAM</a>
            <a href="#">LINKEDIN</a>
            <a href="#">BEHANCE</a>
          </div>
          <p className="copyright">© 2025 PUCRO STUDIO. CARACAS, VZLA.</p>
        </div>
      </div>
    </footer>
  );
}

export default Contact;