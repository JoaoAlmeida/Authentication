import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent class="ion-padding" fullscreen>
               
        <IonButton color="primary" routerLink="/login"> Login</IonButton>
        <IonButton color="secondary" routerLink="/register"> Registro</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
