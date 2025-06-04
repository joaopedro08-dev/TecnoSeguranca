import React from 'react';
import { IonCard, IonCardContent, IonText } from '@ionic/react';
import Graficos from './Graficos';
import { motion, AnimatePresence } from 'framer-motion';

interface Usuario {
    nome: string;
    status: 'Ativo' | 'Inativo' | 'Ausente';
    setor: string;
    cursos: number;
}

const usuarios: Usuario[] = [
    { nome: 'Aline', status: 'Ativo', setor: 'RH', cursos: 3 },
    { nome: 'Bruno', status: 'Inativo', setor: 'Mecânica', cursos: 5 },
    { nome: 'Carlos', status: 'Ausente', setor: 'Fábrica', cursos: 10 },
    { nome: 'Daniela', status: 'Ausente', setor: 'Transpor.', cursos: 12 },
    { nome: 'Eduarda', status: 'Ausente', setor: 'Market.', cursos: 4 },
    { nome: 'Felipe', status: 'Inativo', setor: 'Logística', cursos: 0 },
];

const Estatisticas: React.FC = () => {

    return (
        <>
            <h1 style={{
                padding: "10px",
                fontSize: "28px"
            }}>Estatísticas</h1>

            <IonCard>
                <IonCardContent>
                    <IonText>
                        <h1>Lista de Usuários</h1>
                    </IonText>
                    <motion.table className="ionic-table"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ amount: 0.2 }}
                    >
                        <thead>
                            <tr>
                                <th>Usuário</th>
                                <th>Status</th>
                                <th>Setor</th>
                                <th>Cursos</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios.map((u, i) => (
                                <tr key={i}>
                                    <td>
                                        <div className="avatar">{u.nome[0].toUpperCase()}</div>
                                        {u.nome}
                                    </td>
                                    <td><span className={`status ${u.status.toLowerCase()}`}>{u.status}</span></td>
                                    <td>{u.setor}</td>
                                    <td>{u.cursos}</td>
                                </tr>
                            ))}
                        </tbody>
                    </motion.table>
                </IonCardContent>
            </IonCard>
            <Graficos />
        </>
    );
};

export default Estatisticas;
