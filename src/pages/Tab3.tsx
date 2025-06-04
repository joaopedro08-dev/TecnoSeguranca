import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg } from '@ionic/react';
import Logo from "../imgs/icon.png";
import Estatisticas from '../components/Estatisticas';
import './Tab3.css';
import Cursos from '../components/Cursos';
import { AnimatePresence } from 'framer-motion';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="custom-toolbar">
          <IonImg src={Logo} className="logo-img" />
        </IonToolbar>
      </IonHeader>
      <AnimatePresence mode='wait'>
        <IonContent fullscreen>
          <Estatisticas />
          <Cursos />
        </IonContent>
      </AnimatePresence>
    </IonPage>
  );
};

export default Tab3;
