import React, { useEffect, useState } from "react";

// Criptos principales a mostrar
const SYMBOLS = [
  { id: "bitcoin", name: "Bitcoin", symbol: "BTC" },
  { id: "ethereum", name: "Ethereum", symbol: "ETH" },
  { id: "tether", name: "Tether", symbol: "USDT" },
  { id: "binancecoin", name: "BNB", symbol: "BNB" },
  { id: "solana", name: "Solana", symbol: "SOL" }
];

export default function Cotizaciones() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  // Función para pedir los precios a CoinGecko
  const fetchPrices = () => {
    fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${SYMBOLS.map(
        s => s.id
      ).join(",")}&vs_currencies=usd`
    )
      .then(res => res.json())
      .then(resp => {
        setData(resp);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchPrices(); // Carga inicial
    const interval = setInterval(fetchPrices, 10000); // Cada 10 segundos
    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, []);

  return (
    <div>
      <h3 style={{ margin: "8px 0 16px" }}>Precios en tiempo real (CoinGecko)</h3>
      {loading ? (
        <div>Cargando cotizaciones...</div>
      ) : (
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th style={{ textAlign: "left" }}>Cripto</th>
              <th style={{ textAlign: "right" }}>Precio (USD)</th>
            </tr>
          </thead>
          <tbody>
            {SYMBOLS.map(c => (
              <tr key={c.id}>
                <td>{c.name} <span style={{ color: "#888" }}>({c.symbol})</span></td>
                <td style={{ textAlign: "right" }}>
                  {data[c.id]?.usd ? "$" + data[c.id].usd.toLocaleString() : "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div style={{ marginTop: 10, fontSize: 12, color: "#888" }}>
        *Actualizado cada 10 segundos
      </div>
    </div>
  );
}