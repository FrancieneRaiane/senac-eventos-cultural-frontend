import React, { useState } from "react";
import styles from "./RegisterUserPage.module.css";
import Header from "../../components/HeaderComponent/HeaderComponent";

const RegisterUserPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("participante");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Usuário registrado:\nNome: ${name}\nEmail: ${email}\nTipo: ${type}`);
    setName("");
    setEmail("");
    setType("participante");
  };

  return (
    <div className={styles.container}>
      <Header
        title="SENAC Eventos culturais"
        onEventClick={() => {}}
        onMyEventClick={() => {}}
      />

      <div className={styles.formWrapper}>
        <h1 className={styles.title}>Registrar Usuário</h1>
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="type">Tipo:</label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
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
  );
};

export default RegisterUserPage;
