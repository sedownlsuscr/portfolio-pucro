import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Navbar.css';

function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    // Animación: Baja desde -100px (fuera de pantalla) hasta 0
    gsap.fromTo(navRef.current, 
      { y: -100, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, delay: 1.5, ease: "power3.out" }
    );
  }, []);

  return (
    <nav ref={navRef} className="navbar">
      <div className="logo">PUCRO</div>
      <div className="menu-items">
        <a href="#proyectos">Proyectos</a>
        <a href="#servicios">Servicios</a>
        <a href="#contacto">Contacto</a>
      </div>
    </nav>
  );
}

export default Navbar;