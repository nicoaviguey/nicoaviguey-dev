function ProjectDos() {
  return (
    <div className="bg-pastel-pistacho p-4 rounded-lg shadow-md">
      <h2 className="font-semibold text-base mb-2 text-pastel-gris">🗂️ Proyectos</h2>
      <ul className="text-sm text-pastel-gris space-y-1">
        <li>🖥️ <strong>Mi portafolio</strong> — Este sitio tipo escritorio</li>
      </ul>

      {/* Ejemplos pastel y oscuro, si los quieres dejar como pruebas */}
      <div className="bg-pastel-rosa text-pastel-gris p-4 rounded-lg mt-4">
        ¡Hola mundo pastel!
      </div>

      <div className="bg-dark-fondo text-dark-texto p-4 rounded-lg mt-2">
        🌙 ¡Hola mundo en modo oscuro!
      </div>
    </div>
  );
}

export default ProjectDos;
