import {
    IonButtons,
    IonIcon,
    IonText,
    IonTitle,
    IonRouterLink
} from "@ionic/react";
import { chevronForward } from 'ionicons/icons';
import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import "./Splash.css";

interface SplashProps {
    onFinish: () => void;
}

const Splash: React.FC<SplashProps> = ({ onFinish }) => {
    const history = useHistory();

    const splash = {
        title: [
            "Automação e IA",
            "Treinamentos",
            "Business Intelligence"
        ],
        text: [
            "Um ChatBot atua como um canal de comunicação ágil e automatizado para reportar ocorrências, riscos ou problemas. O chatbot utiliza IA para identificar a natureza do problema e direcionar a solicitação diretamente ao setor responsável, agilizando a resposta e aumentando a eficiência na gestão de segurança.",
            "Sistema de Realidade Aumentada (RA) para Treinamento de Funcionários, com capacitações imersivas e práticas. Por meio da RA, os colaboradores podem vivenciar simulações realistas de situações operacionais ou emergenciais, promovendo maior preparo técnico.",
            "Painel de indicadores que ajuda gestores a monitorar o número e tipo de ocorrências reportadas, a aderência e desempenho dos treinamentos realizados via RA, o engajamento dos colaboradores, e muito mais."
        ]
    };

    const [step, setStep] = useState(0);

    const nextStep = () => {
        if (step < splash.title.length - 1) {
            setStep(prevStep => prevStep + 1);
        } else {
            onFinish();
            history.replace('/tab1');
        }
    };

    const handleSkip = () => {
        onFinish();
        history.replace('/tab1');
    };

    const textVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    };

    return (
        <motion.div
            className={`container splash-bg-${step}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <motion.header
                className="header"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
            >
                <IonTitle>TecnoSegurança</IonTitle>
                <IonButtons slot="start">
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
                    >
                        <IonRouterLink onClick={handleSkip}>SKIP</IonRouterLink>
                    </motion.div>
                </IonButtons>
            </motion.header>

            <AnimatePresence mode="wait">
                <motion.div
                    className="main"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                >
                    <motion.div
                        key={step}
                        variants={textVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        style={{ overflow: 'hidden' }}
                    >
                        <IonTitle className="splash-title">{splash.title[step]}</IonTitle>
                    </motion.div>
                    <motion.div
                        key={step + "text"}
                        variants={textVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
                        style={{ overflow: 'hidden' }}
                    >
                        <IonText>{splash.text[step]}</IonText>
                    </motion.div>

                    <div className="container-bottom">
                        <motion.div
                            className="circle-swipers"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.7, ease: "easeOut" }}
                        >
                            {splash.title.map((_, index) => (
                                <motion.span
                                    key={index}
                                    className={index === step ? "active" : ""}
                                    initial={{ scale: 0.8 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 20, delay: 1.1 + index * 0.1 }}
                                ></motion.span>
                            ))}
                        </motion.div>

                        <motion.div
                            className="circle"
                            onClick={nextStep}
                            initial={{ opacity: 0, scale: 0.7 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.4, duration: 0.6, type: "spring", stiffness: 300, damping: 20 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <IonIcon
                                slot="icon-only"
                                ios={chevronForward}
                                md={chevronForward}
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </motion.div>
    );
};

export default Splash;