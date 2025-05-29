
import styles from "./EventsPage.module.css";

import EventCard from "../../components/EventCard/EventCard"; // ajuste o caminho se necessário
import NavBarComponent from "../../components/NavBar/NavBarComponent";

const EventsPage = () => {
 
  const handleSubscribe = () => {
    alert("Inscrição feita com sucesso!");
  };

  return (
    <>
      <NavBarComponent />
      <div className={styles.container}>
        <div>
          <h1 className={styles.title}>Eventos</h1>
          <div className={styles.cardsContainer}>
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
    </>
  );
};

export default EventsPage;
