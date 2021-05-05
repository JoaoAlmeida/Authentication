import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import React from "react"
import { signOff } from "./FirebaseServices"
import { auth } from '..'

const Dashboard: React.FC = () => {        

    async function off() {
       signOff()       
    }
    
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/home" />
                    </IonButtons>
                    <IonTitle slot="end">
                        Dashboard
                    </IonTitle>
                </IonToolbar>
            </IonHeader>

            

            <IonContent className="ion-padding">
                <p>Olá Usuário {auth.currentUser?.email}</p>

                <IonButton color="primary" onClick={off}> Sign out</IonButton>
            </IonContent>

        </IonPage>
    )
}

export default Dashboard