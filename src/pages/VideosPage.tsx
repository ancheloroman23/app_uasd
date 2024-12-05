import { useState, useEffect } from 'react';
import axios from 'axios';
import { IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';
import BackHome from '../components/BackHome';

interface Video {
  id: number;
  titulo: string;
  url: string;
  fechaPublicacion: string;
}

const VideosPage: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    
    if (token) {
      axios
        .get('https://uasdapi.ia3x.com/videos', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log('Datos de videos:', response.data);
          setVideos(response.data);
        })
        .catch((error) => {
          if (error.response && error.response.status === 401) {
            console.log('No autorizado. Token inválido o expirado.');
          } else {
            console.log('Error al obtener los videos:', error);
          }
        });
    } else {
      console.log('No hay token disponible en localStorage');
    }
  }, []);

  return (
    <IonPage>
      <BackHome />
      <IonContent>
        <h1 style={{ padding: '1rem', textAlign: 'center' }}>Videos</h1>
        {videos && videos.length > 0 ? (
          videos.map((video) => (
            <IonCard key={video.id}>
              <IonCardHeader>
                <IonCardTitle>{video.titulo}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <iframe
                  src={`https://www.youtube.com/embed/${video.url}`}
                  width="100%"
                  height="315"
                  style={{ border: 'none' }}
                  allowFullScreen
                ></iframe>
                <p style={{ marginTop: '1rem' }}>Publicado el: {new Date(video.fechaPublicacion).toLocaleDateString()}</p>
              </IonCardContent>
            </IonCard>
          ))
        ) : (
          <p style={{ padding: '1rem', textAlign: 'center' }}>No hay videos disponibles.</p>
        )}
      </IonContent>
    </IonPage>
  );
};

export default VideosPage;
