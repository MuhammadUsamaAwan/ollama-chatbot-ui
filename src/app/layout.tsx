import type { Metadata } from 'next';

import { fontSans } from '~/lib/fonts';
import { cn } from '~/lib/utils';
import { ThemeProvider } from '~/components/theme-provider';

import '~/styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Ollama Chatbot UI',
    template: `%s - Ollama Chatbot UI`,
  },
  description: 'Ollama Chatbot UI',
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={cn('flex min-h-screen flex-col font-sans antialiased', fontSans.variable)}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
