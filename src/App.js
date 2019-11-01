import React, { Component } from 'react';
import './App.css';
import Projects from './components/Projects'


class App extends Component {
   //INITIAL STATE KEYS SHOULD DEFINE IN CONSTRACTURE
  constructor(){
    super();
    this.state = {
      projects : [
        {
          title: "Website",
          catagory: 'Web Development and Design of Ecomarce, Social, Personal, Music, Business, News ETC'
        },
        {
          title: "Video Production",
          catagory: 'Visual effect and motion Graphics'
        },
        {
          title: "3D Modeling",
          catagory: 'Modeling, Sculpting, Textruing, Animating and Rendering'
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <Projects test=" Hello World"/>
        {/* THIS STATE WILL BE PROPS IN PROJETCS CLASS */}
        <Projects projects = {this.state.projects}/>
      </div>
    );
  }
}

export default App;
