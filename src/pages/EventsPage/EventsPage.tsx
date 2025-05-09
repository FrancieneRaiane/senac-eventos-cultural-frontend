import React from "react";
import styles from "./EventsPage.module.css";
import Header from "../../components/HeaderComponent/HeaderComponent";
import EventCard from "../../components/EventCard/EventCard"; // ajuste o caminho se necessário

const EventsPage = () => {
  const handleEventClick = () => {};
  const handleMyEventClick = () => {};
  const handleSubscribe = () => {
    alert("Inscrição feita com sucesso!");
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
          <EventCard
            title="Feira de Artes"
            location="Auditório SENAC"
            imageSrc="#"
            onSubscribe={handleSubscribe}
          />
          <EventCard
            title="Palestra de Tecnologia"
            location="Sala 204"
            imageSrc="#"
            onSubscribe={handleSubscribe}
          />
          <EventCard
            title="Oficina de Teatro"
            location="Teatro SENAC"
            imageSrc="#"
            onSubscribe={handleSubscribe}
          />
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
