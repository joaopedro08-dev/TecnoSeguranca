import React, { useState, useRef, useEffect } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonImg,
  IonContent,
  IonFooter,
  IonInput,
  IonButton,
  IonIcon
} from '@ionic/react';

import { attachOutline, sendOutline } from 'ionicons/icons';

import { motion, AnimatePresence } from 'framer-motion';
import { GeminiService } from '../services/gemini';
import Logo from "../imgs/icon.png";
import './Tab2.css';

const gemini = new GeminiService();

const messageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const typingDotsVariants = {
  animate: {
    opacity: [0.3, 1, 0.3],
    y: [0, -6, 0],
    transition: {
      repeat: Infinity,
      duration: 1.2,
      ease: "easeInOut",
      repeatDelay: 0.2
    }
  }
};

const Tab2: React.FC = () => {
  const [mensagens, setMensagens] = useState<
    { texto: string; tipo: 'recebida' | 'enviada'; imagem?: string }[]
  >([]);
  const [mensagemDigitada, setMensagemDigitada] = useState('');
  const [usuarioDigitando, setUsuarioDigitando] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const ionContentRef = useRef<HTMLIonContentElement | null>(null);

  useEffect(() => {
    if (ionContentRef.current) {
      ionContentRef.current.scrollToBottom(300); 
    }
  }, [mensagens, usuarioDigitando]); 

  const enviarMensagem = () => {
    if (!mensagemDigitada.trim()) return;

    const novaMensagem = { texto: mensagemDigitada, tipo: 'enviada' as const };
    setMensagens((prev) => [...prev, novaMensagem]);
    setMensagemDigitada('');
    setUsuarioDigitando(true);

    gemini.sendMessage(novaMensagem.texto).subscribe((resposta) => {
      setMensagens((prev) => [...prev, { texto: resposta, tipo: 'recebida' }]);
      setUsuarioDigitando(false);
    });
  };

  const enviarArquivo = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result as string;
      setMensagens((prev) => [
        ...prev,
        { texto: 'Imagem enviada.', tipo: 'enviada', imagem: base64 }
      ]);
      setUsuarioDigitando(true);

      gemini.sendImage(base64).subscribe((resposta) => {
        setMensagens((prev) => [
          ...prev,
          { texto: resposta, tipo: 'recebida' as const }
        ]);
        setUsuarioDigitando(false);
      });
    };
    reader.readAsDataURL(file);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="custom-toolbar">
          <IonImg src={Logo} className="logo-img" />
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen ref={ionContentRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.2 }}
          style={{ height: '100%', display: 'flex', flexDirection: 'column' }} 
          className="chat-container" 
        >
          <AnimatePresence>
            {mensagens.map((mensagem, index) => (
              <motion.div
                key={index}
                className={`mensagem ${mensagem.tipo}`}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={messageVariants}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="mensagem-conteudo">
                  {mensagem.imagem && (
                    <img
                      src={mensagem.imagem}
                      alt="imagem"
                      className="imagem-enviada"
                    />
                  )}
                  {mensagem.texto && (
                    <p className="texto-mensagem">{mensagem.texto}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {usuarioDigitando && (
            <div className="mensagem recebida digitando" style={{ display: 'flex', gap: 6 }}>
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    backgroundColor: '#fff',
                    display: 'inline-block'
                  }}
                  variants={typingDotsVariants}
                  animate="animate"
                  transition={{ delay: i * 0.2 }}
                />
              ))}
            </div>
          )}
        </motion.div>
      </IonContent>

      <IonFooter>
        <div className="input-container">
          <IonInput
            placeholder="Digite sua mensagem..."
            className="mensagem-input"
            value={mensagemDigitada}
            onIonChange={(e) => setMensagemDigitada(e.detail.value!)}
            onKeyUp={(e) => e.key === 'Enter' && enviarMensagem()}
          />

          <input
            type="file"
            accept="image/*"
            hidden
            ref={fileInputRef}
            onChange={enviarArquivo}
          />

          <div className="container-buttons">
            <motion.div whileTap={{ scale: 0.8 }} style={{ display: 'inline-block' }}>
              <IonButton
                onClick={() => fileInputRef.current?.click()}
                className="enviar-button"
              >
                <IonIcon md={attachOutline} ios={attachOutline}></IonIcon>
              </IonButton>
            </motion.div>

            <motion.div whileTap={{ scale: 0.8 }} style={{ display: 'inline-block' }}>
              <IonButton onClick={enviarMensagem} className="enviar-button">
                <IonIcon md={sendOutline} ios={attachOutline}></IonIcon>
              </IonButton>
            </motion.div>
          </div>
        </div>
      </IonFooter>
    </IonPage>
  );
};

export default Tab2;