//THIS IS CODE OF APP.JS FILE

// import React, { Component } from 'react';
// import './App.css';
// import MovieRow from './components/MovieRow';
// import $ from 'jquery';


// class App extends Component {
//   //SETTING THE STATE
//   constructor(props){
//     super(props);
//     this.state = {};

//     /*const movies = [
//       {
//         id: 0,
//         poster_src: "https://pbs.twimg.com/media/DiPQxl3VAAAZKjs.jpg:large",
//         title: 'Aquaman',
//         overview:"Arthur Curry learns that he is the heir to the underwater kingdom of Atlantis"
//       },
//       {
//         id: 1,
//         poster_src: "https://www.paninishop.de/static/artbilder/jpg/DOCTORSTRANGEDIEOFFIZIELLEVORGESCHICHTEZUMFILM_Heft_743.jpg" ,
//         title: 'Docotor Strange', 
//         overview:"Doctor Strange is a 2016 American superhero film based on the Marvel Comics character"
//       }
//     ]*/


//     /*this.state = {
//       rows: [
//       <p key="0">This is my row0</p>,
//       <p key="1">This is my row1</p>,
//       <p key="2">This is my row2</p>,
    
//     ]
//     };*/


// /*
//     let movieRows = [];
//     movies.forEach((movie)=>{
//       console.log(movie.title);
//       // const movieRow = <table  key={m.id}>
//       //   <tbody>
//       //     <tr>
//       //       <td><img alt="poster" src={m.poster_src} width="120"/></td>
//       //       <td>
//       //         {m.title}
//       //         <p>{m.overview}</p>
//       //       </td>
//       //     </tr>
//       //   </tbody>
//       // </table>
//       const movieRow = <MovieRow movie={movie}/>
//       movieRows.push(movieRow)
//       // movieRows.push(<p key={movie.id}> movie title: {movie.title}</p>)
//     });
//     */

//    //this.state = {rows: movieRows}
//    this.performSearch();

//   }



//   performSearch(searchTerm){
//     console.log("Perfer search using movie db");
//     const urlString = "https://api.themoviedb.org/3/search/movie?&api_key=1b5adf76a72a13bad99b8fc0c68cb085&query="+searchTerm;
//     $.ajax({
//       url: urlString,
//       success: (searchResults) =>{
//         console.log("fatched data successfully");
//         console.log(searchResults);
//         const results = searchResults.results;
//         //console.log(results[0]);
//         let movieRows = [];
//         results.forEach((movie)=>{
//           movie.poster_src = "https://image.tmdb.org/t/p/w185"+movie.poster_Path;
//           console.log(movie.title);
//           const movieRow = <MovieRow key={movie.id} movie={movie}/>
//           movieRows.push(movieRow);
//         });
//         this.setState({rows: movieRows})
//       },
//       error: (xhr, status, err)=>{
//         console.log("failed to fetch data");
//       }
//     });
//   }












//   //RENDERING
//   render() {
    
//     return (
//       <div>
//         <table style={{backgroundColor: "black", display:"block",color: "white",paddingLeft:16}}>
//           <tbody>
//             <tr>
//               <td>
//                 <img alt="App icon" width="50" src="green-app.png" />
//               </td>
//               <td width="8"/>
//               <td><h1 >Movie Search</h1></td>
//             </tr>
//           </tbody>
//         </table>

//         <input style={{fontSixe:24,  display:'block',width: "99%", padding:8 ,textAlign:'center'}} placeholder="Enter search item" />
//         {this.state.rows}
//       </div>
//     );
//   }
// }


// export default App;
