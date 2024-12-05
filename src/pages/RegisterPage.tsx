import { FormEvent, useState } from "react";
import axios from "axios";
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonInput,
  IonButton,
} from "@ionic/react";

const RegisterPage: React.FC = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleRegister = (e: FormEvent) => {
    e.preventDefault();
    if (!nombre || !apellido || !username || !password || !email) {
      alert("Todos los campos son obligatorios");
      return;
    }

    const newUser = { nombre, apellido, username, password, email };
    axios
      .post("https://uasdapi.ia3x.com/crear_usuario", newUser)
      .then(() => {
        alert("Registro exitoso");
        window.location.href = "/login";
      })
      .catch(() => {
        alert("Error al registrar usuario");
      });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="tertiary">
          <IonTitle>Registro de Usuario</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid className="ion-padding">
          <IonRow className="ion-justify-content-center">
            <IonCol size="12" size-md="6" size-lg="4">
              <IonCard>
                <IonCardContent>
                  <form onSubmit={handleRegister}>
                    <IonInput
                      value={nombre}
                      placeholder="Nombre"
                      onIonChange={(e) => setNombre(e.detail.value!)}
                      required
                      clearInput
                    />
                    <IonInput
                      value={apellido}
                      placeholder="Apellido"
                      onIonChange={(e) => setApellido(e.detail.value!)}
                      required
                      clearInput
                    />
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
                    <IonInput
                      type="email"
                      value={email}
                      placeholder="Correo Electrónico"
                      onIonChange={(e) => setEmail(e.detail.value!)}
                      required
                      clearInput
                    />
                    <IonButton
                      expand="block"
                      type="submit"
                      color="primary"
                      className="ion-margin-top"
                    >
                      Registrar
                    </IonButton>
                  </form>
                  <IonButton
                    expand="block"
                    color="secondary"
                    routerLink="/login"
                    className="ion-margin-top"
                  >
                    back to Login
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

export default RegisterPage;
