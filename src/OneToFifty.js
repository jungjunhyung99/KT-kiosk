import React, {useState, useEffect, useRef} from "react";
import styled from "styled-components";
import Board from "./Board";
import Timer from "./Timer";

let array=[];
for (let i=1;i<=25;i++){
    array.push(i);
}

function OneToFifty(){
    const [numbers,setNumbers]=useState(array);
    const [gameFlag, setGameFlag]=useState(false);
    const [current, setCurrent]=useState(1);

    const handleClick = num => {
        if(num==current && gameFlag){
            if(num==50){
                endGame();
            }
            const index=numbers.indexOf(num);
            setNumbers(numbers=>[
                ...numbers.slice(0,index),
                (num<26)?num+25:0,
                ...numbers.slice(index+1)
            ]);
            setCurrent(current=>current+1);
        }
        console.log(num);
    };
    const startGame=()=>{
        setNumbers(shuffleArray(array));
        setCurrent(1);
        setGameFlag(true);
    };

    const endGame=()=>{
        setGameFlag(false);
    };

    return (
        <Container>
            <Board numbers={numbers} handleClick={handleClick}></Board>
            {gameFlag ? 
            (
                <Timer />
            )
            :
            (
                <StartButton onClick={startGame}>start</StartButton>
            )}
        </Container>
    );
}

const shuffleArray=array=>{
    for(let i=array.length-1;i>0;i--){
        let j=Math.floor(Math.random()*(i+1));
        [array[i], array[j]]=[array[j], array[i]];
    }
    return array;
}
const Container = styled.div`
    width:1450px;
    height:700px;
    border:1px solid black;
    display: flex;
    justify-content:center;
    align-items:center;
    position:inherit;
`;

const StartButton=styled.button`
    margin-top:30px;
    width:100px;
    height:50px;
    position:relative;
    left:-180px;
    top:180px;
`;

export default OneToFifty;