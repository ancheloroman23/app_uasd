import { EventHandler, FormEvent, useState } from "react";
import axios from "axios";
import {
  IonPage,
  IonContent,
  IonInput,
  IonButton,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
} from "@ionic/react";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      alert("El usuario o contraseña no pueden estar vacíos");
      return;
    }

    axios
      .post("https://uasdapi.ia3x.com/login", { username, password })
      .then((response) => {
        const authToken = response.data.data?.authToken;
        if (authToken) {
          localStorage.setItem("token", authToken);
          console.log(localStorage.getItem("token"));
          console.log(username);
          window.location.href = "/home";
        } else {
          alert("Credenciales incorrectas");
        }
      })
      .catch(() => {
        alert("Credenciales incorrectas");
      });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Iniciar Sesión</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid className="ion-padding">
          <IonRow className="ion-justify-content-center">
            <IonCol size="12" size-md="6" size-lg="4">
              <IonCard>
                <IonCardContent>
                  <form onSubmit={handleLogin}>
                    <IonInput
                      value={username}
                      placeholder="Usuario"
                      onIonChange={(e) => setUsername(e.detail.value!)}
                      required
                      clearInput
                    />
                    <IonInput
                      type="password"
                      value={password}
                      placeholder="Contraseña"
                      onIonChange={(e) => setPassword(e.detail.value!)}
                      required
                      clearInput
                    />
                    <IonButton
                      expand="block"
                      type="submit"
                      color="primary"
                      className="ion-margin-top"
                    >
                      Ingresar
                    </IonButton>
                  </form>
                  <IonButton
                    expand="block"
                    color="secondary"
                    routerLink="/register"
                    className="ion-margin-top"
                  >
                    Registrarse
                  </IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
