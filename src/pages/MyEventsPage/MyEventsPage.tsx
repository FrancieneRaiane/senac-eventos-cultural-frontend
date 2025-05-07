import React from "react";
import styles from "./MyEventsPage.module.css";

const MyEventsPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div><h2>SENAC Eventos culturais</h2></div>
        <div className={styles.headerButtons}>
          <button className={styles.button}>Eventos</button>
          <button className={styles.button}>Meus Eventos</button>
        </div>
      </header>

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
