import React from 'react';
import styles from './EventsPage.module.css';

const EventsPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>SENAC</div>
        <div className={styles.headerButtons}>
          <button className={styles.button}>Eventos</button>
          <button className={styles.button}>Meus Eventos</button>
        </div>
      </header>

      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <img src="#" alt="Imagem do evento" />
          <h3>Título do Evento</h3>
          <p>Localização do evento</p>
          <button className={styles.cardButton}>Inscrever-se</button>
          <a href="#" className={styles.cardLink}>Contactar o organizador</a>
        </div>

        <div className={styles.card}>
          <img src="#" alt="Imagem do evento" />
          <h3>Título do Evento</h3>
          <p>Localização do evento</p>
          <button className={styles.cardButton}>Inscrever-se</button>
          <a href="#" className={styles.cardLink}>Contactar o organizador</a>
        </div>

        <div className={styles.card}>
          <img src="#" alt="Imagem do evento" />
          <h3>Título do Evento</h3>
          <p>Localização do evento</p>
          <button className={styles.cardButton}>Inscrever-se</button>
          <a href="#" className={styles.cardLink}>Contactar o organizador</a>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
