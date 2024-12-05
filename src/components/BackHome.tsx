import { IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { homeOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';

const BackHome: React.FC = () => {
  const history = useHistory();

  // Función para redirigir al Home
  const volverAlHome = () => {
    history.push('/home'); // Redirige a la página Home
  };

  return (
    <IonFab vertical="bottom" horizontal="end" slot="fixed">
      <IonFabButton onClick={volverAlHome}>
        <IonIcon icon={homeOutline} />
      </IonFabButton>
    </IonFab>
  );
};

export default BackHome;
