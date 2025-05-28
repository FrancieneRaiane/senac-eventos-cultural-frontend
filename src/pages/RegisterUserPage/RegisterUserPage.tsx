import React, { useState, type FormEvent } from "react";
import styles from "./RegisterUserPage.module.css";
import NavBarComponent from "../../components/NavBar/NavBarComponent";

interface RegisterProps {
  onRegisterSuccess?: () => void;
}

const RegisterUserPage: React.FC<RegisterProps> = ({ onRegisterSuccess }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"PARTICIPANT" | "ORGANIZER">("PARTICIPANT");
  const [error, setError] = useState<string | null>(null);

  // onde trata os dados para envir para API
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); /// impedi que seja manupulado dados de outras funçoes
    setError(null);
    try {
      const res = await fetch(
        "https://senac-eventos-cultural-backend-production.up.railway.app/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password, role }),
        }
      );
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Falha no registro");
      }
      alert("Cadastro realizado com sucesso!");
      onRegisterSuccess?.();

      // onde muda para a pagina de login
      window.location.href = "/login";
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      setError(msg);
      alert(`Erro ao registrar: ${msg}`);
    }

    // alert(`Usuário registrado:\nNome: ${name}\nEmail: ${email}\nTipo: ${type}`);
    setName("");
    setEmail("");
    // setType("participante");
  };

  return (
    <div>
      <NavBarComponent />

      <div className={styles.container}>
        <div className={styles.formWrapper}>
          <h1 className={styles.title}>Registrar Usuário</h1>
          {error && <div className={styles.error}>{error}</div>}
          <form onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor="name">Nome:</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu email"
              required
            />

            <label htmlFor="Senha">Senha:</label>
            <input
              id="password"
              type="password"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite uma senha"
              required
            />

            <label htmlFor="type">Tipo:</label>
            <select
              id="type"
              //value={type}
              //  onChange={(e) => setType(e.target.value)}
              required
            >
              <option value="participante">Participante</option>
              <option value="organizador">Organizador</option>
            </select>

            <button type="submit" className={styles.submitButton}>
              Registrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterUserPage;
