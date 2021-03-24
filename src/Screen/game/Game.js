import React from 'react'; 
import reactDom from 'react-dom';
import Board from '../../Board/Board';
import {Link} from 'react-router-dom';
import './game.css';
export default function Game({name1="sharique",name2="computers",firstmove}){
    var board=[["","",""],["","",""],["","",""]];
   // console.log(board);)
   const players=[name1,name2];
    const [score,setScore]=React.useState([0,0])
    const [useboard,setBoard]=React.useState(board);
    const [count,setCount]=React.useState(0)
    const [winner,setWinner]=React.useState(false);
    const [draw,setDraw]=React.useState(false);
    let [aiBoard,setAiBoard]=React.useState(["00","01","02","10","11","12","20","21","22"])
    //let aiBoard=["00","01","02","10","11","12","20","21","22"];
    const moves=[firstmove,firstmove==="X"?"O":"X"]
    const playAgain=()=>{
        setBoard(board);
        setCount(0)
        setWinner(false)
        setDraw(false)
        let newScore=[...score];
        newScore[(count-1)%2]++;
        setScore(newScore)
    }
    const handelClick=(x,y)=>{
        const newboard=[...useboard]
        
    
        if(newboard[x][y]===""){
           if (count%2===0){
              newboard[x][y]=moves[count%2];
            
              console.log("x is executed button clicked is"+x+y)
           }
           else{
              newboard[x][y]=moves[count%2];
              console.log("y is executed button clicked is"+x+y)
           }
           checkWinner()
           console.log(count);
           let newCount=count+1;
           setCount(newCount)
           console.log(newCount);
           modifyAiBoard(x,y);
           setBoard(newboard);
           if (newCount===9)
              setDraw(true);
              console.log("the count is "+ newCount);
       
    
           
           if(players[newCount%2]==="computer"){//control goes to ai;
               console.log("control goes to ai")
            
              handelAiBoard()
               
            }
    
        }
        
    }
    const checkWinner=()=>{// to check winner
        console.log("cheking winner");
        for(let i=0;i<3;i++){// cheking winner for x axis
            let s1=""
            for(let j=0;j<3;j++){
               s1+=useboard[i][j].toString(); 
               //s2+=useboard[j][i].toString()
                
            }
            console.log(s1)
            if(s1==="XXX" || s1==="OOO"){
            setWinner(true)
            
             }
             console.log(winner);
        }
        for(let j=0;j<3;j++){// checking winner for y axis
            let s1="";
            for(let i=0;i<3;i++){
                s1+=useboard[i][j].toString(); 
            }
            if(s1==="XXX" || s1==="OOO"){
                setWinner(true)
            }
        }
        let diagonalDown=""
        for(let i=0,j=0;i<3;i++,j++){ //to check winner along diagonal down
            diagonalDown+=useboard[i][j];
        }
        if(diagonalDown==="XXX" || diagonalDown==="OOO"){
            setWinner(true)
         }
         let diagonalUp=""
         for(let i=0,j=2;i<3;i++,j--){  //to check winner along diagonal up
             diagonalUp+=useboard[i][j];
         }
         if(diagonalUp==="XXX" || diagonalUp==="OOO"){
            setWinner(true)
         }
    }
    const modifyAiBoard=(x,y)=>{ 
        console.log("it should execute after set button clicked")  //modify ai board
       // let NewAiBoard=[...aiBoard];
        let stringvalue=x.toString()+y;
        console.log(stringvalue+" "+typeof(stringvalue));
        let newAIBoard=aiBoard.filter(el=>el!==stringvalue);
        console.log(newAIBoard);
        setAiBoard(newAIBoard);
       // setAiBoard(NewAiBoard);
       //aiBoard=NewAiBoard
    }
    
    const handelAiBoard=()=>{
       
       let randomno=Math.round(Math.random()*(aiBoard.length-0)+0);
       
       console.log("controls goes to aiboard");
       let value=aiBoard[randomno];
       console.log(value)
       console.log(typeof(value));
      let valuex=parseInt(value.charAt(0));
      let valuey=parseInt(value.charAt(1));
      handelClick(valuex,valuey);
     // const newboard=[...useboard];
      //newboard[valuex][valuey]='O';
      //setBoard(newboard);
      //let newCount=count+1;
      //setCount(newCount)

      



      // console.log(NewAiBoard[valuex][2]);
    //  let valuey=Math.round(Math.random()*(NewAiBoard[valuex].length-1)+0);
       //console.log(valuex);

    }
    

     return(
         <div className="main">
         <div className="gameContainer">
             <div className="scoreContainer">
             <div className={`${winner?"blur":""} ${count%2===1?"blur":""}`}>{players[0]}</div>
             <div className="score">{score[0]} - {score[1]}</div>
             <div className={`${winner?"blur":""}${count%2===0?"blur":""}`}>{players[1]}</div>
             </div>
            {!winner && !draw &&<div className="boardContainer">
                 {useboard.map((array,index)=>(<div className={index===1?"border":""}><Board key={index} array={array} index={index} handelClick={handelClick}/></div>))}
             </div>}
             {winner && (<div className="boardContainer">
                 <div>congratulation {players[(count-1)%2]} won</div>
                 <div class="buttonContainer">
                     <button className="button" onClick={playAgain}>play again</button>
                     <button><Link to='/'>exit</Link> </button>
                 </div>
            </div>)}
             {draw && <div> game is drawm</div>}
             
         </div>
         </div>
     )
    
}