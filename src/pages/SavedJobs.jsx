import React, { Component } from 'react';
import { ListGroup, Card, Button, Container } from 'react-bootstrap';

export class SavedJobs extends Component {
    render() {
        return (
            <div className="SavedJobs">
                <Container>
                    <ListGroup >
                        <ListGroup.Item style={{ background: "none" }}>
                            <Card style={{ background: "rgba(1, 59, 73, 0.575)", color: "white" }}>
                                <Card.Body>
                                    <Card.Title>This is title</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Daraz bd</Card.Subtitle>
                                    <Card.Text>This is desc</Card.Text>
                                    <Button variant="light" className="mr-4"> <Card.Link href="#">Apply Job</Card.Link></Button>
                                    <Button variant="light"> <Card.Link href="#">Save Job</Card.Link></Button>
                                </Card.Body>
                            </Card>
                        </ListGroup.Item>
                    </ListGroup>
                </Container>
            </div>
        )
    }
}

export default SavedJobs;
