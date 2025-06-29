import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white font-mono">
      {/* Barra superior fixa */}
      <header className="w-full h-12 bg-[#D9D9D9] flex items-center px-4 shadow">
        <div className="flex items-center space-x-2">
          {/* Ícone do menu */}
          <button className="w-[25px] h-[25px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Avatar */}
          <div className="w-[40px] h-[40px] rounded-full bg-white border border-gray-400 flex items-center justify-center text-sm font-bold">
            A
          </div>
        </div>
      </header>

      {/* Área útil abaixo da barra de topo */}
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

export default HomePage;
