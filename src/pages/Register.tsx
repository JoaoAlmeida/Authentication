import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonInput, IonLoading, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import { registerUser } from "./FirebaseServices"
import { toast } from "./Toast"

const Register: React.FC = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCPassword] = useState('')

    const [busy, setBusy] = useState<boolean>(false)

    async function register() {
        
        setBusy(true)  

        console.log(username, password, cpassword)

        if (password != cpassword) {
            toast("As senhas não coincidem")
        }

        const res = await registerUser(username, password)

        if (res) {
            toast("Usuário criado com sucesso")
        }

        setBusy(false)  
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/home" />
                    </IonButtons>
                    <IonTitle slot="end">
                        Tela de Registro
                    </IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonLoading message="Aguarde..." isOpen={busy} duration={0} />
            
            <IonContent className="ion-padding" >

                <IonInput placeholder="Usuário" onIonChange={e => setUsername(e.detail.value!)} />
                <IonInput type="password" placeholder="Senha" onIonChange={e => setPassword(e.detail.value!)} />
                <IonInput type="password" placeholder="Confirme a senha" onIonChange={e => setCPassword(e.detail.value!)} />

                <IonButton color="secondary" onClick={register}> Registrar</IonButton>
                
                <p>
                    Já possui uma conta? <Link to="./login"> Login</Link>
                </p>

            </IonContent>
        </IonPage>

    )
}

export default Register