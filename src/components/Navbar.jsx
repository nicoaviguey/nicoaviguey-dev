export default function Navbar({ onChangeTheme }) {
  return (
    <nav className="font-titulo w-full flex justify-between items-center px-6 py-4 bg-tema-principal text-tema shadow-md rounded-xl mb-6">
      <h1 className="text-xl font-bold">🍂 Nico's Desktop</h1>

      <select
        onChange={(e) => onChangeTheme(e.target.value)}
        className="font-digital px-3 py-1 rounded-xl text-sm font-medium bg-tema-secundario text-tema"
      >
        <option value="theme-pastel">🌸 Pastel</option>
        <option value="theme-hobbit">🍃 Hobbit</option>
        <option value="theme-cafe">🍂 Espresso</option>
        <option value="theme-celeste">🌤 Celeste</option>
        <option value="theme-violeta">💜 Violeta</option>
        <option value="theme-oscuro">🌙 Oscuro</option>
      </select>
    </nav>
  );
}
