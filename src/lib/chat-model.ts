import { ChatOllama } from 'langchain/chat_models/ollama';

export function getChatModel({ model, baseUrl }: { model: string; baseUrl: string }) {
  return new ChatOllama({
    model,
    baseUrl,
  });
}
