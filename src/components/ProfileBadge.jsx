export default function ProfileBadge() {
  return (
    <div className="flex flex-col items-center p-4 bg-pastel-peonia rounded-lg shadow-md">
      <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden shadow-lg">
        <img
          src="/src/assets/dev-ilus.png"
          alt="Nicole"
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="mt-4 text-pastel-gris font-semibold text-lg text-center">
        Nico Aviguey
        🌸
        Analista Programador
      </h1>
    </div>
  );
}
