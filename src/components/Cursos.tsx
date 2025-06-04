import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCheckbox, IonItem, IonList, IonText } from "@ionic/react";

const Cursos: React.FC = () => {
    return (
        <>
            <IonCard>
                <IonCardHeader><h1>Cursos</h1></IonCardHeader>
                <IonCardContent>
                    <IonList className="lista-frequencia">
                        <IonItem lines="none">
                            <IonCheckbox checked disabled slot="start"></IonCheckbox>
                            <div className="item-content">
                                <IonButton className="btn-ativo" fill="solid" size="small">ATIVO</IonButton>
                                <IonText>RH</IonText>
                            </div>
                        </IonItem>

                        <IonItem lines="none">
                            <IonCheckbox checked disabled slot="start"></IonCheckbox>
                            <div className="item-content">
                                <IonButton className="btn-inativo" fill="solid" size="small">INATIVO</IonButton>
                                <IonText>Mecânica</IonText>
                            </div>
                        </IonItem>

                        <IonItem lines="none">
                            <IonCheckbox disabled slot="start"></IonCheckbox>
                            <div className="item-content">
                                <IonButton className="btn-ausente" fill="solid" size="small">AUSENTE</IonButton>
                                <IonText>Fábrica</IonText>
                            </div>
                        </IonItem>
                        <IonItem>
                            <IonCheckbox checked disabled slot="start"></IonCheckbox>
                            <div className="item-content">
                                <IonButton className="btn-inativo" fill="solid">Ausente</IonButton>
                                <IonText>Transpor</IonText>
                            </div>
                        </IonItem>
                        <IonItem>
                            <IonCheckbox disabled slot="start"></IonCheckbox>
                            <div className="item-content">
                                <IonButton className="btn-ausente" fill="solid">Ausente</IonButton>
                                <IonText>Market</IonText>
                            </div>
                        </IonItem>
                        <IonItem>
                            <IonCheckbox checked disabled slot="start"></IonCheckbox>
                            <div className="item-content">
                                <IonButton className="btn-inativo" fill="solid">Ausente</IonButton>
                                <IonText>Mecânica</IonText>
                            </div>
                        </IonItem>
                        <IonItem lines="none">
                            <IonCheckbox disabled slot="start"></IonCheckbox>
                            <div className="item-content">
                                <IonButton className="btn-ausente" fill="solid" size="small">AUSENTE</IonButton>
                                <IonText>Fábrica</IonText>
                            </div>
                        </IonItem>
                        <IonItem lines="none">
                            <IonCheckbox checked disabled slot="start"></IonCheckbox>
                            <div className="item-content">
                                <IonButton className="btn-ausente" fill="solid" size="small">AUSENTE</IonButton>
                                <IonText>Fábrica</IonText>
                            </div>
                        </IonItem>
                        <IonItem>
                            <IonCheckbox disabled slot="start"></IonCheckbox>
                            <div className="item-content">
                                <IonButton className="btn-inativo" fill="solid">Ausente</IonButton>
                                <IonText>Transpor</IonText>
                            </div>
                        </IonItem>
                        <IonItem>
                            <IonCheckbox disabled slot="start"></IonCheckbox>
                            <div className="item-content">
                                <IonButton className="btn-inativo" fill="solid">Ausente</IonButton>
                                <IonText>Logística</IonText>
                            </div>
                        </IonItem>
                    </IonList>
                </IonCardContent>
            </IonCard>
        </>
    )
}

export default Cursos;