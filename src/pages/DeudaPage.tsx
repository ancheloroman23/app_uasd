import { useState, useEffect } from 'react';
import axios from 'axios';
import { IonPage, IonContent, IonLabel, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/react';
import BackHome from '../components/BackHome';

interface Deuda {
  id: number;
  usuarioId: number;
  monto: number;
  pagada: boolean;
  fechaActualizacion: string;
}

const DeudaPage: React.FC = () => {
  const [deuda, setDeuda] = useState<Deuda[]>([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    axios
      .get('https://uasdapi.ia3x.com/deudas', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setDeuda(response.data);  
      })
      .catch((error) => console.log(error));
  }, [token]);

  const realizarPago = () => {
    window.open('https://portaldepago.com/uasd', '_blank');
  };

  return (
    <IonPage>
      <BackHome/>
      <IonContent>
        {deuda.length > 0 ? (
          deuda.map((item) => (
            <IonCard key={item.id}>
              <IonCardHeader>
                <IonCardTitle>Deuda ID: {item.id}</IonCardTitle>
                <IonCardSubtitle>
                  Fecha de Actualización: {new Date(item.fechaActualizacion).toLocaleDateString()}
                </IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>
                <p><strong>Monto:</strong> RD${item.monto.toFixed(2)}</p>
                <p><strong>Usuario ID:</strong> {item.usuarioId}</p>
                <p><strong>Estado:</strong> {item.pagada ? 'Pagada' : 'Pendiente'}</p>

                {!item.pagada && (
                  <IonButton expand="full" onClick={realizarPago}>
                    Pagar
                  </IonButton>
                )}
              </IonCardContent>
            </IonCard>
          ))
        ) : (
          <IonLabel>No tienes deudas pendientes.</IonLabel>
        )}
      </IonContent>
    </IonPage>
  );
};

export default DeudaPage;
