import { useState } from "react";
import { Settings, Eye, ArrowLeft } from "lucide-react";

export default function BalancaPage() {
  const [statusB1, setStatusB1] = useState(true);
  const [statusB2, setStatusB2] = useState(false);

  return (
    <div className="p-6 font-mono min-h-screen">
      {/* Cabeçalho */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-xl font-bold">Balanças</h1>
          <p className="text-sm text-gray-600">
            Monitore os pesos em tempo real e envie solicitações de complementos
            aos operadores.
          </p>
        </div>
        <button className="w-[40px] h-[40px] rounded-full shadow flex items-center justify-center">
          <ArrowLeft size={20} />
        </button>
      </div>

      {/* Botão Visualizar alinhado com Balança 02 */}
      <div className="flex justify-end mb-2 pr-[82px]">
        <button className="w-[119px] h-[40px] flex items-center justify-center gap-2 rounded shadow text-sm bg-white">
          <Eye size={16} />
          Visualizar
        </button>
      </div>

      {/* Cards das Balanças */}
      <div className="flex flex-wrap justify-center gap-8">
        {[1, 2].map((id) => {
          const isOnline = id === 1 ? statusB1 : statusB2;
          const toggleStatus = () =>
            id === 1 ? setStatusB1(!statusB1) : setStatusB2(!statusB2);

          return (
            <div
              key={id}
              className="w-[650px] h-[400px] border rounded shadow p-4 flex flex-col justify-between items-center relative"
            >
              {/* Linha superior: status e engrenagem */}
              <div className="w-full flex justify-between items-center">
                <button
                  onClick={toggleStatus}
                  className={`w-[119px] h-[40px] flex items-center justify-center gap-2 rounded shadow text-sm ${
                    isOnline
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  <span
                    className={`w-3 h-3 rounded-full ${
                      isOnline ? "bg-green-600" : "bg-red-600"
                    }`}
                  />
                  {isOnline ? "Online" : "Offline"}
                </button>
                <Settings size={20} className="text-gray-600" />
              </div>

              {/* Título da Balança */}
              <h2 className="text-lg font-semibold mt-2">BALANÇA 0{id}</h2>

              {/* Peso */}
              <div className="text-7xl font-bold">
                {id === 1 ? "26000" : "0"}
              </div>

              {/* Botão Solicitar Complemento */}
              <button className="w-[223px] h-[30px] mt-4 bg-white border border-gray-300 shadow rounded text-sm">
                Solicitar Complemento
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
