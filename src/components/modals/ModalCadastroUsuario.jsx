import React, { useState } from "react";
import { X } from "lucide-react";

const privilegiosList = [
  "Gerenciamento de Usuários",
  "Gerar Relatórios",
  "Criar Solicitações de Complementos",
  "Balanças",
  "Gerenciar Config. das Balanças",
  "Cadastros",
];

const ModalCadastroUsuario = ({ open, onClose }) => {
  const [nome, setNome] = useState("");
  const [usuario, setUsuario] = useState("");
  const [cpf, setCpf] = useState("");
  const [privilegios, setPrivilegios] = useState([]);

  const togglePrivilegio = (priv) => {
    setPrivilegios((prev) =>
      prev.includes(priv) ? prev.filter((p) => p !== priv) : [...prev, priv]
    );
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 font-mono">
      <div className="bg-white rounded shadow-lg w-[600px] max-h-[90vh] overflow-y-auto border">
        {/* Título e botão fechar */}
        <div className="bg-[#D9D9D9] flex justify-between items-center px-4 py-2 border-b">
          <h2 className="text-lg font-semibold">Cadastro de Usuários</h2>
          <button onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* Formulário */}
        <div className="p-6 flex flex-wrap gap-4">
          <div className="flex flex-col w-[calc(50%-0.5rem)] space-y-2">
            <input
              type="text"
              placeholder="Nome e Sobrenome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1 shadow"
            />
            <input
              type="text"
              placeholder="Usuário"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1 shadow"
            />
            <input
              type="text"
              placeholder="CPF"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1 shadow"
            />
          </div>

          <div className="flex flex-col w-[calc(50%-0.5rem)] space-y-2">
            <button className="w-full h-[40px] bg-white shadow border border-gray-300 rounded text-sm">
              Redefinir Senha
            </button>
            <button className="w-full h-[40px] bg-white shadow border border-gray-300 rounded text-sm">
              Salvar Dados
            </button>
          </div>
        </div>

        {/* Privilégios */}
        <div className="px-6 pb-6 border-t">
          <h3 className="text-center font-semibold mb-2">
            Grupo de Privilégios
          </h3>
          <div className="grid grid-cols-1 gap-2">
            {privilegiosList.map((priv, idx) => (
              <label key={idx} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={privilegios.includes(priv)}
                  onChange={() => togglePrivilegio(priv)}
                />
                <span>{priv}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCadastroUsuario;
