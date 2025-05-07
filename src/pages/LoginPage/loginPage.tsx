// Importa o React e o hook useState para controlar estados locais do componente
import React, { useState } from 'react';

// Importa os estilos CSS do módulo (CSS Modules)
import styles from './LoginPage.module.css';

// Define o componente funcional usando a tipagem React.FC (Function Component)
const LoginPage: React.FC = () => {
  // Cria dois estados locais: email e password, ambos iniciando como strings vazias
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // Função executada quando o formulário é enviado (submit)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Evita o recarregamento da página

    // Aqui você pode integrar com um sistema de login, API ou serviço externo
    console.log('Email:', email);
    console.log('Senha:', password);
  };

  return (
    // Container geral com estilização centralizada
    <div className={styles.container}>
    {/* NOVO HEADER ADICIONADO */}
    <header className={styles.header}>
      <h2 className={styles.brand}>Senac Eventos Cultural</h2>
      <button className={styles.loginButton}>Login</button>
    </header>

    <h1 className={styles.title}>Página de Login</h1>


      {/* Formulário com função de envio vinculada ao handleSubmit */}
      <form className={styles.form} onSubmit={handleSubmit}>
        {/* Grupo de campos para o email */}
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"           // Tipo do input: email
            id="email"             // ID do input, usado pelo label com htmlFor
            name="email"           // Nome do input
            required               // Campo obrigatório
            className={styles.input} // Classe de estilo
            value={email}             // Valor atual do estado email
            onChange={(e) => setEmail(e.target.value)} // Atualiza o estado ao digitar
          />
        </div>

        {/* Grupo de campos para a senha */}
        <div className={styles.formGroup}>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"        // Tipo do input: senha (oculta os caracteres)
            id="password"
            name="password"
            required
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Atualiza o estado da senha
          />
        </div>

        {/* Botão de envio do formulário */}
        <button type="submit" className={styles.button}>Entrar</button>
      </form>
        <p className={styles.registerText}>
            Não tem uma conta? <a href="/register" className={styles.link}>Registre-se.</a>
        </p>
    </div>
    
  );

};

// Exporta o componente para ser usado em outros arquivos
export default LoginPage;
