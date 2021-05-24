import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import JobList from '../components/JobList';

export class Home extends Component {
    render() {
        return (
            <div className="Home">
                <br />
                <Container >
                    <JobList />
                </Container>
            </div>
        )
    }
}

export default Home;
