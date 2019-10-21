import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props)

    this.state={
      board : Array(9).fill(null),
      player : "X",
      winner : null,
      type: "uu"
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

      if(this.state.type==="us")
      {

        for(let i=index+1;i!=index;i++)
        {
          if(this.state.board[i]===null)
          {
            newBoard[i] = "O"

            this.setState({
              board : newBoard,
              player : "X",
              winner : this.state.winner
            })
          
            break;
          }
          else
          if(i>8)
            i=-1
        }
        this.checkWinner()
      }
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

    let chk="fal"
    for(let index=0; index < winLine.length; index++)
    {
      const [a,b,c] = winLine[index]
      if(this.state.board[a] && this.state.board[a]===this.state.board[b] && this.state.board[c]===this.state.board[a])
        {
          alert('Won player '.concat( this.state.board[a] ));

          this.setState({
            winner: this.state.player
          });
          chk="tru"
          this.reset();
        }

    }

    if(chk==="fal" && this.state.board[0]!==null && this.state.board[1]!==null && this.state.board[2]!==null &&
      this.state.board[3]!==null && this.state.board[4]!==null && this.state.board[5]!==null && 
      this.state.board[6]!==null && this.state.board[7]!==null && this.state.board[8]!==null )
      {
        alert("No one wins.....Tie");
        this.reset();
      }
  }


  reset() {
    this.setState({
      player: null,
      winner: null,
      board: Array(9).fill(null)
    })
  }


UserSystem(){
  alert("User Plays First!!!");
   this.setState({
    type:"us"
   })
}


SystemSystemEven(){
  let nb = this.state.board

  for(let i=0;i<9;i++){
      nb[i]= i%2===0?"X":"O";
      this.setState({board: nb});
    }

    setTimeout(()=>alert("Player x won"),1000);
    
      
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

      <b>Default User User</b>
      <button onClick={() => this.SystemSystemEven()}>System System</button>
      <button onClick={() => this.UserSystem()}>User System</button><br/>
      <div className="board">
          {Box}
      </div>
      <br/>
      <button onClick={() => this.reset()}>reset</button><br/>
      
    
    <footer>
      project Developed And Submitted By Mayank Arora, 2017CA45
    </footer>
    
    </div>
    
  );
}
}

export default App;
