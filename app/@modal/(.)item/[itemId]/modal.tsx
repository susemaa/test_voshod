'use client';

import Modal from 'react-bootstrap/Modal';
import { useRouter } from 'next/navigation';

export function MyModal({
    children,
    name,
  }: {
    children: React.ReactNode;
    name?: string;
  }) {
  const router = useRouter();

  function onDismiss() {
    router.back();
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