import React from 'react';
import './board.css';
export default function(props){
    let arrays=props.array;
    let index1=props.index;
    const handelClick=(index)=>{return( props.handelClick(index1,index))}
    //console.log(arrays);
    return(<div className="column">
    {arrays.map((character,index)=><div key={index} className={`cells ${index===1?"borderInner":""} ${character==="X"?"x":character==="O"?"o":""}`} onClick={()=>handelClick(index)}>
        {character}
    </div>)}
    </div>)
}