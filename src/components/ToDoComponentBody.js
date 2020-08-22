import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

export default function ToDoComponentBody() {
  return (
    <div>
      <Container>
        <Card className="shadow-sm p-3 mb-5 bg-white" style={{ height: '40rem' }}>
          <Card.Body>This is some text within a card body.</Card.Body>
        </Card>
      </Container>
    </div>
  );
}
