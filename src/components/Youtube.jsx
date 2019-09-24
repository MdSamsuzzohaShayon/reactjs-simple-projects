import React, {Component} from 'react';
import {Divider, Button, Grid, Image, Segment} from 'semantic-ui-react';


const API = 'AIzaSyBXScYINJ7hV_BOJHK1w00Df7qzHybO33o';
const channelID = "UCAIlMG6LplmiRb14UFtcKCg";
const result = 10;

// THS IS THE DOCUMENTATION PAGE FOR YOUTUBE SEARCH API
// https://developers.google.com/youtube/v3/docs/search/list#usage

// THIS IS BASE URL 
// https://www.googleapis.com/youtube/v3/search


// THIS IS OUR FINAL URL WE HAVE GIVEN THE PARAMETERS
// https://www.googleapis.com/youtube/v3/search?key=AIzaSyBXScYINJ7hV_BOJHK1w00Df7qzHybO33o&channelId=UCAIlMG6LplmiRb14UFtcKCg&part=snippet,id&order=date&maxResults=10

// FINAL URL HAS BEEN RECONSTRUCTED
let finalUrl = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`;


class Youtube extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
          resultyt : []
        };

        this.clicked = this.clicked.bind(this);
    }
    clicked(){
        console.log("Clicked");
        fetch(finalUrl)
            .then(res => res.json())
            .then(resJson =>{
                // console.log(resJson);
                // MAKING ENTIRE LINK FOR ALL VIDEOS
                const resultyt = resJson.items.map(obj=> "https://youtube.com/embed/"+obj.id.videoId);
                this.setState({resultyt});                
            })
            .catch(err => console.log(err));
        
    }






    
    render(){
        console.log(finalUrl);
        console.log(this.state.resultyt);
        
        return (
            <React.Fragment>
                <Button color="brown" onClick={this.clicked}>Get Youtube Videos</Button>
                <div>
                    <Divider inverted />
                    {/* {
                        this.state.resultyt.map((link, i) =>{
                            console.log(link);
                            let frame = <div key={i}><iframe width="560" height="315" src={link} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> <Divider inverted /></div> 
                            return frame;
                        })
                    } */}

                    <Grid stackable columns={2}>
                    {
                        this.state.resultyt.map((link, i) =>{
                            console.log(link);
                            let frame = <Grid.Column key={i}> <Segment > <iframe src={link} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> </Segment></Grid.Column> ; 
                            return frame;
                        })
                    }
                    </Grid>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Youtube;