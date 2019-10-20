import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props)

    this.state={
      board : Array(9).fill(null),
      player : "X",
      winner : null
    }
  }

  handleClick(index){
    console.log(index);
    let newBoard = this.state.board

    if(this.state.board[index]===null)
      {
        newBoard[index] = this.state.player

        this.setState({
          board : newBoard,
          player : this.state.player === "X" ? "O" : "X",
          winner : this.state.winner
        })
      }
      this.checkWinner()
  }

  checkWinner(){
    let winLine =
      [
        ["0", "1", '2'],
        ["3", "4", '5'],
        ["6", "7", '8'],
        ["0", "3", '6'],
        ["1", "4", '7'],
        ["2", "5", '8'],
        ["0", "4", '8'],
        ["2", "4", '6'],
      ]

    for(let index=0; index < winLine.length; index++)
    {
      const [a,b,c] = winLine[index]
      if(this.state.board[a] && this.state.board[a]===this.state.board[b] && this.state.board[c]===this.state.board[a])
        {
          alert('Won player '.concat( this.state.player ));

          this.setState({
            winner: this.state.player
          });

          this.reset();
        }
    }
  }


  reset() {
    this.setState({
      player: null,
      winner: null,
      board: Array(9).fill(null)
    })
  }




SystemSystem(){
  let nb = this.state.board

      nb[0]="X";
      this.setState({board: nb});
    for (let it = 0; it < 1e9; it++) {
    }
    nb[1]="O"
    this.setState({board: nb});
}

  render(){

  const Box = this.state.board.map((box,index) => <div className="box" key={index} onClick={() => 
    this.handleClick(index)}>{box}</div>)

  return (
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Tic Tac Toe On React js</h1>
      </header>

      
      <button onClick={() => this.SystemSystem()}>System System</button><br/>
      <div className="board">
          {Box}
      </div>
    
    
    </div>
    
  );
}
}

export default App;
