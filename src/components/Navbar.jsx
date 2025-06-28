
export default function Navbar({ onToggleDark }) {
  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 bg-pastel-peonia dark:bg-dark-fondo shadow-md rounded-lg mb-6">
      <h1 className="text-xl font-bold text-pastel-gris dark:text-dark-texto">
        🍂 Nico's Desktop
      </h1>
      <button
        onClick={onToggleDark}
        className="px-3 py-1 rounded-md text-sm font-medium bg-pastel-rosa text-pastel-gris dark:bg-zinc-700 dark:text-white"
      >
        Cambiar tema
      </button>
    </nav>
  );
}
