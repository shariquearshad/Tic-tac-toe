import React from "react";
import {Link} from 'react-router-dom';
export default function PicSide(props){
    const [names,setNames]=React.useState(props.names)
    let  copyname=[...names]
    const handelname1=(event)=>{
       
        copyname[0]=event.target.value;
        

    }
    const handelname2=(event)=>{

        copyname[1]=event.target.value;

    }
    const [move,selectedMove]=React.useState("X")
    const firstmove=()=>{props.handelClick(move,copyname)} 
    return(
        <>

        <div className="card">
        <div className="optionHeading">choose your play mode</div>
        <div className="moves">
        <div className={`x ${move==="X"?"selected":""}`}  onClick={()=>selectedMove("X")} >X</div>
        <div className={`o ${move==="O"?"selected":""}`} onClick={()=>selectedMove("O")}>O</div>
        </div>
        <div className="players">
          <input placeholder={names[1]===""?"Enter first player name":"enter your name"} onChange={handelname1}/> 
          {names[1]==="" && <input  placeholder="Enter second player name" onChange={handelname2}/>}

        </div>
    
    <div className="buttonContainer">
        <Link to='/game'>
        <button onClick={()=>firstmove()} >continue</button>
        </Link>
    
    </div>
    </div>
    </>
    )
}