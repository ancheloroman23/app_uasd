import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/HomePage';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import NoticiasPage from './pages/NoticiasPage';
import TareasPage from './pages/TareasPage';
import VideosPage from './pages/VideosPage';
import HorariosPage from './pages/HorariosPage';
import DeudaPage from './pages/DeudaPage';
import AcercaPage from './pages/AcercaPage';
import EventosPage from './pages/EventosPage';
import PreseleccionPage from './pages/PreseleccionPage';
import SolicitudesPage from './pages/SolicitudesPage';
import HomePage from './pages/HomePage';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/landing">
          <LandingPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>

        <Route exact path="/register">
          <RegisterPage />
        </Route>

        <Route exact path="/home">
          <HomePage />
        </Route>

        <Route exact path="/noticias">
          <NoticiasPage />
        </Route>

        <Route exact path="/horarios">
          <HorariosPage />
        </Route>

        <Route exact path="/preseleccion">
          <PreseleccionPage />
        </Route>

        <Route exact path="/deuda">
          <DeudaPage />
        </Route>

        <Route exact path="/solicitudes">
          <SolicitudesPage />
        </Route>

        <Route exact path="/tareas">
          <TareasPage />
        </Route>

        <Route exact path="/eventos">
          <EventosPage />
        </Route>

        <Route exact path="/videos">
          <VideosPage />
        </Route>

        <Route exact path="/acerca">
          <AcercaPage />
        </Route>
        <Route exact path="/">
          <Redirect to="/landing" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
