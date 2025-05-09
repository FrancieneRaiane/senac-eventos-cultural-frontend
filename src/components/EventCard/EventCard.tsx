import React from "react";
import styles from "./EventCard.module.css";

interface EventCardProps {
  title: string;
  location: string;
  imageSrc: string;
  onSubscribe?: () => void;
  organizerLink?: string;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  location,
  imageSrc,
  onSubscribe,
  organizerLink = "#",
}) => {
  return (
    <div className={styles.card}>
      <img src={imageSrc} alt={`Imagem do evento ${title}`} />
      <h3>{title}</h3>
      <p>{location}</p>
      <button className={styles.cardButton} onClick={onSubscribe}>
        Inscrever-se
      </button>
      <a href={organizerLink} className={styles.cardLink}>
        Contactar o organizador
      </a>
    </div>
  );
};

export default EventCard;
