import './App.css';
import './index.css';
import { useEffect, useLayoutEffect, useState } from 'react';
import Navbar from './components/Navbar';
import ProfileBadge from './components/ProfileBadge';
import VentanitaKawaii from './components/VentanitaKawaii';
import Home from './components/Home';
import Calendar from './components/Calendar';
import Enlaces from './components/Enlaces';
import Projects from './components/Projects';

export default function App() {
  // const [theme, setTheme] = useState('pastel');
  
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'theme-pastel';
  });

  useLayoutEffect(() => {
  const savedTheme = localStorage.getItem('theme') || 'theme-pastel';
  document.documentElement.classList.add(savedTheme);
}, []);


  useEffect(() => {
    const themes = ['theme-pastel', 'theme-violeta', 'theme-hobbit', 'theme-cafe', 'theme-celeste', 'theme-oscuro'];
    document.documentElement.classList.remove(...themes);
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);




  return (
    <div className="min-h-screen bg-tema-fondo fondo-kawaii p-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <Navbar theme={theme} onChangeTheme={setTheme} />

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          <div className="col-span-full flex justify-center">
            <ProfileBadge />
          </div>
          <Home />
          <Calendar />
          <Enlaces />
          <Projects />
        </div>
      </div>
    </div>
  );
}
