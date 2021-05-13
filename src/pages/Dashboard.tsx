import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import React from "react"
import { signOff } from "./FirebaseServices"
import { auth } from '..'
import { useSelector } from "react-redux"

const Dashboard: React.FC = () => {        
    
    const username = useSelector((state: any) => state.user.username)    
    const date = useSelector((state: any) => state.user.lastLogin) 
    
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
                
                <p> Nome do usuário no Redux Store {username}, data {date} </p>
                
                <IonButton color="primary" onClick={off}> Sign out</IonButton>
            </IonContent>

        </IonPage>
    )
}

export default Dashboard