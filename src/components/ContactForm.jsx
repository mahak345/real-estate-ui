import { Card, Form, Button } from "react-bootstrap";

export default function ContactForm() {
  return (
    <Card className="p-4">
      <h4>Contact Agent</h4>
      <Form>
        <Form.Group className="mb-3">
          <Form.Control placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control placeholder="Email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control as="textarea" rows={3} placeholder="Message" />
        </Form.Group>
        <Button variant="success">Send</Button>
      </Form>
    </Card>
  );
}
