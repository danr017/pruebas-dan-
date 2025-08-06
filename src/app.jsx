import React, { useState } from "react";
import Login from "./components/login.jsx";
import Wallet from "./components/wallet.jsx";

function App() {
  const [user, setUser] = useState(null);

  // Usuarios válidos para login simulado
  const users = [
    { username: "fabricio172", password: "Facribicio13425786." },
    { username: "joalprocrypto331", password: "Homercrazy43131#" }
  ];

  function handleLogin(username, password) {
    const found = users.find(
      (u) => u.username === username && u.password === password
    );
    if (found) {
      setUser({ username });
      return true;
    }
    return false;
  }

  function handleLogout() {
    setUser(null);
  }

  return (
    <div>
      {!user ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Wallet user={user} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;