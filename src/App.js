import logo from './logo.svg';
import './App.css';
import Board from './components/card-board/Board';
import Card from './components/card-board/Card';

import CardSlide from './components/CardSlide';

function App() {
  return (
    <div className="App">

      {/* Incomplete */}
      {/* <Board id="board-1" className="board" >
        <Card id="card-1" className="card" draggable="true">
          <p>Card One</p>
        </Card>
      </Board>
      <Board id="board-1" className="board" >
        <Card id="card-1" className="card" draggable="true">
          <p>Card Two</p>
        </Card>
      </Board> */}




      <CardSlide />
    </div>
  );
}

export default App;
