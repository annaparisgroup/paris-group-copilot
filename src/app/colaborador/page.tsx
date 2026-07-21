"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ColaboradorLoginPage() {
  const router = useRouter();
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // DEMONSTRAÇÃO: ainda não é login seguro de verdade.
    // A autenticação real (senha protegida, contas, sessão) é a decisão
    // técnica pendente do ToFiscal — entra numa próxima etapa.
    if (!usuario || !senha) {
      setErro("Preencha usuário e senha.");
      return;
    }
    setErro("");
    router.push("/tofiscal");
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.7rem 0.85rem",
    borderRadius: 10,
    border: "1px solid #2a2a3d",
    background: "#0e0e18",
    color: "#e8e8f0",
    marginBottom: "1rem",
    fontSize: "0.95rem",
    outline: "none",
  };

  return (
    <main
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0a0a12",
        fontFamily: "system-ui, sans-serif",
        padding: "1rem",
        overflow: "hidden",
      }}
    >
      {/* Fundo animado com profundidade (aproximação de "3D") */}
      <style>{`
        @keyframes flutua1 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(60px,-40px) scale(1.15); } }
        @keyframes flutua2 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-50px,50px) scale(1.1); } }
        @keyframes flutua3 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(40px,60px) scale(1.2); } }
        .blob { position: absolute; border-radius: 9999px; filter: blur(80px); opacity: 0.5; }
        .campo:focus { border-color: #6366f1 !important; box-shadow: 0 0 0 3px rgba(99,102,241,0.25); }
      `}</style>
      <div className="blob" style={{ width: 440, height: 440, background: "#4f46e5", top: "-90px", left: "-70px", animation: "flutua1 14s ease-in-out infinite" }} />
      <div className="blob" style={{ width: 380, height: 380, background: "#8b5cf6", bottom: "-110px", right: "-50px", animation: "flutua2 18s ease-in-out infinite" }} />
      <div className="blob" style={{ width: 320, height: 320, background: "#3b5bfd", top: "45%", left: "58%", animation: "flutua3 16s ease-in-out infinite" }} />

      <form
        onSubmit={handleSubmit}
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: 370,
          background: "rgba(18,18,28,0.85)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 18,
          padding: "2.25rem",
          boxShadow: "0 20px 60px rgba(0,0,0,0.55)",
        }}
      >
        {/* Arte da logo Paris Group (recriação vetorial do monograma PG) */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 22, justifyContent: "center" }}>
          <div
            style={{
              position: "relative",
              width: 56,
              height: 56,
              borderRadius: 14,
              padding: 2,
              background: "linear-gradient(135deg, #4f46e5, #9333ea)",
              boxShadow: "0 0 24px rgba(124,92,246,0.5)",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 12,
                background: "#0e0e18",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                fontSize: "1.35rem",
                color: "#fff",
                letterSpacing: "-0.04em",
              }}
            >
              PG
            </div>
          </div>
          <div style={{ lineHeight: 1.05 }}>
            <div style={{ fontSize: "0.95rem", fontWeight: 800, color: "#fff", letterSpacing: "0.02em" }}>PARIS</div>
            <div style={{ fontSize: "0.95rem", fontWeight: 800, color: "#8b5cf6", letterSpacing: "0.02em" }}>GROUP</div>
          </div>
        </div>

        <p
          style={{
            fontSize: "0.72rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#6d7cff",
            fontWeight: 600,
            marginBottom: 10,
            textAlign: "center",
          }}
        >
          Área do Colaborador
        </p>
        <h1 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#fff", marginBottom: 24, letterSpacing: "-0.02em", textAlign: "center" }}>
          ToFiscal
        </h1>

        <label style={{ display: "block", fontSize: "0.85rem", color: "#b4b4c4", marginBottom: 6 }}>
          Usuário
        </label>
        <input
          className="campo"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          placeholder="seu.usuario"
          style={inputStyle}
        />

        <label style={{ display: "block", fontSize: "0.85rem", color: "#b4b4c4", marginBottom: 6 }}>
          Senha
        </label>
        <input
          className="campo"
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="••••••••"
          style={inputStyle}
        />

        {erro && (
          <p style={{ color: "#f87171", fontSize: "0.85rem", marginBottom: "1rem" }}>{erro}</p>
        )}

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "0.8rem",
            borderRadius: 10,
            border: "none",
            background: "linear-gradient(90deg, #4f46e5 0%, #9333ea 100%)",
            color: "#fff",
            fontSize: "0.95rem",
            fontWeight: 700,
            cursor: "pointer",
            marginTop: 6,
            letterSpacing: "0.02em",
          }}
        >
          Entrar
        </button>
      </form>
    </main>
  );
}
