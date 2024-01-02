import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type State = {
  model: string;
  baseUrl: string;
  setModel: (model: string) => void;
  setBaseUrl: (baseUrl: string) => void;
};

export const useStore = create<State>()(
  persist(
    set => ({
      model: 'llama2',
      baseUrl: 'http://localhost:11434',
      setModel: (model: string) => set({ model }),
      setBaseUrl: (baseUrl: string) => set({ baseUrl }),
    }),
    {
      name: 'ollama-chatbot-ui-storage',
    }
  )
);
