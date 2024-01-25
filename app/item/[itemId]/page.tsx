'use client'

import { useEffect, useState } from 'react';
import axios from 'axios';
import { MyModal } from '@/app/@modal/(.)item/[itemId]/modal';
import List from '@/app/list/[listNumber]/page';
import Loading from '@/src/Components/Loading';

type ItemType = {
  name: string,
  text: string,
}

export default function ItemPage({
  params,
}: {
  params: { itemId: string };
}) {
  const [modalInfo, setModalInfo] = useState<ItemType | null>(null);

  useEffect(() => {
    const fetchItem = async (itemId : number) => {
      try {
        const res = await axios.get(`https://taxivoshod.ru/testapi/?w=item&id=${itemId}`);
        console.log(res);
        if (res.data.result)
          setModalInfo({ name: res.data.name, text: res.data.text });
      } catch (e) {
        console.error(e)
      }
    }

    fetchItem(parseInt(params.itemId));
  }, [params.itemId]);

  if (!modalInfo)
    return (
      <>
        <List params={{ listNumber: 1 }}/>
        <MyModal onHide='first'><Loading /></MyModal>
      </>
    );

  return (
    <>
      <List params={{ listNumber: 1 }}/>
      <MyModal onHide='first' name={modalInfo.name}>{modalInfo.text}</MyModal>
    </>
  )
}