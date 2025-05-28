import React from "react";
import styles from "./MyEventsPage.module.css";
import Header from "../../components/HeaderComponent/HeaderComponent";
import NavBarComponent from "../../components/NavBar/NavBarComponent";

const MyEventsPage = () => {
  const handleEventClick = () => {
    //logica pra eventos
  };
  const handleMyEventClick = () => {
    //logica para meus eventos 
  };
  return (
    <>
      <NavBarComponent />
      <div className={styles.container}>

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
    </>
  );
};

export default MyEventsPage;