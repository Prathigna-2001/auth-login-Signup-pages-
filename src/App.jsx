import React from "react";
import Auth from "./Auth.jsx";
import "./index.css";

function App() {
  return (
    <div className="app-root">
      <header className="page-header">
        <h1 className="title">Login/Sign Up Form</h1>
      </header>

      <main className="page-main">
        <Auth />
      </main>
    </div>
  );
}

export default App;