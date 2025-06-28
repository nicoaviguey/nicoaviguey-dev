export default function ProfileBadge() {
  return (
    <div className="w-full h-full flex flex-row items-center p-4 bg-pastel-peonia rounded-lg shadow-md">
      <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden shadow-lg">
        <img
          src="src/assets/perfil-nicole.PNG"
          alt="Nicole"
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="pl-2 mt-4 text-pastel-gris font-semibold text-lg text-right">
        Nico Aviguey
        🍃
        Desarrolladora Web Full Stack Junior
      </h1>
    </div>
  );
}
