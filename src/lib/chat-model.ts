import { ChatOllama, type ChatOllamaInput } from 'langchain/chat_models/ollama';

export function getChatModel(input: Partial<ChatOllamaInput>) {
  return new ChatOllama(input);
}
