import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Container } from 'react-bootstrap';
import { saveJob } from '../redux/action/actions';
import JobList from '../components/JobList';

export class Home extends Component {
    constructor(props){
        super(props);
    }
    render() {
        // console.log(this.props);
        return (
            <div className="Home">
                <br />
                <Container >
                    <JobList jobList={this.props.jobList} saveJob={this.props.saveJob} btnText="Save Job" />
                </Container>
            </div>
        )
    }
}



const mapDispatchToProps = (dispatch, ownProps) => {
    // console.log("Own props: ", ownProps);
    // const { id } = ownProps;
    // console.log("id: ", id);
    return {
        saveJob: (id) => dispatch(saveJob(id)),
    };
}

const mapStateToProps = (state) => {
    // console.log("this is from state: ", state.jobList);
    return {
        jobList: state.jobList
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
