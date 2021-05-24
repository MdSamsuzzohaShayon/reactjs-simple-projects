import React from 'react';
import { connect } from 'react-redux';
import { ListGroup, Card, Button } from 'react-bootstrap';

const JobList = (props) => {
    // console.log(props.jobList);
    return (
        <div className="JobList">
            <ListGroup >
                {props.jobList.map(job => (
                    <ListGroup.Item key={job.id} style={{background: "none"}}>
                        <Card style={{background: "rgba(1, 59, 73, 0.575)", color: "white"}}>
                            <Card.Body 
                            >
                                <Card.Title>{job.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{job.org}</Card.Subtitle>
                                <Card.Text>{job.desc.substring(0, 150)}... </Card.Text>
                                <Button variant="light" className="mr-4"> <Card.Link href="#">Apply Job</Card.Link></Button>
                                <Button variant="light"> <Card.Link href="#">Save Job</Card.Link></Button> 
                            </Card.Body>
                        </Card>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div >
    )
}

const mapStateToProps = (state) => {
    // console.log("this is from state: ", state.jobList);
    return {
        jobList: state.jobList
    }
}

export default connect(mapStateToProps)(JobList);
