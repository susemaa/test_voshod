import React from 'react';
import Link from 'next/link';
import { Table, Col } from 'react-bootstrap';

type PageListProps = {
  pagesAmount: number;
};

const PageList: React.FC<PageListProps> = React.memo(({ pagesAmount }) => {
  //console.log('RENDER');
  return (
    <Col md={4} className="mb-3">
      <Table bordered hover>
        <thead>
          <tr>
            <th>There are {pagesAmount} pages</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: pagesAmount }, (_, index) => (
            <tr key={index + 1}>
              <td>
                <Link href={`/list/${index + 1}`}>
                  Page {index + 1}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Col>
  );
});

export default PageList;
