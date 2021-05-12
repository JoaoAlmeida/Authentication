import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import React from "react"
import { signOff } from "./FirebaseServices"
import { auth } from '..'
import { useSelector } from "react-redux"
import { State } from "ionicons/dist/types/stencil-public-runtime"
import { Link } from "react-router-dom"

const Dashboard: React.FC = () => {        
    
    const username = useSelector((state: any) => state.user.username)
    
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
                <p> Nome do usuário no Redux Store {username} </p>
                <br></br><br></br>
                <p> <Link to="./upload"> Página de upload </Link> </p>

                <IonButton color="primary" onClick={off}> Sign out</IonButton>
            </IonContent>

        </IonPage>
    )
}

export default Dashboard