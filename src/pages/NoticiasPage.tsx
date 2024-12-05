import { useState, useEffect } from 'react';
import axios from 'axios';
import BackHome from '../components/BackHome';
import { IonPage, IonContent, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';

const NoticiasPage: React.FC = () => {
  const [noticias, setNoticias] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      setError('No hay token disponible. Por favor, inicie sesión.');
      return;
    }

    axios
      .get('https://uasdapi.ia3x.com/noticias', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.data.success) {
          setNoticias(response.data.data);
        } else {
          setError('Error al cargar las noticias: ' + response.data.message);
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          setError('No autorizado. Token inválido o expirado.');
        } else {
          setError('Error al obtener las noticias: ' + error.message);
        }
      });
  }, []);

  // Estilos en línea
  const styles = {
    container: {
      display: 'flex',
      flexWrap: 'wrap' as const,
      gap: '1rem',
      justifyContent: 'center',
      padding: '1rem',
    },
    card: {
      position: 'relative' as const,
      width: '100%',
      maxWidth: '400px',
      height: 'auto',
      borderRadius: '10px',
      overflow: 'hidden',
      border: '2px solid #007bff',
      boxShadow: '0 4px 10px rgba(0, 123, 255, 0.4)',
    },
    image: {
      width: '100%',
      height: '200px',
      objectFit: 'cover' as const,
    },
    content: {
      padding: '1rem',
      textAlign: 'center' as const,
      background: 'rgba(0, 0, 123, 0.8)',
      color: '#fff',
    },
    title: {
      fontSize: '1.2rem',
      fontWeight: 'bold' as const,
      color: '#f8f9fa',
      marginBottom: '0.5rem',
    },
    date: {
      fontSize: '0.9rem',
      marginBottom: '1rem',
      color: '#cce5ff',
    },
    button: {
      '--background': '#0056b3',
      '--color': '#fff',
      fontSize: '0.9rem',
      borderRadius: '5px',
      '--box-shadow': '0 2px 4px rgba(0, 123, 255, 0.5)',
    },
  };

  return (
    <IonPage>
      <BackHome />
      <IonContent>
        <h1 style={{ padding: '1rem', textAlign: 'center', color: '#007bff' }}>Noticias</h1>
        {error ? (
          <p style={{ padding: '1rem', textAlign: 'center', color: 'red' }}>{error}</p>
        ) : noticias && noticias.length > 0 ? (
          <div style={styles.container}>
            {noticias.map((noticia) => (
              <IonCard key={noticia.id} style={styles.card}>
                <img src={noticia.img} alt={noticia.title} style={styles.image} />
                <IonCardContent style={styles.content}>
                  <IonCardHeader>
                    <IonCardTitle style={styles.title}>{noticia.title}</IonCardTitle>
                  </IonCardHeader>
                  <p style={styles.date}>Fecha: {noticia.date}</p>
                  <IonButton
                    expand="block"
                    color="light"
                    href={noticia.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.button}
                  >
                    Leer más
                  </IonButton>
                </IonCardContent>
              </IonCard>
            ))}
          </div>
        ) : (
          <p style={{ padding: '1rem', textAlign: 'center' }}>No hay noticias disponibles.</p>
        )}
      </IonContent>
    </IonPage>
  );
};

export default NoticiasPage;
