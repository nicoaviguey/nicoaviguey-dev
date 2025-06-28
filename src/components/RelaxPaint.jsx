import Window from "./Window";

export default function RelaxPaint() {
  return (
    <Window title="RELAX.PAINT">
      <div className="space-y-2">
        <div className="h-24 w-full bg-green-100 rounded-lg border border-green-200 flex items-center justify-center text-green-800 text-xs">
          🌸 Aquí iría tu dibujito 🌸
        </div>

        <div className="grid grid-cols-4 gap-1">
          {["#fcd5ce", "#fae1dd", "#d8e2dc", "#a9def9", "#cdb4db"].map((color, i) => (
            <div key={i} className="w-6 h-6 rounded-full" style={{ backgroundColor: color }}></div>
          ))}
        </div>
      </div>
    </Window>
  );
}
