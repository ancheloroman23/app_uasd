import { IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonImg, IonGrid, IonRow, IonCol } from '@ionic/react';
import chris from '../assets/Christopher.jpg';
import anchelo from '../assets/Anchelo.jpg';
import BackHome from '../components/BackHome';

const AcercaPage: React.FC = () => {
  const estudiantes = [
    {
      nombre: 'Anchelo',
      apellido: 'Roman',
      matricula: '2022-1069',
      frase: 'El éxito es la suma de pequeños esfuerzos repetidos día tras día.',
      foto: anchelo,
    },
    {
      nombre: 'Christopher',
      apellido: 'Mercado',
      matricula: '2022-1936',
      frase: 'El conocimiento es poder.',
      foto: chris,
    },
  ];

  return (
    <IonPage>
      <BackHome/>
      <IonContent>
        <IonGrid>
          <IonRow>
            {estudiantes.map((estudiante, index) => (
              <IonCol size="12" key={index}> 
                <IonCard style={{ width: '90%', margin: '0 auto' }}> 
                  <IonImg src={estudiante.foto} alt={`Foto de ${estudiante.nombre} ${estudiante.apellido}`} />
                  <IonCardHeader>
                    <IonCardTitle>{`${estudiante.nombre} ${estudiante.apellido}`}</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <p><strong>Matrícula:</strong> {estudiante.matricula}</p>
                    <p><em>"{estudiante.frase}"</em></p>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default AcercaPage;
