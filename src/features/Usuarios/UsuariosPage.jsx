import React from "react";
import { useNavigate } from "react-router-dom";
import { Printer, Filter, Plus, ArrowLeft, Pencil } from "lucide-react";

const mockUsuarios = [
  {
    nome: "Jhon Joe Santos",
    usuario: "Jds",
    data: "01/10/2023, 09:00",
    status: "Ativo",
  },
  {
    nome: "Pedro Santos",
    usuario: "PedroS",
    data: "01/10/2023, 09:00",
    status: "Bloqueado",
  },
  {
    nome: "João Pedro",
    usuario: "João",
    data: "01/10/2023, 09:00",
    status: "Ativo",
  },
  {
    nome: "Will Alves Santo",
    usuario: "Will",
    data: "01/10/2023, 11:00",
    status: "Ativo",
  },
  {
    nome: "Alves Santos",
    usuario: "As",
    data: "01/10/2023, 11:01",
    status: "Ativo",
  },
  {
    nome: "Jane Doe",
    usuario: "JS",
    data: "01/10/2023, 11:20",
    status: "Ativo",
  },
  {
    nome: "Pedro Cabral",
    usuario: "PedroC",
    data: "01/10/2023, 11:20",
    status: "Ativo",
  },
  {
    nome: "João Lopes",
    usuario: "JLopes",
    data: "01/10/2023, 11:20",
    status: "Ativo",
  },
  {
    nome: "Pedro Paulo",
    usuario: "Pedro",
    data: "01/10/2023, 11:20",
    status: "Ativo",
  },
];

const UsuariosPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen p-6 font-mono bg-white">
      {/* Botão voltar */}
      <div className="flex justify-end mb-2">
        <button onClick={() => navigate("/home")}>
          <ArrowLeft size={24} />
        </button>
      </div>

      {/* Cabeçalho */}
      <div className="mb-4">
        <h1 className="text-lg font-semibold">Gerenciamento de Usuários</h1>
        <p className="text-sm text-gray-600">
          Acesse uma visão detalhada das principais métricas e privilégios dos
          usuários.
        </p>
      </div>

      {/* Botões topo */}
      <div className="flex justify-end space-x-2 mb-4">
        <button className="w-[119px] h-[40px] bg-white shadow border border-gray-300 rounded flex items-center justify-center gap-1 text-sm">
          <Printer size={16} /> Gerar
        </button>
        <button className="w-[119px] h-[40px] bg-white shadow border border-gray-300 rounded flex items-center justify-center gap-1 text-sm">
          <Filter size={16} /> Filtrar
        </button>
        <button className="w-[119px] h-[40px] bg-[#00C27C] text-white shadow rounded flex items-center justify-center gap-1 text-sm">
          <Plus size={16} /> Novo
        </button>
      </div>

      {/* Tabela */}
      <div className="border border-gray-300 rounded">
        <div className="grid grid-cols-5 bg-[#D9D9D9] text-sm font-bold px-4 py-2">
          <div>NOME</div>
          <div>USUÁRIO</div>
          <div>DATA DE CRIAÇÃO</div>
          <div>STATUS</div>
          <div>AÇÕES</div>
        </div>

        {mockUsuarios.map((user, index) => (
          <div
            key={index}
            className="grid grid-cols-5 px-4 py-2 text-sm border-t border-gray-200 items-center"
          >
            <div>{user.nome}</div>
            <div>{user.usuario}</div>
            <div>{user.data}</div>
            <div>{user.status}</div>
            <div>
              <button>
                <Pencil size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsuariosPage;
