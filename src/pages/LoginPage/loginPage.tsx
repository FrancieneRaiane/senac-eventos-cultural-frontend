import React from "react";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div><h2>SENAC Eventos culturais</h2></div>
        <button className={styles.loginButton}>Login</button>
      </header>

      <form className={styles.form}>
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Digite seu email"
          required
          className={styles.input}
        />

        <label htmlFor="senha" className={styles.label}>
          Senha
        </label>
        <input
          type="password"
          id="senha"
          placeholder="Digite sua senha"
          required
          className={styles.input}
        />

        <button type="submit" className={styles.submitButton}>
          Entrar
        </button>
        <p>
          Não tem uma conta? <a href="#">Registre-se</a>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
