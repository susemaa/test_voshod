import type { Metadata } from 'next';
import 'bootstrap/dist/css/bootstrap.css';
import PageList from '@/src/Components/PagesList';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

export const metadata: Metadata = {
  title: "Testovoe voshod",
  description: "Created by susemaa",
};

async function getPagesAmount() {
  const res = await axios.get('https://taxivoshod.ru/testapi/?w=list&page=1');
  if (res.status !== 200) {
    throw new Error('Failed to fetch data');
  }
 
  return res.data.pages;

}

export default async function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  const pagesAmount = await getPagesAmount();
  
  return (
    <html lang="ru">
      <body>
        <Container fluid className="mt-3">
          <Row>
            <PageList pagesAmount={pagesAmount}/>
            <Col md={8}>
              {children}
            </Col>
          </Row>
        </Container>
        {modal}
      </body>
    </html>
  );
}
