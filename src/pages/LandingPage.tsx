import { IonPage, IonContent, IonButton } from '@ionic/react';
import BackHome from '../components/BackHome';
import logoUASD from '../assets/210-2104810_logo-uasd-web-y-word-universidad-autonoma-de.png';

const LandingPage: React.FC = () => (
  <IonPage>
    <IonContent className="ion-padding">
      {/* Logo de la UASD */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <img 
          src={logoUASD} 
          alt="Logo de la UASD"
          style={{ maxWidth: '200px', height: 'auto' }}
        />
      </div>

      {/* Contenido principal */}
      <h1 style={{ textAlign: 'center' }}>Bienvenidos a la UASD</h1>
      <p style={{ textAlign: 'center' }}>Misión, Visión y Valores de la UASD</p>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <IonButton href="/login">Ingresar</IonButton>
      </div>
    </IonContent>
  </IonPage>
);

export default LandingPage;
