import React, { useState } from "react";

// Simula direcciones por moneda
const MONEDAS = [
  { symbol: "USDT", chain: "BNB Smart Chain(BEP20)", address: "0x35af0574fc5b036074b252ec6101934f5405ca80" },
  { symbol: "BTC", chain: "BNB Smart Chain(BEP20)", address: "0x35af0574fc5b036074b252ec6101934f5405ca80" },
  { symbol: "ETH", chain: "Ethereum(ERC20)", address: "0x35af0574fc5b036074b252ec6101934f5405ca80" },
  { symbol: "BNB", chain: "BNB Smart Chain(BEP20)", address: "0x35af0574fc5b036074b252ec6101934f5405ca80" },
  { symbol: "SOL", chain: "Solana(SOL)", address: "GVUG8eFoB9M3DcBh97yK5RaVWagy6bzWBbpzfeczv9XE" }
];

export default function DepositosRetiros() {
  const [selected, setSelected] = useState(MONEDAS[0]);
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(selected.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div>
      <h3 style={{ marginBottom: 12 }}>Depósitos y Retiros (DIRECTION)</h3>
      <div style={{ marginBottom: 16 }}>
        <label style={{ fontWeight: 500, marginRight: 10 }}>Moneda:</label>
        <select
          onChange={e => setSelected(MONEDAS.find(m => m.symbol === e.target.value))}
          value={selected.symbol}
          style={{ padding: 6, borderRadius: 4, border: "1px solid #ccc" }}
        >
          {MONEDAS.map(m => (
            <option key={m.symbol} value={m.symbol}>
              {m.symbol} ({m.chain})
            </option>
          ))}
        </select>
      </div>
      <div style={{ background: "#f5f6fa", padding: 16, borderRadius: 8, marginBottom: 16 }}>
        <div style={{ fontWeight: 600, fontSize: 15 }}>Dirección de depósito:</div>
        <div style={{ fontFamily: "monospace", wordBreak: "break-all", fontSize: 14, margin: "8px 0" }}>{selected.address}</div>
        <button onClick={handleCopy} style={{ padding: "6px 14px", background: "#2986fa", color: "#fff", border: "none", borderRadius: 4, fontWeight: 600, cursor: "pointer" }}>
          Copiar dirección
        </button>
        {copied && <span style={{ color: "#27ae60", marginLeft: 8 }}>¡Copiado!</span>}
      </div>
      <div style={{ marginBottom: 20, fontSize: 13, color: "#888" }}>
        Enviar cualquier otro activo puede provocar la pérdida irreversible de tus fondos.<br />
        Asegúrate de seleccionar la red correcta y usar la dirección adecuada.
      </div>
      <div>
        <button
          style={{ padding: "10px 18px", background: "#aaa", color: "#fff", border: "none", borderRadius: 4, fontWeight: 600, cursor: "not-allowed" }}
          disabled
          onClick={() => alert("Activos congelados(tiempo restante 8 años), pague las FEES para retirar.")}
        >
          Retirar fondos
        </button>
        <span style={{ marginLeft: 12, color: "#e67e22", fontSize: 14, fontWeight: 500 }}>
          Activos congelados, tiempo restante 8 años, pague las FEES para retirar.
        </span>
      </div>
    </div>
  );
}