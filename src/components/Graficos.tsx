import {
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonText,
} from '@ionic/react';
import { Doughnut, Bar, Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement
} from 'chart.js';
import './Analises.css';
import { motion, AnimatePresence } from 'framer-motion';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement
);
const doughnutData = {
    labels: ['Concluído', 'Restante'],
    datasets: [
        {
            data: [37.5, 62.5],
            backgroundColor: ['#00c4cc', '#e0f7fa'],
            borderWidth: 0,
        },
    ],
};

const doughnutOptions = {
    cutout: '70%',
    plugins: {
        legend: { display: false },
    },
};

const barData = {
    labels: ['Fev', 'Mar', 'Abr', 'Fev', 'Mar', 'Abr', 'Fev', 'Mar', 'Abr'],
    datasets: [
        {
            label: 'TI',
            data: [5, 4, 3, 2, 5, 3, 3, 2, 1],
            backgroundColor: '#00c4cc',
        },
        {
            label: 'Auto Card',
            data: [4, 4, 3, 5, 2, 4, 2, 4, 3],
            backgroundColor: '#4dd0e1',
        },
        {
            label: 'DS',
            data: [8, 8, 9, 7, 6, 7, 8, 5, 5],
            backgroundColor: '#b2ebf2',
        },
    ],
};

const barOptions = {
    plugins: {
        legend: { display: false },
    },
    responsive: true,
    scales: {
        x: { stacked: true },
        y: { stacked: true, beginAtZero: true },
    },
};
const Graficos: React.FC = () => {
    return (
        <>
            <AnimatePresence mode='wait'>
                <IonCard>
                    <IonCardHeader>
                        <IonText><h2>Progresso do curso</h2></IonText>
                        <IonText color="primary">37,5%</IonText>
                    </IonCardHeader>
                    <IonCardContent style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <motion.div
                            style={{ width: '200px', height: '200px', position: 'relative' }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ amount: 0.2 }}
                        >
                            <Doughnut data={doughnutData} options={doughnutOptions} />
                            <div style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                fontSize: '24px',
                                fontWeight: 'bold',
                                color: '#00c4cc',
                                textAlign: 'center',
                                marginBottom: '10px'

                            }}>
                                37,5%<br /><span style={{ fontSize: '14px' }}>CONCLUÍDO</span>
                            </div>
                        </motion.div>
                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonCardHeader>
                        <IonText><h2>Conclusão de atividades</h2></IonText>
                        <IonText style={{ color: 'gray', fontSize: '14px' }}>De fevereiro a abril</IonText>
                    </IonCardHeader>
                    <IonCardContent>
                        <Bar data={barData} options={barOptions} />
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-around',
                            marginTop: '10px',
                            fontSize: '14px',
                            color: '#00c4cc',
                            marginBottom: '10px'
                        }}>
                            <span>TI</span>
                            <span>AutoCAD</span>
                            <span>DS</span>
                        </div>
                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonCardHeader>
                        <IonText>
                            <h2>Emissão de Certificados</h2>
                        </IonText>
                        <IonText style={{ fontSize: '14px', color: 'gray' }}>2025</IonText>
                    </IonCardHeader>

                    <IonCardContent>
                        <Line
                            data={{
                                labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
                                datasets: [
                                    {
                                        label: 'Mês Atual',
                                        data: [3000, 4200, 3800, 4600, 5000, 4200, 5300],
                                        borderColor: '#3f51b5',
                                        backgroundColor: 'transparent',
                                        tension: 0.4,
                                        pointBackgroundColor: '#3f51b5',
                                    },
                                    {
                                        label: 'Mês Passado',
                                        data: [2800, 3900, 3400, 4000, 4700, 4100, 4800],
                                        borderColor: '#e91e63',
                                        backgroundColor: 'transparent',
                                        borderDash: [5, 5],
                                        tension: 0.4,
                                        pointBackgroundColor: '#e91e63',
                                    },
                                ],
                            }}
                            options={{
                                responsive: true,
                                plugins: {
                                    legend: {
                                        position: 'bottom',
                                    },
                                },
                                scales: {
                                    y: {
                                        beginAtZero: true,
                                        ticks: {
                                            callback: (value: number | string) => {
                                                const num = typeof value === 'string' ? parseFloat(value) : value;
                                                return `${num / 1000}k`;
                                            },
                                        },
                                    },
                                },
                            }}
                        />
                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonCardHeader>
                        <IonText>
                            <h2>Relatórios Emitidos</h2>
                        </IonText>
                        <IonText style={{ color: 'gray', fontSize: '14px' }}>
                            De 1–6 Jun, 2025
                        </IonText>
                    </IonCardHeader>

                    <IonCardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <motion.div style={{ width: '200px', height: '200px', position: 'relative' }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ amount: 0.2 }}
                        >
                            <Doughnut
                                data={{
                                    labels: ['RH', 'Fábrica', 'Transporte'],
                                    datasets: [
                                        {
                                            data: [40, 32, 28],
                                            backgroundColor: ['#5e60ce', '#4895ef', '#f72585'],
                                            borderWidth: 0,
                                        },
                                    ],
                                }}
                                options={{
                                    cutout: '70%',
                                    plugins: {
                                        legend: { display: false },
                                    },
                                }}
                            />
                        </motion.div>

                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-around',
                            width: '100%',
                            marginTop: '10px',
                            fontSize: '14px',
                            color: '#333'
                        }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                <span style={{ width: '12px', height: '12px', backgroundColor: '#5e60ce', borderRadius: '50%' }}></span>
                                RH 40%
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                <span style={{ width: '12px', height: '12px', backgroundColor: '#4895ef', borderRadius: '50%' }}></span>
                                Fábrica 32%
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                <span style={{ width: '12px', height: '12px', backgroundColor: '#f72585', borderRadius: '50%' }}></span>
                                Transporte 28%
                            </div>
                        </div>
                    </IonCardContent>
                </IonCard>
            </AnimatePresence>
        </>
    )
}

export default Graficos