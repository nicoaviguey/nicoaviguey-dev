function ProjectDos() {
  return (
    <div className="bg-tema-secundario p-4 rounded-lg shadow-md border border-tema">
      <h2 className="font-semibold text-base mb-2 text-tema">🗂️ Proyectos</h2>
      <ul className="text-sm text-tema space-y-1">
        <li>🖥️ <strong>Mi portafolio</strong> — Este sitio tipo escritorio</li>
      </ul>

      {/*  */}
      <div className="bg-tema-principal text-tema p-4 rounded-lg mt-4">
        ¡Hola mundo pastel!
      </div>

      <div className="bg-dark-fondo text-dark-texto p-4 rounded-lg mt-2">
        🌙 ¡Hola mundo en modo oscuro!
      </div>
    </div>
  );
}

export default ProjectDos;
