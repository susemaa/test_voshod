'use client';

import Modal from 'react-bootstrap/Modal';
import { useRouter } from 'next/navigation';

export function MyModal({
    children,
    onHide,
    name,
  }: {
    children: React.ReactNode;
    onHide: string,
    name?: string;
  }) {
  const router = useRouter();

  function onDismiss() {
    if (onHide === 'back')
      router.back();
    if (onHide === 'first')
      router.push('/list/1');
  }

  return (
    <Modal show onHide={onDismiss}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
  );
}