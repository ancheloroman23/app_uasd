import { useState, useEffect } from 'react';
import axios from 'axios';
import { IonPage, IonContent, IonList, IonItem, IonLabel } from '@ionic/react';
import BackHome from '../components/BackHome';


interface Horario{
    materia:string;
    aula:string;
    hora: string;

}

const HorariosPage: React.FC = () => {
  const [horarios, setHorarios] = useState<Horario[] | null>([]);
  const token = localStorage.getItem('token')

  useEffect(() => {
    axios.get('https://uasdapi.ia3x.com/horarios', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => setHorarios(response.data))
      .catch(error => console.log(error));
  }, []);

  const abrirMapa = (aula: string) => {
    window.open(`https://maps.google.com/?q=${aula}`, '_blank');
  };

  return (
    <IonPage>
      <BackHome/>
      <IonContent>
        <IonList>
          {horarios && horarios.map((horario, index) => (
            <IonItem key={index} button onClick={() => abrirMapa(horario.aula)}>
              <IonLabel>
                <h2>{horario.materia}</h2>
                <h3>{horario.aula}</h3>
                <p>{horario.hora} - {horario.aula}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default HorariosPage;
