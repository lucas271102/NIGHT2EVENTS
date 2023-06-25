import { Container, Card, Row, Text, Col, Spacer } from "@nextui-org/react";
export default function Index() {
  return (
    <Container className="h-screen border border-black" gap={0}>
      <Row gap={1}>
        <Col className="w-[70%]">
          <Card css={{ $$cardColor: '$colors$primary' }}>
            <Card.Body className="h-56">
              <Text h6 size={15} color="white" css={{ m: 0 }}>
                1 of 2
              </Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card css={{ $$cardColor: '$colors$primary' }}>
            <Card.Body className="h-56">
              <Text h6 size={15} color="white" css={{ m: 0 }}>
                2 of 2
              </Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Spacer y={1} />
      <Row gap={1}>
        <Col>
          <Card css={{ $$cardColor: '$colors$primary' }}>
            <Card.Body>
              <Text h6 size={15} color="white" css={{ m: 0 }}>
                1 of 3
              </Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card css={{ $$cardColor: '$colors$primary' }}>
            <Card.Body>
              <Text h6 size={15} color="white" css={{ m: 0 }}>
                2 of 3
              </Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card css={{ $$cardColor: '$colors$primary' }}>
            <Card.Body>
              <Text h6 size={15} color="white" css={{ m: 0 }}>
                3 of 3
              </Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
