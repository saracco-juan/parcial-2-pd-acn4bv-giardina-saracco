import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/input/FormInput";

const Login = () => {
  return (
    <div className="bg-[#030712] text-white font-sans min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-[#1a1d2e] rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#f9d423] mb-2">
              Bienvenido
            </h1>
            <p className="text-gray-400 text-sm">
              Ingresa tus credenciales para continuar
            </p>
          </div>

          <form className="space-y-6">
            <div>
              <Input
                type={"email"}
                onChange={()=>{}}
                value={""}
                key={""}
                placeholder={"Escribe tu email"}
                label={"Correo Electrónico"}
              />
            </div>

            <div>
              <Input
                type={"password"}
                onChange={()=>{}}
                value={""}
                key={""}
                placeholder={"Escribe tu contraseña"}
                label={"Contraseña"}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#f9d423] hover:bg-[#ffd700] text-[#030712] font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Iniciar Sesión
            </button>
          </form>

          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-600"></div>
          </div>

          <div className="text-center mt-6">
            <p className="text-gray-400 text-sm">
              ¿No tienes una cuenta?{" "}
              <Link
                to={"/register"}
                className="text-[#f9d423] hover:text-[#ffd700] font-medium transition-colors"
              >
                Regístrate aquí
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
