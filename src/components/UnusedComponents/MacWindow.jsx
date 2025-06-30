export default function MacWindow({ title, children }) {
  return (
    <div className="w-full max-w-md rounded-2xl bg-tema-fondo border border-tema shadow-xl overflow-hidden">
      {/* Barra superior estilo macOS */}
      <div className="flex items-center px-4 py-2 bg-tema-secundario border-b border-tema">
        {/* Botones macOS */}
        <div className="flex space-x-2">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>

        {/* Título centrado */}
        <h1 className="flex-grow text-center text-xs font-semibold text-tema truncate select-none">
          {title}
        </h1>

        {/* Espacio para balancear visualmente */}
        <div className="w-10" />
      </div>

      {/* Contenido */}
      <div className="p-4 bg-tema-fondo text-tema text-sm">
        {children}
      </div>
    </div>
  );
}
