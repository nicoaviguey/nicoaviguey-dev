export default function Window({ title, children }) {
  return (
    <div className="w-full rounded-2xl bg-tema-secundario border-2 border-tema shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-tema-secundario flex items-center justify-between px-3 py-2">
        <span className="text-xs font-bold text-tema">{title}</span>
        <button className="text-tema hover:text-tema-principal">×</button>
      </div>

      {/* Content */}
      <div className="w-full h-full p-4 bg-tema-fondo text-tema text-sm">
        {children}
      </div>
    </div>
  );
}
