import React from 'react'
import { useState } from 'react';

const FormAddFont = () => {

  

  const handleSubmit = (e) => {

    e.preventDefault(); 

  }

  return (
    <div className="lg:col-span-1">
      <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 sticky top-24">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          <span className="text-primary">+</span> Agregar Tipografía
        </h2>
          
        <form className="space-y-4" onSubmit={handleSubmit}>
            
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Nombre de la Tipografía
            </label>
            <input 
              type="text" 
              placeholder="Ej: Inter"
              class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

            
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Categoría
            </label>
            <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
              <option>Modernas</option>
              <option>Contemporáneas</option>
              <option>Clásicas</option>
              <option>Display</option>
              <option>Serif</option>
              <option>Sans-serif</option>
            </select>
          </div>

            
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Tipo
            </label>
            <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
              <option>Sans-serif</option>
              <option>Serif</option>
              <option>Display</option>
              <option>Monospace</option>
              <option>Script</option>
            </select>
          </div>

            
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Número de Variantes
            </label>
            <input 
              type="number" 
              placeholder="Ej: 18"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

            
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Descripción
            </label>
            <textarea 
              rows="3"
              placeholder="Breve descripción de la tipografía..."
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
            ></textarea>
          </div>

            
          <div className="flex items-center gap-3">
            <input 
              type="checkbox" 
              id="featured"
              className="w-5 h-5 bg-gray-800 border-gray-700 rounded text-primary focus:ring-primary"
            />
            <label htmlFor="featured" className="text-sm text-gray-300 cursor-pointer">
              Marcar como destacada
            </label>
          </div>

            
          <div className="flex items-center gap-3">
            <input 
              type="checkbox" 
              id="new"
              className="w-5 h-5 bg-gray-800 border-gray-700 rounded text-primary focus:ring-primary"
            />
            <label htmlFor="new" className="text-sm text-gray-300 cursor-pointer">
              Marcar como novedad
            </label>
          </div>

            
          <div className="pt-4 space-y-2">
            <button 
              type="submit"
              className="w-full bg-primary hover:bg-blue-600 text-white font-medium py-3 rounded-lg transition-colors"
            >
              Agregar Tipografía
            </button>
            <button 
              type="reset"
              className="w-full bg-gray-800 hover:bg-gray-700 text-gray-300 font-medium py-3 rounded-lg transition-colors"
            >
              Limpiar Formulario
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormAddFont 