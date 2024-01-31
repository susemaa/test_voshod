'use client'

import React from 'react';
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import { Table, Col } from 'react-bootstrap';

type PageListProps = {
  pagesAmount: number;
  active?: number;
};

const PageList: React.FC<PageListProps> = React.memo(({ pagesAmount, active }) => {
  const pathname = usePathname();

  const match = pathname.match(/\/list\/(\d+)/) ?? [];
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
              <td className={parseInt(match[1]) === (index + 1) ? 'bg-primary-subtle' : undefined}>
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
