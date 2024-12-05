import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonList, IonItem, IonIcon } from "@ionic/react";
import {
  logOutOutline,
  newspaperOutline,
  calendarOutline,
  schoolOutline,
  walletOutline,
  listOutline,
  filmOutline,
  informationCircleOutline,
} from "ionicons/icons";

const HomePage: React.FC = () => {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Menú Principal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonItem button routerLink="/noticias">
            <IonIcon icon={newspaperOutline} slot="start" />
            Noticias
          </IonItem>
          <IonItem button routerLink="/horarios">
            <IonIcon icon={calendarOutline} slot="start" />
            Horarios
          </IonItem>
          <IonItem button routerLink="/preseleccion">
            <IonIcon icon={schoolOutline} slot="start" />
            Preselección
          </IonItem>
          <IonItem button routerLink="/deuda">
            <IonIcon icon={walletOutline} slot="start" />
            Deuda
          </IonItem>
          <IonItem button routerLink="/solicitudes">
            <IonIcon icon={listOutline} slot="start" />
            Solicitudes
          </IonItem>
          <IonItem button routerLink="/tareas">
            <IonIcon icon={listOutline} slot="start" />
            Mis Tareas
          </IonItem>
          <IonItem button routerLink="/eventos">
            <IonIcon icon={calendarOutline} slot="start" />
            Eventos
          </IonItem>
          <IonItem button routerLink="/videos">
            <IonIcon icon={filmOutline} slot="start" />
            Videos
          </IonItem>
          <IonItem button routerLink="/acerca">
            <IonIcon icon={informationCircleOutline} slot="start" />
            Acerca de
          </IonItem>
          <IonItem button onClick={logout}>
            <IonIcon icon={logOutOutline} slot="start" />
            Logout
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
