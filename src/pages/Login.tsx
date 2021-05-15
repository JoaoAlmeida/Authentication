import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonInput, IonLoading, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { setUserDate, setUserState } from "../reducers/actions"
import { loginUser } from "./FirebaseServices"
import { toast } from "./Toast"

/* A ! em e.detail.value informa que o valor não pode ser nulo */
const Login: React.FC = () => {

    const [busy, setBusy] = useState<boolean>(false)

    /*useState é um hook que retorna o state value e uma função para atualizar este valor.
     Neste caso, estamos iniciando a variável com um valor em branco */
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    //Dispatch modifica a árvore de estados da aplicação
    const dispatch = useDispatch()
    
    /* substitua pelo metodo do Firebase */ 
    async function login() {
       
        setBusy(true)    
        console.log(username, password)        
        
        const res = await loginUser(username,password)            
        console.log("Res: ", res.type)
        if(res.type){            
            console.log("email: ", res.email)
            dispatch(setUserState(res.email))  
            dispatch(setUserDate(Date().toLocaleString()))                                     
            toast("Você logou com sucesso")
        }
        window.location.href = "./dashboard"            
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
                        Login
                    </IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonLoading message="Aguarde..." isOpen={busy} duration={0} />

            <IonContent className="ion-padding">
                <IonInput placeholder="Digite o nome do usuário" onIonChange={e => setUsername(e.detail.value!)} />
                <IonInput type="password" placeholder="Digite a senha" onIonChange={e => setPassword(e.detail.value!)} />

                <IonButton color="primary" onClick={login}> Login</IonButton>

                <p>
                    Novo por aqui? <Link to="./register"> Registrar</Link>
                </p>
            </IonContent>
        </IonPage>
    )
}

export default Login