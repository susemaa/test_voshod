'use client'

import { useEffect, useState } from 'react';
import axios from 'axios';
import { MyModal } from '@/app/@modal/(.)item/[itemId]/modal';
import List from '@/app/list/[listNumber]/page';
import Loading from '@/src/Components/Loading';
import type { ItemModalType } from '@/lib/types';

export default function ItemPage({
  params,
}: {
  params: { itemId: string };
}) {
  const [modalInfo, setModalInfo] = useState<ItemModalType | null>(null);

  useEffect(() => {
    const fetchItem = async (itemId : number) => {
      try {
        const res = await axios.get(`https://taxivoshod.ru/testapi/?w=item&id=${itemId}`);
        if (res.data.result)
          setModalInfo({ name: res.data.name, text: res.data.text });
      } catch (e) {
        setModalInfo({ name: 'Error', text: `This item doesn't exist, try another one.`})
        console.error(e)
      }
    }

    fetchItem(parseInt(params.itemId));
  }, [params.itemId]);

  if (!modalInfo)
    return <Loading />;

  return (
    <>
      <List params={{ listNumber: 1 }}/>
      <MyModal onHide='first' name={modalInfo.name}>{modalInfo.text}</MyModal>
    </>
  );
}