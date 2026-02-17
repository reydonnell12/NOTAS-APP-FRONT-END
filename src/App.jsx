import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { EditNotePage } from "./pages/EditNotePage";
import { CreateNotePage } from "./pages/CreateNotePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Asegúrate de tener el CSS

const USUARIOS_PERMITIDOS = [
  { user: "admin", pass: "1234" },
  { user: "sensei", pass: "react77" },
  { user: "lara", pass: "0000" },
];

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [passInput, setPassInput] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const found = USUARIOS_PERMITIDOS.find(
      (u) => u.user === userInput && u.pass === passInput,
    );

    if (found) {
      setIsLoggedIn(true);
    } else {
      alert("Credenciales incorrectas");
    }
  };

  // --- SI NO ESTÁ LOGUEADO, MOSTRAR ESTO ---
  if (!isLoggedIn) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#0f172a]">
        <form
          onSubmit={handleLogin}
          className="bg-[#1e293b] p-8 rounded-xl border border-purple-500 shadow-2xl w-80"
        >
          <h2 className="text-white text-xl font-bold mb-6 text-center">
            TodoApp Login
          </h2>
          <input
            type="text"
            placeholder="Usuario"
            className="w-full p-2 mb-4 rounded bg-slate-700 text-white outline-none border border-slate-600 focus:border-purple-500"
            onChange={(e) => setUserInput(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full p-2 mb-6 rounded bg-slate-700 text-white outline-none border border-slate-600 focus:border-purple-500"
            onChange={(e) => setPassInput(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded font-bold hover:bg-purple-700"
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }

  // --- SI YA SE LOGUEÓ, MOSTRAR TUS RUTAS ORIGINALES ---
  return (
    // Mantenemos tu clase original de la imagen
    <div className="w-full max-w-[1200px] mx-auto px-3.5">
      <div className="flex justify-end pt-4">
        <button
          onClick={() => setIsLoggedIn(false)}
          className="text-red-400 text-sm hover:underline"
        >
          Cerrar Sesión
        </button>
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/createNote" element={<CreateNotePage />} />
        <Route path="/editNote/:id" element={<EditNotePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <ToastContainer theme="dark" />
    </div>
  );
};
