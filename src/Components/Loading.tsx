import { Container } from 'react-bootstrap';

export default function Loading() {
  return (
    <Container className="py-5 text-center">
      <div role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </Container>
  )
}