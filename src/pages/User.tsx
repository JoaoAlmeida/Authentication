import { IonAvatar, IonChip, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { pin, heart, closeCircle, close } from 'ionicons/icons';
import React from 'react';
import './Home.css';

const User: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Seja bem vindo Usuário</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent class="ion-padding" fullscreen>
        
        
        <IonGrid>
          <IonRow>            
              <IonCol size="3">
                <IonImg src={"./ima"} />
              </IonCol>            
          </IonRow>
        </IonGrid>
        
      </IonContent>
    </IonPage>
  );
};

export default User;
