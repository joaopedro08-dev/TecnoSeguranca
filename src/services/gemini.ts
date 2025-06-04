import { GoogleGenerativeAI, GenerativeModel, ChatSession } from '@google/generative-ai';
import { from, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

export class GeminiService {
  private genAI: GoogleGenerativeAI;
  private model: GenerativeModel;
  private chat: ChatSession;

  constructor() {
    this.genAI = new GoogleGenerativeAI(apiKey);
    this.model = this.genAI.getGenerativeModel({ model: 'YOUR_MODEL' });

    this.chat = this.model.startChat({
      history: [
        {
          role: 'user',
          parts: [
            {
              text: `
              Você se chama TechIA, a Inteligência Artificial do aplicativo TecnoSegurança! O objetivo é oferecer uma experiência completa e acessível, promovendo treinamentos, testes, realidade aumentada (RA), realidade virtual (RV), análises, estatísticas, cursos e muito mais. Desenvolvido para plataformas como o SENAI, o TecnoSegurança é uma ferramenta funcional e intuitiva, projetada para capacitar usuários com soluções inovadoras e práticas.
              `
            }
          ]
        }
      ],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 500
      }
    });
  }

  sendMessage(mensagem: string): Observable<string> {
    return from(this.chat.sendMessage(mensagem)).pipe(
      map((result: any) => {
        const responseText = result?.response?.text();
        if (responseText) return responseText;
        throw new Error('Resposta da TechIA mal formatada ou vazia.');
      }),
      catchError(error => {
        console.error('Erro ao gerar resposta:', error.message || error);
        return new Observable<string>(subscriber => {
          subscriber.next('Ops! Ocorreu um erro ao tentar se comunicar com a TechIA. Verifique sua conexão ou tente novamente mais tarde.');
          subscriber.complete();
        });
      })
    );
  }

  sendImage(base64Image: string, mensagemTexto: string = ''): Observable<string> {
    const imagePart = {
      inlineData: {
        data: base64Image.split(',')[1],
        mimeType: base64Image.match(/data:(image\/[a-z]+);/)?.[1] || 'image/png'
      }
    };

    const defaultMessage = `TechIA, a Inteligência Artificial do aplicativo TecnoSegurança`;

    return from(this.chat.sendMessage([
      { text: mensagemTexto || defaultMessage },
      imagePart
    ])).pipe(
      map((result: any) => {
        const responseText = result?.response?.text();
        if (responseText) return responseText;
        throw new Error('Não consegui processar a análise da imagem.');
      }),
      catchError(error => {
        console.error('Erro ao enviar imagem com mensagem:', error.message || error);
        return new Observable<string>(subscriber => {
          subscriber.next('Desculpe, não consegui analisar a imagem. Verifique o formato ou tente novamente.');
          subscriber.complete();
        });
      })
    );
  }

  resetChat(): void {
    this.chat = this.model.startChat({
      history: [
        {
          role: 'user',
          parts: [
            {
              text: `Você se chama TechIA, a Inteligência Artificial do aplicativo TecnoSegurança! O objetivo é oferecer uma experiência completa e acessível, promovendo treinamentos, testes, realidade aumentada (RA), realidade virtual (RV), análises, estatísticas, cursos e muito mais. Desenvolvido para plataformas como o SENAI, o TecnoSegurança é uma ferramenta funcional e intuitiva, projetada para capacitar usuários com soluções inovadoras e práticas.`
            }
          ]
        }
      ],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 500
      }
    });
  }
}
