import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact'; // <--- 1. Importar
import './App.css';

function App() {
  return (
    <div>
      <Navigation />
      <Hero />
      <Projects />
      <Services />
      <Contact /> {/* <--- 2. Añadir al final */}
    </div>
  )
}

export default App;