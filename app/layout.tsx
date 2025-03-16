import Header from '@/components/header';
import Footer from '@/components/footer';

import '../app/globals.css';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet"/>
        <title>Projeto Mercado</title>
      </head>
      <body className='bg-gray-100'>
        <Header />
        <main className='container mx-auto '>
          {children}
        </main>        
        <Footer />
      </body>
    </html>
  );
}
