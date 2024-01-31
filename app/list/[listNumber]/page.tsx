'use client'

import { useEffect, useState } from 'react';
import axios from 'axios';
import ItemList from '@/src/Components/ItemList';
import E404 from '@/src/Components/E404';
import Loading from '@/src/Components/Loading';
import type { ItemType } from '@/lib/types';

export default function List({
  params,
}: {
  params: { listNumber: number };
}) {
  const [items, setItems] = useState<Array<ItemType> | null>(null);
  const [pagesAmount, setPagesAmount] = useState<number | null>(null);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const res = await axios.get(`https://taxivoshod.ru/testapi/?w=list&page=${params.listNumber}`);
        setItems(res.data.items);
        setPagesAmount(res.data.pages);
      } catch (e) {
        setPagesAmount(-1);
      }
    }

    fetchPage();
  }, [params.listNumber]);

  if (pagesAmount === -1)
    return (<E404 />);

  if (!pagesAmount && !items)
    return (<Loading />);

  return (
    <ItemList
      title={`Selected page: ${params.listNumber}`}
      items={items ?? []}
      />
  )
}