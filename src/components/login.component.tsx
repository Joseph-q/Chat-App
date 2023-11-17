"use client";
import { FormEvent, useContext } from "react";
import { socketContext } from "@/context/socket.context";

const Login = ({handleLogin}:{handleLogin:()=>void}) => {
  const socket = useContext(socketContext);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get("username");
    socket.auth = { username };
    socket.connect();
    handleLogin()
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-gray-100 p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Inicio de Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Nombre de Usuario
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full p-2 border rounded"
              placeholder="Ingrese su nombre de usuario"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
