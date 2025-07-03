import { useState } from "react";
import { Settings, Eye, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function BalancaPage() {
  const [statusB1, setStatusB1] = useState(true);
  const [statusB2, setStatusB2] = useState(false);
  const navigate = useNavigate();

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

        {/* Botão Voltar */}
        <button onClick={() => navigate("/home")}>
          <ArrowLeft size={24} className="text-black hover:text-gray-700" />
        </button>
      </div>

      {/* Botão Visualizar alinhado com a Balança 02 */}
      <div className="flex justify-end mb-2 pr-[82px]">
        <button className="w-[119px] h-[40px] flex items-center justify-center gap-2 rounded shadow text-sm bg-white">
          <Eye size={16} />
          Visualizar
        </button>
      </div>

      {/* Cards das Balanças */}
      <div className="flex flex-wrap justify-center gap-8">
        {/* Balança 01 */}
        <div className="w-[650px] h-[400px] bg-white rounded shadow p-4 relative flex flex-col justify-between items-center">
          {/* Status e Engrenagem */}
          <div className="w-full flex justify-between">
            <button
              onClick={() => setStatusB1(!statusB1)}
              className={`w-[119px] h-[40px] rounded shadow text-sm flex items-center justify-center gap-2 ${
                statusB1
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              <div
                className={`w-3 h-3 rounded-full ${
                  statusB1 ? "bg-green-600" : "bg-red-600"
                }`}
              />
              {statusB1 ? "Online" : "Offline"}
            </button>
            <Settings className="text-gray-600" />
          </div>

          {/* Nome e Peso */}
          <div className="flex flex-col items-center">
            <span className="font-bold text-lg mt-2">BALANÇA 01</span>
            <span className="text-[80px] font-bold leading-none mt-4">
              26000
            </span>
          </div>

          {/* Botão */}
          <button className="w-[223px] h-[30px] mt-4 bg-white rounded shadow text-sm">
            Solicitar Complemento
          </button>
        </div>

        {/* Balança 02 */}
        <div className="w-[650px] h-[400px] bg-white rounded shadow p-4 relative flex flex-col justify-between items-center">
          {/* Status e Engrenagem */}
          <div className="w-full flex justify-between">
            <button
              onClick={() => setStatusB2(!statusB2)}
              className={`w-[119px] h-[40px] rounded shadow text-sm flex items-center justify-center gap-2 ${
                statusB2
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              <div
                className={`w-3 h-3 rounded-full ${
                  statusB2 ? "bg-green-600" : "bg-red-600"
                }`}
              />
              {statusB2 ? "Online" : "Offline"}
            </button>
            <Settings className="text-gray-600" />
          </div>

          {/* Nome e Peso */}
          <div className="flex flex-col items-center">
            <span className="font-bold text-lg mt-2">BALANÇA 02</span>
            <span className="text-[80px] font-bold leading-none mt-4">0</span>
          </div>

          {/* Botão */}
          <button className="w-[223px] h-[30px] mt-4 bg-white rounded shadow text-sm">
            Solicitar Complemento
          </button>
        </div>
      </div>
    </div>
  );
}
