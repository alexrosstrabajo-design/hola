import { useState, FormEvent } from "react";

type FormData = {
  email: string;
  password: string;
};

function App() {
  const [form, setForm] = useState<FormData>({
    email: "",
    password: "",
  });

  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setError("Todos los campos son obligatorios");
      return;
    }

    if (!form.email.includes("@")) {
      setError("Email inválido");
      return;
    }

    setError(null);
    console.log("Login data:", form);
  };

  return (
    <main style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.card}>
        <h1 style={styles.title}>Iniciar sesión</h1>

        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={form.email}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={handleChange}
          style={styles.input}
        />

        {error && <p style={styles.error}>{error}</p>}

        <button type="submit" style={styles.button}>
          Entrar
        </button>

        <p style={styles.footer}>
          ¿No tienes cuenta? <span style={styles.link}>Regístrate</span>
        </p>
      </form>
    </main>
  );
}

export default App;

// 🎨 White + Red theme
const styles: Record<string, React.CSSProperties> = {
  container: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f9fafb",
    fontFamily: "sans-serif",
  },
  card: {
    background: "#ffffff",
    padding: "2rem",
    borderRadius: "16px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "320px",
    borderTop: "4px solid #ef4444", // rojo acento
  },
  title: {
    textAlign: "center",
    color: "#111827",
  },
  input: {
    padding: "0.75rem",
    borderRadius: "8px",
    border: "1px solid #e5e7eb",
    outline: "none",
    transition: "0.2s",
  },
  button: {
    padding: "0.75rem",
    borderRadius: "8px",
    border: "none",
    background: "#ef4444", // rojo principal
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.2s",
  },
  error: {
    color: "#dc2626",
    fontSize: "0.9rem",
    textAlign: "center",
  },
  footer: {
    fontSize: "0.9rem",
    textAlign: "center",
    color: "#6b7280",
  },
  link: {
    color: "#ef4444",
    cursor: "pointer",
    fontWeight: 500,
  },
};