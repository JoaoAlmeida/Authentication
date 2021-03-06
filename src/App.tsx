import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonSpinner } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

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

/* Theme variables */
import './theme/variables.css';

import { useEffect, useState } from 'react';
import {getCurrentUser} from './pages/FirebaseServices'
import Dashboard from './pages/Dashboard';

const RoutingSystem: React.FC = () =>{
  return(
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />    
        <Route exact path="/dashboard" component={Dashboard} /> 
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  )
}

const App: React.FC = () => {
  
  const [busy, setBusy] = useState<boolean>(true)
  
  /*Executado a primeira vez que o app é carregado */
  useEffect(() =>{
    
    getCurrentUser().then(user => {
      if(user){
        //usuário logado        
        window.history.replaceState({}, '', '/dashboard')
      }else{
        window.history.replaceState({}, '', '/')
      }
      setBusy(false)
    })    
  },[])
   
  return <IonApp> {busy ? <IonSpinner/>  : <RoutingSystem/>} </IonApp>
}

export default App;
