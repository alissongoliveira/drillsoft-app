import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function ModalSolicitacaoComplemento({ balanca, onClose }) {
  const [placa, setPlaca] = useState("");
  const [tara, setTara] = useState("");
  const [liquido, setLiquido] = useState("");
  const [bruto, setBruto] = useState("");

  // Atualiza bruto automaticamente
  useEffect(() => {
    const t = parseFloat(tara) || 0;
    const l = parseFloat(liquido) || 0;
    setBruto(t + l);
  }, [tara, liquido]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-[500px] rounded shadow-lg font-mono">
        {/* Cabeçalho */}
        <div className="bg-gray-200 px-6 py-4 flex justify-between items-center rounded-t">
          <h2 className="text-lg font-semibold">Solicitação de Complemento</h2>
          <button onClick={onClose}>
            <X className="text-gray-700 hover:text-black" />
          </button>
        </div>

        {/* Conteúdo */}
        <div className="p-6">
          <h3 className="text-center text-lg font-bold mb-6">{balanca}</h3>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <input
              type="text"
              placeholder="Placa"
              value={placa}
              onChange={(e) => setPlaca(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 text-sm"
            />

            <input
              type="text"
              placeholder="Bruto"
              value={bruto}
              readOnly
              className="border border-gray-300 bg-gray-100 rounded px-3 py-2 text-sm text-gray-600"
            />

            <input
              type="number"
              placeholder="Tara"
              value={tara}
              onChange={(e) => setTara(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 text-sm"
            />

            <button
              className="col-span-1 bg-white shadow rounded px-3 py-2 text-sm font-semibold"
              onClick={() => {
                // ação temporária
                alert("Solicitação enviada!");
                onClose();
              }}
            >
              Enviar Solicitação
            </button>

            <input
              type="number"
              placeholder="Líquido"
              value={liquido}
              onChange={(e) => setLiquido(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 text-sm col-span-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
