import React, { useState } from "react";

export default function Contacto() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // Aquí puedes integrar EmailJS real si lo deseas.
    setSent(true);
    setTimeout(() => setSent(false), 2500);
  }

  return (
    <div>
      <h3 style={{ marginBottom: 12 }}>Atención al Cliente (Simulado)</h3>
      <form onSubmit={handleSubmit} style={{ maxWidth: 350 }}>
        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          required
          style={{ width: "100%", marginBottom: 10, padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Tu email"
          required
          style={{ width: "100%", marginBottom: 10, padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
        />
        <textarea
          name="mensaje"
          placeholder="¿En qué podemos ayudarte?"
          required
          rows={3}
          style={{ width: "100%", marginBottom: 10, padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
        />
        <button
          type="submit"
          style={{ width: "100%", padding: 10, background: "#2986fa", color: "#fff", border: "none", borderRadius: 4, fontWeight: 600 }}
        >
          Enviar
        </button>
      </form>
      {sent && <div style={{ color: "#27ae60", marginTop: 10 }}>Mensaje enviado (ficticio).</div>}
      <div style={{ marginTop: 12, fontSize: 13, color: "#888" }}>
        Si deseas conectar con EmailJS, puedes hacerlo fácilmente desde el código.
      </div>
    </div>
  );
}