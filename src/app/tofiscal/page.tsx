import Link from "next/link";

export default function ToFiscalPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "3rem 2rem",
        background: "#0a0a12",
        color: "#e8e8f0",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <p
        style={{
          fontSize: "0.72rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "#6d7cff",
          fontWeight: 600,
          marginBottom: 10,
        }}
      >
        Área do Colaborador
      </p>
      <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em" }}>
        Bem-vinda ao ToFiscal 👋
      </h1>
      <p style={{ color: "#9ca3af", marginTop: 12, maxWidth: 520, lineHeight: 1.6 }}>
        Você entrou na área do colaborador. Aqui ficariam os simuladores e as
        apurações. (Espaço reservado — a demonstração de login te trouxe até aqui.)
      </p>
      <p style={{ marginTop: 28 }}>
        <Link href="/colaborador" style={{ color: "#8b5cf6", fontWeight: 600 }}>
          ← Sair (voltar ao login)
        </Link>
      </p>
    </main>
  );
}
