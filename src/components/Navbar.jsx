export default function Navbar({ onChangeTheme }) {
  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 bg-tema-principal text-tema shadow-md rounded-lg mb-6">
      <h1 className="text-xl font-bold">🍂 Nico's Desktop</h1>

      <select
        onChange={(e) => onChangeTheme(e.target.value)}
        className="px-3 py-1 rounded-md text-sm font-medium bg-tema-secundario text-tema border border-tema"
      >
        <option value="theme-pastel">🌸 Pastel</option>
        <option value="theme-hobbit">🍃 Hobbit</option>
        <option value="theme-celeste">🌤 Celeste</option>
        <option value="theme-violeta">💜 Violeta</option>
        <option value="theme-oscuro">🌙 Oscuro</option>
      </select>
    </nav>
  );
}

// const themes = ['pastel', 'violeta', 'hobbit', 'celeste', 'oscuro'];

// export default function Navbar({ theme, onChangeTheme }) {
//   return (
//     <nav className="w-full flex justify-between items-center px-6 py-4 bg-tema-principal shadow-md rounded-lg mb-6 border border-tema">
//       <h1 className="text-xl font-bold text-tema">
//         🍂 Nico's Desktop
//       </h1>
//       <select
//         value={theme}
//         onChange={(e) => onChangeTheme(e.target.value)}
//         className="px-3 py-1 rounded-md text-sm font-medium bg-tema-secundario text-tema border border-tema"
//       >
//         {themes.map((t) => (
//           <option key={t} value={t}>
//             {t.charAt(0).toUpperCase() + t.slice(1)}
//           </option>
//         ))}
//       </select>
//     </nav>
//   );
// }


// export default function Navbar({ onToggleDark }) {
//   return (
//     <nav className="w-full flex justify-between items-center px-6 py-4 bg-pastel-peonia dark:bg-dark-fondo shadow-md rounded-lg mb-6">
//       <h1 className="text-xl font-bold text-pastel-gris dark:text-dark-texto">
//         🍂 Nico's Desktop
//       </h1>
//       <button
//         onClick={onToggleDark}
//         className="px-3 py-1 rounded-md text-sm font-medium bg-pastel-rosa text-pastel-gris dark:bg-zinc-700 dark:text-white"
//       >
//         Cambiar tema
//       </button>
//     </nav>
//   );
// }
