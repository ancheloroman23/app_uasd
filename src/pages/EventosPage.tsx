import { useState, useEffect } from 'react';
import axios from 'axios';
import { IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton } from '@ionic/react';
import BackHome from '../components/BackHome';

interface Evento {
  id: number;
  titulo: string;
  descripcion: string;
  fechaEvento: string;
  lugar: string;
  coordenadas: string;
}

const EventosPage: React.FC = () => {
  const [eventos, setEventos] = useState<Evento[]>([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    axios
      .get('https://uasdapi.ia3x.com/eventos', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setEventos(response.data))
      .catch((error) => console.log(error));
  }, [token]);

  const abrirUbicacion = (coordenadas: string) => {
    const [lat, lon] = coordenadas.split(',');
    window.open(`https://www.google.com/maps?q=${lat},${lon}`, '_blank');
  };

  return (
    <IonPage>
      <BackHome/>
      <IonContent>
        {eventos.length > 0 ? (
          eventos.map((evento) => (
            <IonCard key={evento.id}>
              <IonCardHeader>
                <IonCardTitle>{evento.titulo}</IonCardTitle>
                <IonCardSubtitle>{evento.lugar}</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>
                <p>{evento.descripcion}</p>
                <p><strong>Fecha:</strong> {new Date(evento.fechaEvento).toLocaleDateString()}</p>
                <IonButton expand="full" onClick={() => abrirUbicacion(evento.coordenadas)}>
                  Ver ubicación en Google Maps
                </IonButton>
              </IonCardContent>
            </IonCard>
          ))
        ) : (
          <p>No hay eventos disponibles.</p>
        )}
      </IonContent>
    </IonPage>
  );
};

export default EventosPage;
