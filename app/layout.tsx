import type { Metadata } from 'next';
import 'bootstrap/dist/css/bootstrap.css';

export const metadata: Metadata = {
  title: "Testovoe voshod",
  description: "Created by susemaa",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        {children}
        {modal}
      </body>
    </html>
  );
}
