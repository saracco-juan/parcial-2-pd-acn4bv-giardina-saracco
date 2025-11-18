import React from "react";
import "./Table.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Table = (font) => {
  return (
    <div class="bg-gray-900 rounded-xl p-5 border border-gray-800 hover:border-primary transition-all group">
      <div class="flex items-center justify-between">
        <div class="flex-1">
          <div class="flex items-center gap-3 mb-2">
            <h3 class="text-lg font-bold text-primary group-hover:text-blue-400 transition-colors">
              SPACE GROTESK
            </h3>
            <span class="px-2 py-1 bg-accent/20 text-accent text-xs rounded-full font-medium">
              Nuevo
            </span>
          </div>
          <div class="flex items-center gap-4 text-sm text-gray-400">
            <span>Sans-serif</span>
            <span>•</span>
            <span>12 variantes</span>
            <span>•</span>
            <span class="text-gray-500">Modernas</span>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <button
            class="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            title="Editar"
          >
            <svg
              class="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </button>
          <button
            class="p-2 hover:bg-red-900/20 rounded-lg transition-colors"
            title="Eliminar"
          >
            <svg
              class="w-5 h-5 text-red-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
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
