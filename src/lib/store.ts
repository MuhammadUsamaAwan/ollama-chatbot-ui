import { type ChatOllamaInput } from 'langchain/chat_models/ollama';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ChatSettings = ChatOllamaInput;

type State = {
  chatSettings: ChatSettings;
  setChatSettings: (chatSettings: Partial<ChatSettings>) => void;
};

export const useStore = create<State>()(
  persist(
    set => ({
      chatSettings: {
        model: 'llama2',
        baseUrl: 'http://localhost:11434',
        mirostat: 0,
        mirostatEta: 0.1,
        mirostatTau: 5.0,
        numCtx: 2048,
        numGqa: 1,
        numGpu: 50,
        numThread: 8,
        repeatLastN: 64,
        repeatPenalty: 1.1,
        temperature: 0.8,
        tfsZ: 1,
        topK: 40,
        topP: 0.9,
      },
      setChatSettings: (chatSettings: Partial<ChatSettings>) => set({ chatSettings }),
    }),
    {
      name: 'ollama-chatbot-ui-storage',
    }
  )
);
