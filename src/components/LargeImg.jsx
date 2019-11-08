import React, {Component} from 'react';


const LargeImg =(props)=>{
    return(
        <div className="lg-img-hldr">
            <div className="top-bar">Some text here (controls)</div>
            <img src={props.src} alt=""/> 
            <div className="bottom-bar">
                    <h3 className="title">{props.title}</h3>
                    <p className="descriptions">
                        {props.desc}
                    </p>
                    
            </div>
        </div>
    );
}


export default LargeImg;
