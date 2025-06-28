export default function Window({ title, children }) {
  return (
    <div className="w-72 rounded-2xl bg-pink-100 border-2 border-pink-300 shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-pink-200 flex items-center justify-between px-3 py-2">
        <span className="text-xs font-bold text-pink-800">{title}</span>
        <button className="text-pink-600 hover:text-pink-800">×</button>
      </div>

      {/* Content */}
      <div className="p-4 bg-pink-50 text-pink-900 text-sm">
        {children}
      </div>
    </div>
  );
}
