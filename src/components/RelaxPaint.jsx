import { useState } from 'react';

export default function RelaxPaint() {
  const pastelColors = [
    '#fcd5ce', '#fae1dd', '#d8e2dc', '#a9def9', '#cdb4db', '#e0bbf9',
  ];

  const [selectedColor, setSelectedColor] = useState(pastelColors[0]);
  const [message, setMessage] = useState('🌸 Respira profundo...');

  return (
    <div className="w-full rounded-2xl border-2 border-tema bg-tema-secundario shadow-lg overflow-hidden">
      {/* Encabezado */}
      <div className="bg-tema-principal px-4 py-2 flex justify-between items-center">
        <span className="text-xs font-bold text-tema">RELAX.PAINT</span>
        <button className="text-tema hover:text-tema-principal">×</button>
      </div>

      {/* Contenido */}
      <div className="p-4 bg-tema-secundario">
        {/* Canvas simulado */}
        <div
          className="w-full h-28 rounded-lg border-2 border-white shadow-inner flex items-center justify-center text-center px-2 text-tema text-sm"
          style={{
            color: selectedColor,
            backdropFilter: 'brightness(0.85)',
          }}
        >
          {message}
        </div>

        {/* Color picker */}
        <div className="mt-3 mb-2 flex gap-2 flex-wrap">
          {pastelColors.map((color, index) => (
            <button
              key={index}
              onClick={() => setSelectedColor(color)}
              className={`w-6 h-6 rounded-full border-2 transition-transform ${
                selectedColor === color ? 'border-tema-principal scale-110' : 'border-white'
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        {/* Campo para mensaje */}
        <textarea
          className="w-full mt-2 text-sm rounded-lg p-2 border border-tema bg-tema-fondo text-tema focus:outline-none focus:ring-2 focus:ring-tema-principal"
          rows="2"
          placeholder="Escribe algo bonito..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
    </div>
  );
}

// import { useState } from 'react';

// export default function RelaxPaint() {
//   const pastelColors = [
//     '#fcd5ce', '#fae1dd', '#d8e2dc', '#a9def9', '#cdb4db', '#e0bbf9',
//   ];

//   const [selectedColor, setSelectedColor] = useState(pastelColors[0]);
//   const [message, setMessage] = useState('🌸 Respira profundo...');

//   return (
//     <div className="w-full rounded-2xl border-2 border-pastel-rosa bg-pastel-rosa shadow-lg overflow-hidden">
//       {/* Encabezado */}
//       <div className="bg-pastel-peonia px-4 py-2 flex justify-between items-center">
//         <span className="text-xs font-bold text-tema">RELAX.PAINT</span>
//         <button className="text-tema hover:text-pink-800">×</button>
//       </div>

//       {/* Contenido */}
//       <div className="p-4 bg-pastel-rosa">
//         {/* Canvas simulado */}
//         <div
//           className="w-full h-28 rounded-lg border-2 border-white shadow-inner flex items-center justify-center text-center px-2 text-tema text-sm"
//           style={{
//             backgroundImage: '',
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             color: selectedColor,
//             backdropFilter: 'brightness(0.85)',
//           }}
//         >
//           {message}
//         </div>

//         {/* Color picker */}
//         <div className="mt-3 mb-2 flex gap-2 flex-wrap">
//           {pastelColors.map((color, index) => (
//             <button
//               key={index}
//               onClick={() => setSelectedColor(color)}
//               className={`w-6 h-6 rounded-full border-2 ${
//                 selectedColor === color ? 'border-pastel-peonia scale-110' : 'border-white'
//               }`}
//               style={{ backgroundColor: color }}
//             />
//           ))}
//         </div>

//         {/* Campo para mensaje */}
//         <textarea
//           className="w-full mt-2 text-sm rounded-lg p-2 border border-pastel-rosa text-tema focus:outline-none focus:ring-2 focus:ring-pink-300 bg-tema-fondo"
//           rows="2"
//           placeholder="Escribe algo bonito..."
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         />
//       </div>
//     </div>
//   );
// }
