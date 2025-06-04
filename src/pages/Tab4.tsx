import React from "react";
import { IonPage, IonHeader, IonToolbar, IonIcon, IonContent, IonImg, IonText } from "@ionic/react";
import Logo from "../imgs/icon.png"
import { chevronForwardOutline, logOut, notifications, person } from "ionicons/icons";
import { motion } from "framer-motion";
import { App } from '@capacitor/app';
import './Tab4.css';

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="custom-toolbar">
          <IonImg src={Logo} className="logo-img" />
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="container-perfil">
          <header className="header-perfil">
            <div className="picture">
              <IonText>U</IonText>
            </div>
            <div className="usernames">
              <IonText className="user">Usuário</IonText>
              <IonText>usuario@gmail.com</IonText>
            </div>
          </header>
          <motion.div className="config"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.2 }}>
            <div className="aba-config">
              <IonIcon md={person}></IonIcon>
              <IonText>Meu Perfil</IonText>
              <IonIcon md={chevronForwardOutline}></IonIcon>
            </div>
            <div className="aba-config">
              <IonIcon md={person}></IonIcon>
              <IonText>Configurações</IonText>
              <IonIcon md={chevronForwardOutline}></IonIcon>
            </div>
            <div className="aba-config">
              <IonIcon md={notifications}></IonIcon>
              <IonText>Notificações</IonText>
              <IonText>Allow</IonText>
            </div>
            <div className="aba-config">
              <IonIcon md={logOut}></IonIcon>
              <IonText onClick={() => App.exitApp()}>Sair</IonText>
            </div>
          </motion.div>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Tab4;