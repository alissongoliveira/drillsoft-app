import React, { useState } from "react";

export default function ModalEditarBalanca({ isOpen, onClose, balancaNome }) {
  const [ip, setIp] = useState("");
  const [porta, setPorta] = useState("");
  const [nome, setNome] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white rounded shadow-lg w-[500px] p-0 font-mono">
        {/* Cabeçalho */}
        <div className="bg-gray-200 px-4 py-2 flex justify-between items-center rounded-t">
          <h2 className="text-lg font-semibold">Editar Dados da Balança</h2>
          <button onClick={onClose} className="text-xl font-bold">
            &times;
          </button>
        </div>

        {/* Corpo */}
        <div className="p-6">
          <h3 className="text-center font-bold mb-6">{balancaNome}</h3>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="IP"
              value={ip}
              onChange={(e) => setIp(e.target.value)}
              className="border p-2 w-full"
            />
            <input
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="border p-2 w-full"
            />
            <input
              type="text"
              placeholder="Porta"
              value={porta}
              onChange={(e) => setPorta(e.target.value)}
              className="border p-2 w-full"
            />
            <button
              onClick={() => {
                onClose();
              }}
              className="bg-white rounded shadow text-sm h-[40px]"
            >
              Gravar Dados
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
