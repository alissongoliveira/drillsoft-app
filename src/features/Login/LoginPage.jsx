import React from "react";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center font-mono bg-white">
      {/* Logo */}
      <img
        src="/logo.png"
        alt="DrillSoft Logo"
        className="w-[191px] h-[191px] mb-6"
      />

      {/* Card de login */}
      <div className="w-[428px] h-[174px] bg-[#D9D9D9] shadow-md rounded-lg flex flex-col justify-center px-6">
        <div className="flex items-center mb-4">
          <label className="w-20 text-sm">Usuário:</label>
          <input
            type="text"
            className="w-[166px] h-[31px] shadow border border-gray-300 rounded px-2 bg-white mr-2"
          />
          <button className="w-[100px] h-[31px] shadow bg-white border border-gray-300 rounded text-sm">
            Entrar
          </button>
        </div>
        <div className="flex items-center">
          <label className="w-20 text-sm">Senha:</label>
          <input
            type="password"
            className="w-[166px] h-[31px] shadow border border-gray-300 rounded px-2 bg-white mr-2"
          />
          <button className="w-[100px] h-[31px] shadow bg-white border border-gray-300 rounded text-sm">
            Limpar
          </button>
        </div>
      </div>

      {/* Frase institucional */}
      <div className="mt-10 text-[32px] text-left w-[428px] leading-tight">
        <p>
          <strong>DrillSoft,</strong>
          <br />
          Onde a Mineração Encontra a Tecnologia.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
