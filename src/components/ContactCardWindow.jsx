function ContactCard() {
  return (
    <div className="w-full rounded-2xl border-2 border-tema bg-tema-fondo shadow-lg overflow-hidden">
      {/* Encabezado estilo ventana */}
      <div className="bg-tema-principal px-4 py-2 flex justify-between items-center">
        <span className="text-xs font-bold text-tema">CONTACT.EXE</span>
        <button className="text-tema hover:text-tema-secundario">×</button>
      </div>

      {/* Contenido */}
      <div className="p-4 bg-tema-fondo">
        <h2 className="font-semibold text-base mb-2 text-tema">📮 Contacto</h2>
        <ul className="text-sm text-tema space-y-1">
          <li>
            <a
              href="mailto:nicoaviguey.ap@gmail.com"
              className="hover:underline"
            >
              📧 nicoleaviguey.ap@gmail.com
            </a>
          </li>
          <li>
            <a
              href="https://github.com/nicoaviguey"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              💻 github.com/nicoaviguey
            </a>
          </li>
          <li>
            <a
              href="https://www.nicoaviguey.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              🌐 www.nicoaviguey.dev
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ContactCard;

// function ContactCard() {
//   return (
//     <div className="w-full rounded-2xl border-2 border-pastel-peonia bg-pastel-fondo shadow-lg overflow-hidden">
//       {/* Encabezado estilo ventana */}
//       <div className="bg-pastel-peonia px-4 py-2 flex justify-between items-center">
//         <span className="text-xs font-bold text-pastel-gris">CONTACT.EXE</span>
//         <button className="text-pastel-gris hover:text-pastel-peonia">×</button>
//       </div>

//       {/* Contenido */}
//       <div className="p-4 bg-pastel-fondo">
//         <h2 className="font-semibold text-base mb-2 text-pastel-gris">📮 Contacto</h2>
//         <ul className="text-sm text-pastel-gris space-y-1">
//           <li>
//             <a
//               href="mailto:nicoaviguey.ap@gmail.com"
//               className="hover:underline"
//             >
//               📧 nicoleaviguey.ap@gmail.com
//             </a>
//           </li>
//           <li>
//             <a
//               href="https://github.com/nicoaviguey"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:underline"
//             >
//               💻 github.com/nicoaviguey
//             </a>
//           </li>
//           <li>
//             <a
//               href="https://www.nicoaviguey.dev/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:underline"
//             >
//               🌐 www.nicoaviguey.dev
//             </a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default ContactCard;
