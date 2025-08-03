import React from "react";

export default function Historial({ historial }) {
  return (
    <div>
      <h3 style={{ margin: "8px 0 16px" }}>Historial</h3>
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th style={{ textAlign: "left" }}>Fecha</th>
            <th style={{ textAlign: "left" }}>Tipo</th>
            <th style={{ textAlign: "right" }}>Monto</th>
            <th style={{ textAlign: "left" }}>Estado</th>
          </tr>
        </thead>
        <tbody>
          {historial.map((h, i) => (
            <tr key={i}>
              <td>{h.date}</td>
              <td>{h.type}</td>
              <td style={{ textAlign: "right" }}>
                {h.amount.toLocaleString()} {h.currency}
              </td>
              <td style={{ color: "#e67e22" }}>{h.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: 12, color: "#888", fontSize: 13 }}>
        Solo muestra depósitos simulados y activos congelados.
      </div>
    </div>
  );
}