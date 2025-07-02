export default function ProfileBadge() {
  return (
    <div className="w-full h-full flex flex-col lg:flex-row md:flex-col sm:flex-col items-center p-4 bg-tema-principal rounded-xl shadow-md">
      <div className="w-32 h-32 rounded-full border-4 border-tema animate-brillito overflow-hidden shadow-lg">
        <img
          src="./src/assets/imag-usables/perfil-nicole.PNG"
          alt="Nicole"
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="font-titulo pl-2 mt-4 text-tema font-semibold text-xl text-center">
        Nico Aviguey
        🍃
        Desarrolladora Web Full Stack Junior
      </h1>
    </div>
  );
}
