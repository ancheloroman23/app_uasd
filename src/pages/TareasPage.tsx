import { useState, useEffect } from 'react';
import axios from 'axios';
import { IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonLabel } from '@ionic/react';
import BackHome from '../components/BackHome';

interface Tarea {
  id: number;
  usuarioId: number;
  titulo: string;
  fechaVencimiento: string;
  completada: boolean;
}

const TareasPage: React.FC = () => {
  const [tareas, setTareas] = useState<Tarea[]>([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    axios
      .get('https://uasdapi.ia3x.com/tareas', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {setTareas(response.data)

        console.log(tareas)
      })
      .catch((error) => console.log(error));
  }, [token]);

  const abrirAulaVirtual = (enlace: string) => {
    window.open(enlace, '_blank');
  };

  return (
    <IonPage>
      <BackHome/>
      <IonContent>
        {tareas.length > 0 ? (
          tareas.map((tarea) => (
            <IonCard key={tarea.id}>
              <IonCardHeader>
                <IonCardTitle>{tarea.titulo}</IonCardTitle>
                <IonCardSubtitle>
                  Fecha límite: {new Date(tarea.fechaVencimiento).toLocaleDateString()}
                </IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>
                <p><strong>Estado:</strong> {tarea.completada ? 'Completada' : 'Pendiente'}</p>
                {!tarea.completada && (
                  <IonButton expand="full" onClick={() => abrirAulaVirtual('https://aula.virtual/')}>
                    Ir al aula virtual
                  </IonButton>
                )}
              </IonCardContent>
            </IonCard>
          ))
        ) : (
          <IonLabel>No tienes tareas pendientes.</IonLabel>
        )}
      </IonContent>
    </IonPage>
  );
};

export default TareasPage;
