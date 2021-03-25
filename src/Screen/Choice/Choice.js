import React from 'react';
//import {Link,} from 'react-router-dom';
import Game from '../game/Game';
import PicSide from "../picSide/PicSide"
//import SettingsIcon from '@material-ui/icons/Settings';

import './choice.css';
import {Route,Link,history} from 'react-router-dom';
export default function Choice(props){
    const name="computer";
    const [move,selectedMove]=React.useState("X")
    //let firstMove="X";
    const onAIClick=(name)=>{return( props.handelClick())}

    
    return (
        <div className="card">
           <div className="imageContainer">
               <div className="x size"onClick={()=>selectedMove("X")} >X</div>
               <div className="o size" onClick={()=>selectedMove("O")}>O</div></div>
           <div className="optionHeading">choose your play mode</div>
           <div className="buttonContainer">
               <Link to="/side">
               <button onClick={()=>onAIClick(name)} >With AI</button>
               </Link>
               <Link to="/side">
             <button  >With a friend</button>
             </Link>
           </div>

           
               
        </div>
        
    )
}