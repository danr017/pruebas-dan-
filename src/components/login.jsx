import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const success = onLogin(username, password);
    if (!success) setError("Usuario o contraseña incorrectos.");
  }

  return (
    <div style={{ maxWidth: 300, margin: "80px auto", background: "#fff", padding: 24, borderRadius: 8, boxShadow: "0 2px 8px #0002" }}>
      <h2>Mini Wallet Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Usuario"
          value={username}
          autoFocus
          onChange={e => setUsername(e.target.value)}
          style={{ width: "100%", marginBottom: 12, padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
        />
        <input
          placeholder="Contraseña"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{ width: "100%", marginBottom: 12, padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
        />
        {error && <div style={{ color: "red", marginBottom: 8 }}>{error}</div>}
        <button
          type="submit"
          style={{ width: "100%", padding: 10, background: "#2986fa", color: "#fff", border: "none", borderRadius: 4, fontWeight: 600 }}
        >
          Ingresar
        </button>
      </form>
      <div style={{ marginTop: 16, fontSize: 12, color: "#555" }}>
        demo / demo <br />
        admin / admin123
      </div>
    </div>
  );
}