import { useState } from "react";

const themes = [
  { id: 'theme-pastel', icon: '/src/assets/svg/daisy-svgrepo-com.svg' },
  { id: 'theme-hobbit', icon: '/src/assets/svg/frog-fwhite-svgrepo-com.svg' },
  { id: 'theme-cafe', icon: '/src/assets/svg/cup-hot-svgrepo-com.svg' },
  { id: 'theme-celeste', icon: '/src/assets/svg/cloud-svgrepo-com.svg' },
  { id: 'theme-violeta', icon: '/src/assets/svg/heart-svgrepo-com.svg' },
  { id: 'theme-oscuro', icon: '/src/assets/svg/moon-svgrepo-com.svg' },
];

export default function ThemeSelector({ onChangeTheme }) {
  const [selected, setSelected] = useState('theme-pastel');

  const handleThemeClick = (id) => {
    setSelected(id);
    onChangeTheme(id);
  };

  return (
    <div className="flex items-center gap-2">
      {themes.map((theme) => (
        <button
          key={theme.id}
          onClick={() => handleThemeClick(theme.id)}
          className={`w-8 h-8 p-1 rounded-full border-2 transition 
            ${selected === theme.id ? 'border-tema-contraste animate-brillito' : 'border-transparent'}
            hover:scale-110`}
        >
          <img src={theme.icon} alt={theme.id} className="w-full h-full" />
        </button>
      ))}
    </div>
  );
}
