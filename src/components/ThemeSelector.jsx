import { useState } from "react";

import daisy from '../assets/svg/daisy-svgrepo-com.svg';
import frog from '../assets/svg/frog-fwhite-svgrepo-com.svg';
import cup from '../assets/svg/cup-hot-svgrepo-com.svg';
import cloud from '../assets/svg/cloud-svgrepo-com.svg';
import heart from '../assets/svg/heart-svgrepo-com.svg';
import moon from '../assets/svg/moon-svgrepo-com.svg';

const themes = [
  { id: 'theme-pastel', icon: daisy },
  { id: 'theme-hobbit', icon: frog },
  { id: 'theme-cafe', icon: cup },
  { id: 'theme-celeste', icon: cloud },
  { id: 'theme-violeta', icon: heart },
  { id: 'theme-oscuro', icon: moon },
];

export default function ThemeSelector({ onChangeTheme }) {
  const [selected, setSelected] = useState('theme-pastel');

  const handleThemeClick = (id) => {
    setSelected(id);
    onChangeTheme(id);
  };

  return (
    <div className="flex flex-wrap justify-center items-center gap-2">
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
