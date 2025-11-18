import React from "react";

const Table = (font) => {
  return (
    <div className="bg-gray-900 rounded-xl p-5 border border-gray-800 hover:border-primary transition-all group">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-lg font-bold text-primary group-hover:text-blue-400 transition-colors">
              SPACE GROTESK
            </h3>
            <span className="px-2 py-1 bg-accent/20 text-accent text-xs rounded-full font-medium">
              Nuevo
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>Sans-serif</span>
            <span>•</span>
            <span>12 variantes</span>
            <span>•</span>
            <span className="text-gray-500">Modernas</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            title="Editar"
          >
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </button>
          <button
            className="p-2 hover:bg-red-900/20 rounded-lg transition-colors"
            title="Eliminar"
          >
            <svg
              className="w-5 h-5 text-red-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
