import { resolve } from 'node:url'
import { auth } from '..'
import { toast } from './Toast'

export async function loginUser(username: string, password: string) {
    /*Aqui colocaremos o método do Firebase para autenticar o usuário. 
    Se o usuário existir, abrir uma página de usuário, caso contrário apresentar um erro */

    const email = `${username}@app.com`

    try {
        
        const res = await auth.signInWithEmailAndPassword(email, password).then(function () {
            console.log("redirect")
            window.location.href = "./home"
        })
        console.log(res)
        return true
    } catch (error) {
        console.log(error.message)
        toast(error.message, 10000)
        return false
    }
}

export async function registerUser(username: string, password: string) {

    const email = `${username}@app.com`

    try {
        const res = await auth.createUserWithEmailAndPassword(email, password)
        console.log(res)
        toast('Registrado realizado com sucesso', 10000)
        return true
    } catch (error) {
        console.log(error.message)
        toast(error.message, 10000)
        return false
    }
}

export function getCurrentUser() {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(function (user) {
            if (user) {
                resolve(user)
            } else {
                resolve(null)
            }
            unsubscribe()
        })
    })
}

export function signOff() {
    try {
        const res = auth.signOut().then(function () {
            console.log("signing off")
            window.location.href = "./home"
        })
        console.log(res)
        return true
    } catch (error) {
        console.log(error.message)
        toast(error.message, 10000)
        return false
    }
}