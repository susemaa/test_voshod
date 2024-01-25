import { Container } from 'react-bootstrap';

export default function E404() {
  return (
    <Container className="py-5 text-center">
      <div role="status">
        <span className="sr-only">This page doesn&apos;t exist, try another one.</span>
      </div>
    </Container>
  )
}