import React from "react";
import styles from "./MyEventsPage.module.css";
import Header from "../../components/HeaderComponent/HeaderComponent";

const MyEventsPage = () => {
  const handleEventClick =() =>{
    //logica pra eventos
  };
  const handleMyEventClick = () =>{
    //logica para meus eventos 
  };
  return (
    <div className={styles.container}>
      <Header 
        title="SENAC Eventos culturais" 
        onEventClick={handleEventClick} 
        onMyEventClick={handleMyEventClick} 
      />

      <h1 className={styles.title}>Meus Eventos</h1>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Nome do Evento</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Evento 1</td>
            <td>
              <a href="#" className={styles.link}>
                Visualizar Participantes
              </a>{" "}
              |
              <a href="#" className={styles.link}>
                Editar
              </a>{" "}
              |
              <a href="#" className={styles.link}>
                Partilhar
              </a>
            </td>
          </tr>
          <tr>
            <td>Evento 2</td>
            <td>
              <a href="#" className={styles.link}>
                Visualizar Participantes
              </a>{" "}
              |
              <a href="#" className={styles.link}>
                Editar
              </a>{" "}
              |
              <a href="#" className={styles.link}>
                Partilhar
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MyEventsPage;
