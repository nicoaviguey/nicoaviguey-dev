import { useState, useEffect } from 'react';

function Calendar() {
  const [days, setDays] = useState([]);

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    const tempDays = [];

    for (let i = 0; i < (firstDay === 0 ? 6 : firstDay - 1); i++) {
      tempDays.push(null);
    }
    for (let i = 1; i <= lastDate; i++) {
      tempDays.push(i);
    }

    setDays(tempDays);
  }, []);

  const today = new Date();
  const formattedDate = today.toLocaleDateString('es-ES', {
    month: 'long',
    year: 'numeric',
  });

  const currentDay = today.getDate();

  return (
    <div className="bg-tema-fondo p-4 rounded-lg shadow-md border border-tema">
      <h2 className="font-semibold text-base mb-2 text-tema">📅 Calendario — {formattedDate}</h2>

      <div className="grid grid-cols-7 text-center text-xs text-tema font-medium mb-1">
        <div>Lun</div>
        <div>Mar</div>
        <div>Mié</div>
        <div>Jue</div>
        <div>Vie</div>
        <div>Sáb</div>
        <div>Dom</div>
      </div>

      <div className="grid grid-cols-7 text-sm gap-1">
        {days.map((day, index) => (
          <div
            key={index}
            className={`h-8 flex items-center justify-center rounded ${
              day === currentDay
                ? 'bg-tema-secundario text-white font-bold'
                : 'text-tema'
            }`}
          >
            {day || ''}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
