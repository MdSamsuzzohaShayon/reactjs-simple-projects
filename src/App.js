import React, { Component } from 'react';
import NavBar from './components/navbar/NavBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider' ;
import Search from './components/search/Search';



// https://www.youtube.com/watch?v=dzOrUmK4Qyw
// https://pixabay.com/api/docs/

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavBar />
          <Search />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
