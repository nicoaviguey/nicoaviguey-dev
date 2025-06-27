import './App.css';
import './index.css';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import ContactCard from './components/ContactCard';
import Calendar from './components/Calendar';
import Projects from './components/ProjectUno';
import ProfileBadge from './components/ProfileBadge';
import ProjectUno from './components/ProjectUno';
import ProjectDos from './components/ProjectDos';

export default function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <div className="min-h-screen bg-pastel-fondo dark:bg-dark-fondo p-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <Navbar onToggleDark={() => setDark(!dark)} />

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="col-span-full flex justify-center">
            <ProfileBadge />
          </div>
          <Calendar />
          <ContactCard />
          <ProjectUno />
          <ProjectDos />
        </div>
      </div>
    </div>
  );
}

// export default function App() {
//   return (
//     <div className="min-h-screen bg-pastel-fondo p-6">
//       <div className="max-w-6xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//         {/* Perfil centrado en la parte superior */}
//         <div className="col-span-full flex justify-center">
//           <ProfileBadge />
//         </div>

//         {/* Widgets estilo escritorio */}
//         <Calendar />
//         <ContactCard />
//         <ProjectUno />
//         <ProjectDos />
//       </div>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="min-h-screen w-full bg-pastel-fondo text-white px-6 py-10 font-sans">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

//         {/* Foto de perfil */}
//         <div className="flex flex-col items-center space-y-4">
//           <ProfileBadge />
//         </div>

//         {/* Contacto + Calendario */}
//         <div className="flex flex-col space-y-6">
//           <ContactCard />
//           <Calendar />
//         </div>

//         {/* Proyectos */}
//         <div className="flex flex-col space-y-6">
//           <ProjectUno />
//           <ProjectDos />
//         </div>
        
//       </div>
//     </div>
//   );
// }

// export default App;
