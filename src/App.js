import React from 'react';
import './App.css';
import PicSide from "./Screen/picSide/PicSide";
import Game from "./Screen/game/Game";
import Choice from './Screen/Choice/Choice';
import {BrowserRouter,Route, Switch } from 'react-router-dom';


function App() {
  const [names,setNames]=React.useState(["",""])
  const [firstMove,setFirstMove]=React.useState("X");
  function chooseside(e,nameArray){
    console.log(e)
    setFirstMove(e);
    setNames(nameArray)
  }
  function handelMode(newname){
    console.log("ai is selected");
    console.log(newname);
    let copynames=[...names]
    copynames[1]=newname;
    setNames(copynames);
    
    
  }
  const setToInitial=()=>{
    setNames(["",""])
    setFirstMove("X")
  }

  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route path='/' exact>
        <Choice handelClick={handelMode} names={names}/>
        </Route>
      <Route path="/side">
         <PicSide handelClick={chooseside} names={names}/>
         </Route>
      <Route path='/game'>
        <Game handelExit={setToInitial} name1={names[0]} name2={names[1]} firstmove={firstMove} />
        </Route>
      </Switch>


      </BrowserRouter>
    
    </div>
  );
}

export default App;
