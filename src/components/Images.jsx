import React, {Component} from 'react';
import './Images.css';
import Img from './Img';
import LargeImage from './LargeImg';





// const imgSrc = "";


class Images extends Component{
    constructor(props){
        super(props)
        this.state = {
            imgLst: {
                imgStt_1: {
                    imgSrc : '../img/1.jpg',
                    title: 'Shayon Image One',
                    details: "Shayon Image One. This is image details <br/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex accusantium ut neque inventore voluptates, vitae maiores magnam corporis necessitatibus beatae."
                },
                imgStt_2: {
                    imgSrc : '../img/2.jpg',
                    title: 'Shayon Imege Two',
                    details: "Shayon Imege Two. This is image details <br/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex accusantium ut neque inventore voluptates, vitae maiores magnam corporis necessitatibus beatae."
                },
                imgStt_3: {
                    imgSrc : '../img/3.jpg',
                    title: 'Shayon Image Three',
                    details: "Shayon Image Three. This is image details <br/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex accusantium ut neque inventore voluptates, vitae maiores magnam corporis necessitatibus beatae."
                },
                imgStt_4: {
                    imgSrc : '../img/4.jpg',
                    title: 'Shayon Image Four',
                    details: "Shayon Image Four. This is image details <br/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex accusantium ut neque inventore voluptates, vitae maiores magnam corporis necessitatibus beatae."
                }
            },
            imgStyle: {
                lrgImgConStyle: {
                    display: 'none'
                },
                imgListConStyle: {
                    display: 'flex'
                }
            },
            lrgImg: {
                imgSrc: '',
                title: '',
                details: ''
            }
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick=(e)=>{
        console.log("this is working fine");
        e.preventDefault();
        // let whole_wrapper = e.target.parentNode.parentNode.parentNode;
        // console.log(e.target.parentNode.parentNode.parentNode);
        // console.log(e.target.attributes);
        // console.log(e);

        // let imgSource  = this.state.imgLst.map(element => {
        //     
        // });
        // console.log(imgSource);




        Object.values(this.state.imgLst).forEach(element=>{
            console.log(element.imgSrc);
            console.log(e.target.src);
            
            
            // if (element.imgSrc === e.target.src){
            //     console.log(element);
                
            //             // return element.imgSrc;
            //         }
         });
        
        if(this.state.imgStyle.imgListConStyle.display === 'flex'){
            this.setState({
                imgStyle: {
                    lrgImgConStyle: {
                        display: 'block'
                    },
                    imgListConStyle: {
                        display: 'none'
                    }
                },
                lrgImg: {
                    imgSrc: e.target.src,
                    title: this.state.imgLst.imgStt_1.title,
                    details: e.target.desc
                }
            });
            // console.log(this.state);
            
        }else{
            // whole_wrapper.style.display='block';
            console.log("Something went wrong");
            
        }
        // e.target.style.display="block"
    }

    buttonStyle= {
        background:'none', 
        border: 'none'
    }


    // https://reactjs.org/docs/forms.html
    // https://reactjs.org/docs/refs-and-the-dom.html
    // https://stackoverflow.com/questions/38093760/how-to-access-a-dom-element-in-react-what-is-the-equilvalent-of-document-getele
    
    render(){
        return (
            // group a list of children without adding extra nodes to the DOM.
            <React.Fragment >
            <div className="lg-img-con" style= {this.state.imgStyle.lrgImgConStyle}>
                <LargeImage title={this.state.lrgImg.title} desc={this.state.lrgImg.details} src={this.state.lrgImg.imgSrc}></LargeImage>
                {/* <LargeImage title={this.state.lrgImg.title} desc={this.state.lrgImg.details} src={this.state.lrgImg.imgSrc}  > <LargeImage/> */}
            </div>
            <div className="wrapper" style= {this.state.imgStyle.imgListConStyle}>
                {/* <Img src={this.state.imgStt_1.imgSrc} title={this.state.imgStt_1.title} details={this.state.imgStt_1.details}/> */}
                <button  onClick={this.handleClick} style={this.buttonStyle}>
                    <Img src={this.state.imgLst.imgStt_1.imgSrc}/>                    
                </button>
                <button  onClick={this.handleClick} style={this.buttonStyle}>
                    <Img src={this.state.imgLst.imgStt_2.imgSrc}/>                    
                </button>
                <button  onClick={this.handleClick} style={this.buttonStyle}>
                    <Img src={this.state.imgLst.imgStt_3.imgSrc}/>                    
                </button>
                <button  onClick={this.handleClick} style={this.buttonStyle}>
                    <Img src={this.state.imgLst.imgStt_4.imgSrc}/>                    
                </button>
             </div> 
            </React.Fragment> 
        );
    }
}


export default Images;

