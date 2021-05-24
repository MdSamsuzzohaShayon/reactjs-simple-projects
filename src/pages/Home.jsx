import React, { Component } from 'react';
import { ListGroup, Container, Card } from 'react-bootstrap';

export class Home extends Component {
    render() {
        return (
            <div className="Home">
                <br />
                <Container >
                    <ListGroup className="bg-dark">
                        <ListGroup.Item>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Marketing Executive</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Daraz BD</Card.Subtitle>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Card.Link href="#">Apply Job</Card.Link>
                                    <Card.Link href="#">Save Job</Card.Link>
                                </Card.Body>
                            </Card>
                        </ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                </Container>
            </div>
        )
    }
}

export default Home;
