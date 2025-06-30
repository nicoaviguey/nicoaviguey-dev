import React from "react";

export default function VentanitaKawaii({ title, children }) {
  return (
    <div
      className="font-kawaii w-full max-w-xl mx-auto rounded-xl bg-tema-principal shadow-lg select-none relative overflow-hidden" style={{ boxShadow: "0 12px 24px rgba(0,0,0,0.12)" }}>
      {/* Barra superior estilo Mac retro kawaii */}
      <div
        className="flex items-center space-x-3 bg-tema-secundario px-4 py-2 rounded-t-xl select-none">
        {/* Botoncitos estilo Mac */}
        <span className="w-4 h-4 rounded-full bg-red-400 shadow-[0_0_6px_rgba(255,100,100,0.7)]"></span>
        <span className="w-4 h-4 rounded-full bg-yellow-400 shadow-[0_0_6px_rgba(255,255,100,0.7)]"></span>
        <span className="w-4 h-4 rounded-full bg-green-400 shadow-[0_0_6px_rgba(100,255,100,0.7)]"></span>

        {/* Título centrado */}
        <h3 className="flex-grow text-right font-bold text-base text-tema truncate">
          {title}
        </h3>
      </div>

      {/* Contenido */}
      <div className="font-digital bg-tema-principal p-5 text-sm text-tema">{children}</div>
    </div>
  );
}
