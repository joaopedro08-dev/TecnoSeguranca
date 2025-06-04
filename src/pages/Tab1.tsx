import { IonButton, IonCard, IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';
import RV from '../imgs/RV.png'
import Logo from '../imgs/icon.png';
import { motion } from 'framer-motion';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="custom-toolbar">
          <IonImg src={Logo} className="logo-img" />
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonTitle>Cursos</IonTitle>
        <motion.div className="buttons"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.2 }}
        >
          <IonButton shape="round">Operador de Máquinas</IonButton>
          <IonButton shape="round">Operador de Empilhadeira</IonButton>
          <IonButton shape="round">Operador de Maquinas de Usinagem</IonButton>
          <IonButton shape="round">Mecânica de Máquinas Pesadas</IonButton>
        </motion.div>
        <IonTitle>Sobre o Curso</IonTitle>
        <IonCard className='card'>
          A Tecno Segurança  revoluciona o ambiente de trabalho com soluções em Realidade Aumentada. Utilizando óculos virtuais, oferecemos instruções visuais em tempo real para tarefas operacionais, treinamentos e manutenções. Nossa tecnologia aumenta a produtividade, reduz erros e garante mais segurança. Inovação prática para transformar a forma de trabalhar.
        </IonCard>
        <IonImg src={RV}></IonImg>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
