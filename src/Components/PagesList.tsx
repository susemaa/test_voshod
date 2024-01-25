import Link from 'next/link';
import { Table, Col } from 'react-bootstrap';

export default function PageList({
  pagesAmount,
}: {
  pagesAmount: number;
}) {
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
  )
}