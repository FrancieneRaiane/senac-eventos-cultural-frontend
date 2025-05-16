import React, { useState, type FormEvent } from "react";
import styles from "./LoginPage.module.css";
import Header from "../../components/HeaderComponent/HeaderComponent";


interface LoginProps{
  onLoginSuccess?: (token: string) => void;
}
                                                            // 
const LoginPage: React.FC<LoginProps> =({ onLoginSuccess})  => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null) ;// tipo string ou null e começa com null 
  
  const handleSubmit = async (e: FormEvent) =>{
    e.preventDefault();
    setError(null);
    try{
      //chamada da API
      const res = await fetch(
        "https://senac-eventos-cultural-backend-production.up.railway.app/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password}),
        }
      );
      // se vier res negativa
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "falha no login");
      }
      const data = await res.json();// dado enviado a api 
      onLoginSuccess?.(data.token);    //retorna um token
      alert("Login Efetuado"); 

    } catch (err: unknown){
      if (err instanceof Error){
        setError(err.message);
        alert(`Erro ao logar: ${err.message}`);
      }else{
        const errorMsg = String(err);
        setError(errorMsg);
        alert(`Erro ao logar: ${errorMsg}`);
      }

    }

  };


                                                   ///////////
  return (
    <div className={styles.container}>
    <Header 
        title="SENAC Eventos culturais" 
        onEventClick={() => {}}
        onMyEventClick={() => {}} 
      />

      <form className={styles.form} onSubmit={handleSubmit}>

        {error && <div>{error}</div>}

        <label htmlFor="email" className={styles.label}>
          Email
        </label>

        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          //os quatro acima devem ser obrigatorios por conta do banco de dados
          placeholder="Digite seu email"
          required
          className={styles.input}
        />

        <label htmlFor="senha" className={styles.label}>
          Senha
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
