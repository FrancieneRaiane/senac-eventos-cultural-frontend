import React from "react";
import styles from "./EventsPage.module.css";
import Header from "../../components/HeaderComponent/HeaderComponent";

const EventsPage = () => {
  const handleEventClick = () =>{

  };
  const handleMyEventClick =() =>{

  };
  return (
    <div className={styles.container}>
       <Header 
        title="SENAC Eventos culturais" 
        onEventClick={handleEventClick} 
        onMyEventClick={handleMyEventClick} 
      />

      <div>
        <h1 className={styles.title}>Eventos</h1>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <img src="#" alt="Imagem do evento" />
            <h3>Título do Evento</h3>
            <p>Localização do evento</p>
            <button className={styles.cardButton}>Inscrever-se</button>
            <a href="#" className={styles.cardLink}>
              Contactar o organizador
            </a>
          </div>

          <div className={styles.card}>
            <img src="#" alt="Imagem do evento" />
            <h3>Título do Evento</h3>
            <p>Localização do evento</p>
            <button className={styles.cardButton}>Inscrever-se</button>
            <a href="#" className={styles.cardLink}>
              Contactar o organizador
            </a>
          </div>

          <div className={styles.card}>
            <img src="#" alt="Imagem do evento" />
            <h3>Título do Evento</h3>
            <p>Localização do evento</p>
            <button className={styles.cardButton}>Inscrever-se</button>
            <a href="#" className={styles.cardLink}>
              Contactar o organizador
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
