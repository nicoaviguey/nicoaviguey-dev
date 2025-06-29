import { useState, useEffect } from 'react';

export default function CalendarWindow() {
  const [days, setDays] = useState([]);
  const today = new Date();
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());

  const monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  useEffect(() => {
    const firstDay = new Date(year, month, 1).getDay(); 
    const lastDate = new Date(year, month + 1, 0).getDate();

    const tempDays = [];
    for (let i = 0; i < (firstDay === 0 ? 6 : firstDay - 1); i++) {
      tempDays.push(null);
    }
    for (let i = 1; i <= lastDate; i++) {
      tempDays.push(i);
    }

    setDays(tempDays);
  }, [month, year]);

  const currentDay = today.getDate();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  function goToPrevMonth() {
    if (month === 0) {
      setMonth(11);
      setYear(y => y - 1);
    } else {
      setMonth(m => m - 1);
    }
  }

  function goToNextMonth() {
    if (month === 11) {
      setMonth(0);
      setYear(y => y + 1);
    } else {
      setMonth(m => m + 1);
    }
  }

  return (
    <div className="w-full rounded-2xl border-2 border-tema bg-tema-fondo shadow-lg overflow-hidden">
      {/* Encabezado */}
      <div className="bg-tema-principal px-4 py-2 flex justify-between items-center">
        <span className="text-xs font-bold text-tema">CALENDAR.EXE</span>
        <button className="text-tema hover:text-tema-secundario">×</button>
      </div>

      {/* Contenido */}
      <div className="p-4 bg-tema-secundario">
        <div className="flex items-center justify-between mb-3">
          <button
            onClick={goToPrevMonth}
            className="text-sm px-2 py-1 bg-tema-principal text-tema rounded hover:bg-tema-fondo"
          >
            ←
          </button>
          <span className="text-sm font-semibold text-tema">
            📅 {monthNames[month]} {year}
          </span>
          <button
            onClick={goToNextMonth}
            className="text-sm px-2 py-1 bg-tema-principal text-tema rounded hover:bg-tema-fondo"
          >
            →
          </button>
        </div>

        <div className="grid grid-cols-7 text-xs text-tema font-medium mb-1 text-center">
          <div>Lun</div>
          <div>Mar</div>
          <div>Mié</div>
          <div>Jue</div>
          <div>Vie</div>
          <div>Sáb</div>
          <div>Dom</div>
        </div>

        <div className="grid grid-cols-7 gap-1 text-center text-tema text-sm">
          {days.map((day, index) => (
            <div
              key={index}
              className={`h-8 flex items-center justify-center rounded-lg ${
                day === currentDay &&
                month === currentMonth &&
                year === currentYear
                  ? 'bg-tema-fondo text-tema-secundario font-bold shadow-md'
                  : 'bg-white/50'
              }`}
            >
              {day || ''}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// import { useState, useEffect } from 'react';

// export default function CalendarWindow() {
//   const [days, setDays] = useState([]);
//   const today = new Date();
//   const [month, setMonth] = useState(today.getMonth());
//   const [year, setYear] = useState(today.getFullYear());

//   const monthNames = [
//     'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
//     'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
//   ];

//   useEffect(() => {
//     const firstDay = new Date(year, month, 1).getDay(); // Día de la semana del 1er día
//     const lastDate = new Date(year, month + 1, 0).getDate(); // Último día del mes

//     const tempDays = [];
//     // Rellenar espacios vacíos antes del 1
//     for (let i = 0; i < (firstDay === 0 ? 6 : firstDay - 1); i++) {
//       tempDays.push(null);
//     }
//     // Rellenar los días del mes
//     for (let i = 1; i <= lastDate; i++) {
//       tempDays.push(i);
//     }

//     setDays(tempDays);
//   }, [month, year]);

//   const currentDay = today.getDate();
//   const currentMonth = today.getMonth();
//   const currentYear = today.getFullYear();

//   function goToPrevMonth() {
//     if (month === 0) {
//       setMonth(11);
//       setYear(y => y - 1);
//     } else {
//       setMonth(m => m - 1);
//     }
//   }

//   function goToNextMonth() {
//     if (month === 11) {
//       setMonth(0);
//       setYear(y => y + 1);
//     } else {
//       setMonth(m => m + 1);
//     }
//   }

//   return (
//     <div className="w-full rounded-2xl border-2 border-pastel-rosa bg-pastel-fondo shadow-lg overflow-hidden">
//       {/* Encabezado */}
//       <div className="bg-pastel-peonia px-4 py-2 flex justify-between items-center">
//         <span className="text-xs font-bold text-pastel-gris">CALENDAR.EXE</span>
//         <button className="text-pastel-gris hover:text-pastel-peonia">×</button>
//       </div>

//       {/* Contenido */}
//       <div className="p-4 bg-pastel-rosa">
//         <div className="flex items-center justify-between mb-3">
//           <button
//             onClick={goToPrevMonth}
//             className="text-sm px-2 py-1 bg-pastel-peonia text-pastel-gris rounded hover:bg-pastel-pistacho"
//           >
//             ←
//           </button>
//           <span className="text-sm font-semibold text-pastel-gris">
//             📅 {monthNames[month]} {year}
//           </span>
//           <button
//             onClick={goToNextMonth}
//             className="text-sm px-2 py-1 bg-pastel-peonia text-pastel-gris rounded hover:bg-pastel-pistacho"
//           >
//             →
//           </button>
//         </div>

//         <div className="grid grid-cols-7 text-xs text-pastel-gris font-medium mb-1 text-center">
//           <div>Lun</div>
//           <div>Mar</div>
//           <div>Mié</div>
//           <div>Jue</div>
//           <div>Vie</div>
//           <div>Sáb</div>
//           <div>Dom</div>
//         </div>

//         <div className="grid grid-cols-7 gap-1 text-center text-pastel-gris text-sm">
//           {days.map((day, index) => (
//             <div
//               key={index}
//               className={`h-8 flex items-center justify-center rounded-lg ${
//                 day === currentDay &&
//                 month === currentMonth &&
//                 year === currentYear
//                   ? 'bg-pastel-pistacho text-white font-bold shadow-md'
//                   : 'bg-white/50'
//               }`}
//             >
//               {day || ''}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>

//   );
// }
