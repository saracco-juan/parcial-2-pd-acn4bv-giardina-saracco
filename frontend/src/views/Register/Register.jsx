import React from "react";
import { Link } from "react-router-dom";

const Register = () => {

  return (
    <div className="bg-[#030712] text-white font-sans min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md m-10">
        <div className="bg-[#1a1d2e] rounded-2xl shadow-2xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#f9d423] mb-2">
              Crear Cuenta
            </h1>
            <p className="text-gray-400 text-sm">
              Completa el formulario para registrarte
            </p>
          </div>

          {/* Register Form */}
          <form className="space-y-5">
            {/* Full Name Field */}
            <div>
              <label 
                htmlFor="fullName" 
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Nombre Completo
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="w-full bg-[#252841] border border-gray-600 text-white text-sm rounded-lg focus:ring-2 focus:ring-[#f9d423] focus:border-[#f9d423] block p-3 placeholder-gray-500 transition-all"
                placeholder="Juan Pérez"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label 
                htmlFor="email" 
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-[#252841] border border-gray-600 text-white text-sm rounded-lg focus:ring-2 focus:ring-[#f9d423] focus:border-[#f9d423] block p-3 placeholder-gray-500 transition-all"
                placeholder="ejemplo@correo.com"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label 
                htmlFor="password" 
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full bg-[#252841] border border-gray-600 text-white text-sm rounded-lg focus:ring-2 focus:ring-[#f9d423] focus:border-[#f9d423] block p-3 placeholder-gray-500 transition-all"
                placeholder="••••••••"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                Mínimo 4 caracteres
              </p>
            </div>


            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-[#f9d423] hover:bg-[#ffd700] text-[#030712] font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Registrarse
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-600"></div>
          </div>



          {/* Login Link */}
          <div className="text-center mt-6">
            <p className="text-gray-400 text-sm">
              ¿Ya tienes una cuenta?{" "}
              <Link 
                to={"/login"}
                className="text-[#f9d423] hover:text-[#ffd700] font-medium transition-colors"
              >
                Inicia sesión aquí
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
