'use client'

import { useEffect, useState } from 'react';
import axios from 'axios';
import { MyModal } from './modal';
import Loading from '@/src/Components/Loading';

type ItemType = {
  name: string,
  text: string,
}

export default function ItemModal({
  params: { itemId },
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

    fetchItem(parseInt(itemId));
  }, [itemId]);

  if (!modalInfo)
    return <MyModal onHide='back'><Loading /></MyModal>;
  
  return <MyModal onHide='back' name={modalInfo.name}>{modalInfo.text}</MyModal>;
}