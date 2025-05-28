import React from "react";
import styles from "./HeaderComponent.module.css";

interface HeaderProps {
  title: string;
  onEventClick: () => void;
  onMyEventClick: () => void;
}

const Header: React.FC<HeaderProps> = ({
  title,
  onEventClick,
  onMyEventClick,
}) => {
  return (
    <header className={styles.header}>
      <div>
        <h2>{title}</h2>
      </div>
      <div className={styles.headerButtons}>
        <button className={styles.button} onClick={onEventClick}>
          Eventos
        </button>
        <button className={styles.button} onClick={onMyEventClick}>
          Meus Eventos
        </button>
      </div>
    </header>
  );
};

export default Header;
