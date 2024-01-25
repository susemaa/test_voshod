'use client'

import { useEffect, useState } from 'react';
import { Container, Table, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import PageList from '@/src/Components/PagesList';
import Loading from '@/src/Components/Loading';

export default function MainList() {
  const [pagesAmount, setPagesAmount] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://taxivoshod.ru/testapi/?w=list&page=1`);
        setPagesAmount(res.data.pages);
      } catch (e) {
        console.error(e);
      }
    }

    fetchData();
  }, []);

  if (!pagesAmount)
    return (
      <Loading />
    )

  return (
    <>
    <Container fluid className="mt-3">
      <Row>
        <PageList pagesAmount={pagesAmount}/>
        <Col md={8}>
          <Table bordered hover >
            <thead>
              <tr>
                <th>Please, select the page</th>
              </tr>
            </thead>
          </Table>
        </Col>
      </Row>
    </Container>
    </>
  )
}