export default function FairyWindow({ title, children }) {
  return (
    <div className="w-full max-w-md bg-tema-fondo rounded-3xl border-4 border-tema shadow-xl overflow-hidden transition-all duration-300">
      {/* Cabecera decorativa con fondo degradado*/}
      <div className="px-5 py-3 bg-tema-principal rounded-t-3xl flex items-center justify-between">
        <h2 className="text-base font-bold text-tema tracking-wide">
          ✨ {title}
        </h2>
        <button
          className="w-6 h-6 rounded-full bg-tema-secundario text-tema hover:scale-110 transition"
          title="Cerrar"
        >
          ×
        </button>
      </div>

      {/* Contenido suave */}
      <div className="p-6 text-tema text-sm bg-tema-fondo rounded-b-3xl">
        {children}
      </div>
    </div>
  );
}
