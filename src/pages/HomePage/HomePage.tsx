import React, { useEffect, useState } from "react";
import styles from "./HomePage.module.css";
import NavBarComponent from "../../components/NavBar/NavBarComponent";

//tipagem dos dados da interface
interface Event {
  id: number;
  title: string;
  description: string;
  location: string;
  bannerUrl: string;
  price: number;
  organizerId: number;
  createdAt: string; //data
}

function HomePage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [subscribing, setSubscribing] = useState<number | null>(null);
  const [subscribedIds, setSubscribedIds] = useState<Set<number>>(new Set());

  const baseUrl =
    "https://senac-eventos-cultural-backend-production.up.railway.app";

  //chamada da Api
  useEffect(() => {
    const fetchEvents = async () => {
      //pegando o token no localStore para enviar para Api
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Usuário não autenticado.");
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(
          "https://senac-eventos-cultural-backend-production.up.railway.app/events",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.message || `Erro ${res.status}`);
        }
        const data: Event[] = await res.json();
        setEvents(data);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : String(err));
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);
  ////////

  const handleSubscribe = async (eventId: number) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Você precisa estar autenticado.");
      return;
    }
    setSubscribing(eventId);
    try {
      const res = await fetch(`${baseUrl}/events/${eventId}/subscribe`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || `Erro ${res.status}`);
      }
      // marca como inscrito
      setSubscribedIds((prev) => new Set(prev).add(eventId));
      alert("Inscrito com sucesso!");
    } catch (err: unknown) {
      if (err instanceof Error) {
        alert(err.message || "Erro ao inscrever-se");
      } else {
        alert("Erro ao inscrever-se");
      }
    } finally {
      setSubscribing(null);
    }
  };

  ////
  if (loading) return <div className={styles.loading}>Carregando eventos…</div>;
  if (error)
    return (
      <div className={styles.container}>
        <div className={styles.error}>{error}</div>
      </div>
    );

  return (
    <>
      <NavBarComponent />
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>Eventos Cadastrados</h1>

        {events.length === 0 ? (
          <p>Nenhum evento encontrado.</p>
        ) : (
          <div className={styles.grid}>
            {events.map((evt) => (
              <div key={evt.id} className={styles.card}>
                <img
                  src={evt.bannerUrl}
                  alt={`Banner de ${evt.title}`}
                  className={styles.banner}
                />
                <div className={styles.info}>
                  <h2 className={styles.title}>{evt.title}</h2>
                  <p className={styles.location}>{evt.location}</p>
                  <p className={styles.description}>{evt.description}</p>
                  <p className={styles.price}>
                    {evt.price > 0 ? `R$ ${evt.price.toFixed(2)}` : "Gratuito"}
                  </p>

                  <button
                    className={styles.subscribeButton}
                    onClick={() => handleSubscribe(evt.id)}
                    disabled={
                      subscribing === evt.id || subscribedIds.has(evt.id)
                    }
                  >
                    {subscribedIds.has(evt.id)
                      ? "Inscrito"
                      : subscribing === evt.id
                      ? "Inscrevendo..."
                      : "Inscrever-se"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
export default HomePage;
