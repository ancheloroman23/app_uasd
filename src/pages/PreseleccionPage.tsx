import { useState, useEffect } from 'react';
import axios from 'axios';
import { IonPage, IonContent, IonList, IonItem, IonLabel, IonButton, IonToast, IonLoading } from '@ionic/react';
import BackHome from '../components/BackHome';

interface Materia {
  codigo: string;
  nombre: string;
  horario: string;
  aula: string;
  ubicacion: string;
}

const PreseleccionPage: React.FC = () => {
  const [asignaturas, setAsignaturas] = useState<Materia[]>([]);
  const [seleccionada, setSeleccionada] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchAsignaturas = async () => {
      try {
        const response = await axios.get('https://uasdapi.ia3x.com/materias_disponibles', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setAsignaturas(response.data);
      } catch (error) {
        console.error('Error fetching subjects:', error);
      }
    };

    fetchAsignaturas();
  }, [token]);

  const seleccionarMateria = (codigo: string) => {
    setSeleccionada(codigo);
  };

  const confirmarPreseleccion = async () => {
    console.log(seleccionada);
    if (!seleccionada) {
      setToastMessage('Por favor, seleccione una asignatura.');
      return;
    }

    setIsSubmitting(true);
    try {
      await axios.post(
        'https://uasdapi.ia3x.com/preseleccionar_materia',
        JSON.stringify(seleccionada), 
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json', 
          },
        }
      );
      setToastMessage('Preselección confirmada con éxito');
    } catch (error) {
      console.error('Error during preselection:', error);
      setToastMessage('Error al confirmar la preselección');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <IonPage>
      <BackHome/>
      <IonContent>
        <IonList>
          {asignaturas.map((asignatura) => (
            <IonItem
              key={asignatura.codigo}
              button
              onClick={() => seleccionarMateria(asignatura.codigo)}
              color={seleccionada === asignatura.codigo ? 'success' : ''}
            >
              <IonLabel>
                <h2>{asignatura.nombre}</h2>
                <p>
                  {asignatura.horario} - Aula: {asignatura.aula} - Ubicación: {asignatura.ubicacion}
                </p>
              </IonLabel>
              {seleccionada === asignatura.codigo && <IonLabel slot="end">✔</IonLabel>}
            </IonItem>
          ))}
        </IonList>

        <IonButton
          expand="full"
          onClick={confirmarPreseleccion}
          disabled={isSubmitting || !seleccionada}
        >
          Confirmar Preselección
        </IonButton>

        <IonLoading isOpen={isSubmitting} message={'Confirmando preselección...'} />
        {toastMessage && (
          <IonToast
            isOpen={!!toastMessage}
            message={toastMessage}
            duration={2000}
            onDidDismiss={() => setToastMessage(null)}
          />
        )}
      </IonContent>
    </IonPage>
  );
};

export default PreseleccionPage;
