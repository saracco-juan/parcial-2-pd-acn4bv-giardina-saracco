import React from 'react'
import FormAddFont from './FormAddFont'

const Dashboard = () => {
  return (
    <div className='bg-gray-950 text-gray-100 min-h-screen'>

      <header class="bg-gray-900 border-b border-gray-800 sticky top-0 z-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div class="flex items-center justify-between">
            <div>
              <h1 class="text-2xl font-bold text-accent">GLYPHA</h1>
              <p class="text-sm text-gray-400">Panel de Administración</p>
            </div>
            <div class="flex items-center gap-4">
              <span class="text-sm text-gray-400">Admin</span>
              <button class="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition-colors">
                Salir
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
            
          <FormAddFont/>

            
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold">Tipografías Registradas</h2>
              <div className="flex items-center gap-2">
                <input 
                  type="search" 
                  placeholder="Buscar tipografía..."
                  className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

              
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
              <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium whitespace-nowrap">
                Todas (24)
              </button>
              <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-sm whitespace-nowrap transition-colors">
                Modernas (8)
              </button>
              <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-sm whitespace-nowrap transition-colors">
                Contemporáneas (10)
              </button>
              <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-sm whitespace-nowrap transition-colors">
                Clásicas (6)
              </button>
            </div>

            {/* Cards Tipografias */}
              
            <div className="space-y-3">
                  
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
                        <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors" title="Editar">
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                        </button>
                        <button className="p-2 hover:bg-red-900/20 rounded-lg transition-colors" title="Eliminar">
                            <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </button>
                    </div>
                  </div>
                </div>

                  
                  <div className="bg-gray-900 rounded-xl p-5 border border-gray-800 hover:border-primary transition-all group">
                      <div className="flex items-center justify-between">
                          <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                  <h3 className="text-lg font-bold text-primary group-hover:text-blue-400 transition-colors">
                                      INTER
                                  </h3>
                              </div>
                              <div className="flex items-center gap-4 text-sm text-gray-400">
                                  <span>Sans-serif</span>
                                  <span>•</span>
                                  <span>18 variantes</span>
                                  <span>•</span>
                                  <span className="text-gray-500">Modernas</span>
                              </div>
                          </div>
                          <div className="flex items-center gap-2">
                              <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors" title="Editar">
                                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                  </svg>
                              </button>
                              <button className="p-2 hover:bg-red-900/20 rounded-lg transition-colors" title="Eliminar">
                                  <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                  </svg>
                              </button>
                          </div>
                      </div>
                  </div>

                  
                  <div className="bg-gray-900 rounded-xl p-5 border border-gray-800 hover:border-primary transition-all group">
                      <div className="flex items-center justify-between">
                          <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                  <h3 className="text-lg font-bold text-primary group-hover:text-blue-400 transition-colors">
                                      POPPINS
                                  </h3>
                                  <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full font-medium">
                                      Destacada
                                  </span>
                              </div>
                              <div className="flex items-center gap-4 text-sm text-gray-400">
                                  <span>Sans-serif</span>
                                  <span>•</span>
                                  <span>9 variantes</span>
                                  <span>•</span>
                                  <span className="text-gray-500">Modernas</span>
                              </div>
                          </div>
                          <div className="flex items-center gap-2">
                              <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors" title="Editar">
                                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                  </svg>
                              </button>
                              <button className="p-2 hover:bg-red-900/20 rounded-lg transition-colors" title="Eliminar">
                                  <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                  </svg>
                              </button>
                          </div>
                      </div>
                  </div>

                  
                <div className="bg-gray-900 rounded-xl p-5 border border-gray-800 hover:border-primary transition-all group">
                    <div className="flex items-center justify-between">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-lg font-bold text-primary group-hover:text-blue-400 transition-colors">
                                    CLASH DISPLAY
                                </h3>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-gray-400">
                                <span>Display</span>
                                <span>•</span>
                                <span>7 variantes</span>
                                <span>•</span>
                                <span className="text-gray-500">Contemporáneas</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors" title="Editar">
                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                            </button>
                            <button className="p-2 hover:bg-red-900/20 rounded-lg transition-colors" title="Eliminar">
                                <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                  
                <div className="bg-gray-900 rounded-xl p-5 border border-gray-800 hover:border-primary transition-all group">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-primary group-hover:text-blue-400 transition-colors">
                          MONTSERRAT
                        </h3>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span>Sans-serif</span>
                        <span>•</span>
                        <span>14 variantes</span>
                        <span>•</span>
                        <span className="text-gray-500">Contemporáneas</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors" title="Editar">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button className="p-2 hover:bg-red-900/20 rounded-lg transition-colors" title="Eliminar">
                        <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                  
                <div className="bg-gray-900 rounded-xl p-5 border border-gray-800 hover:border-primary transition-all group">
                    <div className="flex items-center justify-between">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-lg font-bold text-primary group-hover:text-blue-400 transition-colors">
                                    ROBOTO
                                </h3>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-gray-400">
                                <span>Sans-serif</span>
                                <span>•</span>
                                <span className="text-gray-500">Contemporáneas</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors" title="Editar">
                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                            </button>
                            <button className="p-2 hover:bg-red-900/20 rounded-lg transition-colors" title="Eliminar">
                                <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="mt-8 flex items-center justify-between">
              <p className="text-sm text-gray-400">
                Mostrando 1-6 de 24 tipografías 
              </p>
              <div className="flex gap-2">
                <button className="px-3 py-2 bg-gray-800 text-gray-500 rounded-lg text-sm cursor-not-allowed">
                  Anterior
                </button>
                <button className="px-3 py-2 bg-primary text-white rounded-lg text-sm font-medium">
                  1
                </button>
                <button className="px-3 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-sm transition-colors">
                  2
                </button>
                <button className="px-3 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-sm transition-colors">
                  3
                </button>
                <button className="px-3 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-sm transition-colors">
                  Siguiente
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Dashboard