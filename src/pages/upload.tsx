import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonNav, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import React, { useState } from "react"
import { signOff } from "./FirebaseServices"
import { auth } from '..'
import { useSelector } from "react-redux"
import { State } from "ionicons/dist/types/stencil-public-runtime"
import { Link } from "react-router-dom"
import { archive, ellipsisHorizontal, ellipsisVertical, heart, star, trash } from "ionicons/icons"

const Dashboard: React.FC = () => {

    const username = useSelector((state: any) => state.user.username)

    async function off() {
        signOff()
    }

    return (
        <IonPage>
        <IonHeader>
        <IonNav>
          <IonTitle>
            Ionic Crud example
          </IonTitle>
        </IonNav>
      </IonHeader>
       
      <IonContent>
      <IonList>
          <IonItem>
              <IonLabel floating> Message title :</IonLabel>
              <IonInput type="text" value=""></IonInput>
            </ion-item>            
            <ion-item>
              <ion-label floating>Message body :</ion-label>
              <ion-textarea   type="text" row="10"></ion-textarea>
            </ion-item>
            <ion-item>
                <button type="button" ion-button >Submit</button>
            </ion-item>
      </ion-list>
       
        <ion-card>
          <ion-card-header>
            Swipe item to the left to delete or edit
          </ion-card-header>
        </ion-card>
        <ion-list>
          <ion-item-sliding *ngFor="let message of messages">
            <ion-item>
              <h3>title: {{message.title}}</h3>
              <p>body: {{message.text}}</p>
            </ion-item>
            <ion-item-options>
              <button ion-button color="danger" (click)="deleteMessage(message.$key)">
              <ion-icon name="ios-trash"></ion-icon>
              delete
            </button>
            <button ion-button color="success" (click)="updateMessage(message)">
                <ion-icon name="ios-create"></ion-icon>
                edit
              </button>
            </ion-item-options>
          </ion-item-sliding>
        </ion-list>
       
      </ion-content>
      </IonPage>
    )
}

export default Dashboard