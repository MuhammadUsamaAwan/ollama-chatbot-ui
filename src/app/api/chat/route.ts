import { StreamingTextResponse, type Message } from 'ai';
import { PromptTemplate } from 'langchain/prompts';
import { BytesOutputParser } from 'langchain/schema/output_parser';

import { getChatModel } from '~/lib/chat-model';

const formatMessage = (message: Message) => {
  return `${message.role}: ${message.content}`;
};

export async function POST(request: Request) {
  try {
    const { messages, model, baseUrl } = (await request.json()) as {
      messages: Message[];
      model: string;
      baseUrl: string;
    };
    const chatModel = getChatModel({ model, baseUrl });
    const chat_history = messages.slice(0, -1).map(formatMessage).join('\n');
    const question = messages.at(-1)?.content ?? '';

    const template = `
        ---
        Format your reply using markdown. Use chat history if needed.

        **Chat History:**
        {chat_history}

        **Question:**
        {question}
        ---
    `;

    const prompt = PromptTemplate.fromTemplate(template);
    const outputParser = new BytesOutputParser();
    const chain = prompt.pipe(chatModel).pipe(outputParser);

    const stream = await chain.stream({
      chat_history,
      question,
    });

    return new StreamingTextResponse(stream);
  } catch (error) {
    console.log(error);
    throw new Error('Something went wrong, please try again later.');
  }
}
