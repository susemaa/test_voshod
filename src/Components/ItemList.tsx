import { Table } from 'react-bootstrap';
import Link from 'next/link';
import type { ItemType } from '@/lib/types';

export default function ItemList({
  title,
  items,
}: {
  title: string;
  items: Array<ItemType>;
}) {
  return (
    <Table bordered hover >
      <thead>
        <tr>
          <th>
            {title}
          </th>
        </tr>
      </thead>
      <tbody>
        {items?.map((item) => (
            <tr key={item.id}>
              <td>
                <Link
                  href={`/item/${item.id}`}
                  scroll={false}
                  passHref>
                    {item.name}
                </Link>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  )
}