import MacWindow from "./MacWindow";
// import Window from "./Window";

export default function RainMP3() {
  return (
    <MacWindow title="RAIN.MP3">
      <div className="flex flex-col items-center space-y-2">
        <div className="text-4xl">☁️🎵</div>
        <div className="w-full bg-tema-fondo rounded-full h-2 overflow-hidden">
          <div className="bg-tema-principal h-full w-2/3"></div>
        </div>
        <div className="text-xs text-tema">3:14 / 5:20</div>
      </div>
    </MacWindow>
  );
}
