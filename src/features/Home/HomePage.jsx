import React, { useState } from "react";
import {
  User,
  Truck,
  Car,
  Users,
  Info,
  LogOut,
  Menu as MenuIcon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="min-h-screen bg-white font-mono relative">
      {/* Barra superior */}
      <header className="w-full h-12 bg-[#D9D9D9] flex items-center px-4 shadow">
        <div className="flex items-center space-x-2">
          {/* Ícone de menu */}
          <button onClick={toggleMenu} className="w-[25px] h-[25px]">
            <MenuIcon className="w-full h-full" />
          </button>

          {/* Avatar */}
          <div className="w-[40px] h-[40px] rounded-full bg-white border border-gray-400 flex items-center justify-center text-sm font-bold">
            A
          </div>
        </div>
      </header>

      {/* Menu lateral */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex" onClick={toggleMenu}>
          <div
            className="w-[200px] h-full bg-white border-r shadow z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="divide-y text-sm">
              <MenuItem
                icon={<User size={16} />}
                label="Usuários"
                onClick={() => {
                  navigate("/usuarios");
                  toggleMenu();
                }}
              />
              <MenuItem
                icon={<Truck size={16} />}
                label="Balança"
                onClick={() => {
                  navigate("/balanca");
                  toggleMenu();
                }}
              />
              <MenuItem icon={<Car size={16} />} label="Portaria" />
              <MenuItem icon={<Users size={16} />} label="Cadastros" />
              <MenuItem icon={<Info size={16} />} label="Sobre" />
              <MenuItem icon={<LogOut size={16} />} label="Sair" />
            </ul>
          </div>
          {/* Fundo escurecido fora do menu */}
          <div className="flex-1 bg-black bg-opacity-30" />
        </div>
      )}

      {/* Conteúdo central (logo) */}
      <main className="h-[calc(100vh-48px)] flex items-center justify-center">
        <img
          src="/logo.png"
          alt="DrillSoft Logo"
          className="w-[450px] h-[450px] object-contain"
        />
      </main>
    </div>
  );
};

const MenuItem = ({ icon, label, onClick }) => (
  <li
    className="flex items-center space-x-2 px-4 py-3 hover:bg-gray-100 cursor-pointer"
    onClick={onClick}
  >
    <span>{icon}</span>
    <span>{label}</span>
  </li>
);

export default HomePage;
