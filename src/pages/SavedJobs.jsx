import React, { Component } from 'react';
import { Container, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import JobList from '../components/JobList';
import { unsaveJob } from '../redux/actions';


export class SavedJobs extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        // console.log("Saved jobs: ", this.props);
        // this.props.jobList.forEach((jl, jlIdx)=>{
        //     console.log(jl);
        // });
        // const intersection = array1.filter(element => array2.includes(element));
        const savedJobList = this.props.jobList.filter(job => this.props.savedJobs.includes(job.id));
        // console.log("Saved job list: ", savedJobList);
        return (
            <div className="SavedJobs">
                <Container>
                    <JobList jobList={savedJobList} saveJob={this.props.unsaveJob} btnText="Unsave" />
                    {/* <Button /> */}
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log("State from savedJob: ",state.savedJobs);
    return {
        savedJobs: state.savedJobs,
        jobList: state.jobList
    }
}



const mapDispatchToProps =(dispatch, ownProps)=>{
    return {
        unsaveJob: (id)=> dispatch(unsaveJob(id)),
        // unsaveJob: (id)=> dispatch(console.log("unsave")), //  Error -  Actions must be plain objects. Use custom middleware for async actions.
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SavedJobs);
