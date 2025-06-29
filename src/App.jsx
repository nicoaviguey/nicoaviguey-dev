import './App.css';
import './index.css';
import { useEffect, useLayoutEffect, useState } from 'react';
import Navbar from './components/Navbar';
import ContactCard from './components/ContactCard';
import Calendar from './components/Calendar';
import ProfileBadge from './components/ProfileBadge';
import ProjectUno from './components/ProjectUno';
import ProjectDos from './components/ProjectDos';
import Window from './components/Window';
import RelaxPaint from './components/RelaxPaint';
import RainMP3 from './components/RainMP3';
import CalendarWindow from './components/CalendarWindow';
import ContactCardWindow from './components/ContactCardWindow';

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
    <div className="min-h-screen bg-tema-fondo p-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <Navbar theme={theme} onChangeTheme={setTheme} />

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="col-span-full flex justify-center">
            <ProfileBadge />
          </div>
          <Calendar />
          <CalendarWindow />
          <ContactCard />
          <ContactCardWindow />
          <ProjectUno />
          <ProjectDos />
          <RelaxPaint />
          <RainMP3 />
        </div>
      </div>
    </div>
  );
}

// import './App.css';
// import './index.css';
// import { useEffect, useState } from 'react';
// import Navbar from './components/Navbar';
// import ContactCard from './components/ContactCard';
// import Calendar from './components/Calendar';
// import ProfileBadge from './components/ProfileBadge';
// import ProjectUno from './components/ProjectUno';
// import ProjectDos from './components/ProjectDos';
// import Window from './components/Window';
// import RelaxPaint from './components/RelaxPaint';
// import RainMP3 from './components/RainMP3';
// import CalendarWindow from './components/CalendarWindow';
// import ContactCardWindow from './components/ContactCardWindow';

// export default function App() {
//   const [theme, setTheme] = useState('pastel');

//   useEffect(() => {
//     document.documentElement.classList.remove(
//       'theme-pastel',
//       'theme-violeta',
//       'theme-hobbit',
//       'theme-celeste',
//       'theme-oscuro'
//     );
//     document.documentElement.classList.add(`theme-${theme}`);
//   }, [theme]);

//   return (
//     <div className="min-h-screen bg-pastel-fondo dark:bg-dark-fondo p-6 transition-colors duration-300">
//       <div className="max-w-6xl mx-auto">
//         <Navbar theme={theme} onChangeTheme={setTheme} />

//         <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//           <div className="col-span-full flex justify-center">
//             <ProfileBadge />
//           </div>
//           <Calendar />
//           <CalendarWindow />
//           <ContactCard />
//           <ContactCardWindow />
//           <ProjectUno />
//           <ProjectDos />
//           <RelaxPaint />
//           <RainMP3 />
//         </div>
//       </div>
//     </div>
//   );
// }
