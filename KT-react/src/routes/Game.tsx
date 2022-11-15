import { yellow } from "@mui/material/colors";
import { padding } from "@mui/system";
import React, { useEffect, useState} from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { probState } from "../atom";

const Container = styled.div`
    
`;

const Span = styled.span`
    display: block;
`;

function Game() {
    let [prob, setProb] = useRecoilState(probState);
    let [realProb,setReal]= useState(prob);
    let [color,setColor] = useState('');
    const [score, setScore] = useState(0);
    useEffect(() => {
        reroll();
    },[realProb.length === 0]);

    const fontColor = {
       color: ["red", "blue", "yellow"],
       key: [1,2,3],
    };

    const randColor = () => {
        let colorIndex = Math.floor(Math.random()*color.length);
        return fontColor.color[colorIndex];
    };

    const reroll = () =>{
        let firstIndex = Math.floor(Math.random()*prob.length);
        let firstProb = prob.at(firstIndex);   
        let afterArray = [...prob.slice(0,firstIndex), ...prob.slice(firstIndex+1)];
        let secondIndex = Math.floor(Math.random()*afterArray.length); 
        let secondProb = afterArray.at(secondIndex);
        setReal([firstProb,secondProb] as any);
    
    };

    const onClick = () => {
        reroll();
    };

    const colorClick = (event:React.MouseEvent<HTMLButtonElement>) => {
        let index = 0;
        let probArray = [""];
        if(event.currentTarget.innerText === "노"){
            index = realProb.indexOf("노란색");
            setReal([...realProb.slice(0,index), ...realProb.slice(index+1)]) ;
            setScore(score + 1);
        }
        if(event.currentTarget.innerText === "빨"){
            index = realProb.indexOf("빨간색");
            setReal([...realProb.slice(0,index), ...realProb.slice(index+1)]) ;
            setScore(score + 1);
        }
        if(event.currentTarget.innerText === "파"){
            index = realProb.indexOf("파란색");
            setReal([...realProb.slice(0,index), ...realProb.slice(index+1)]) ;
            setScore(score + 1);
        }
        if(realProb.length === 0){
            console.log("없어용");
        }
    };

    return(
        <Container>
            <h1>글자색 맞추기 게임</h1>

            <button onClick={onClick}>click me</button>
            {realProb.map((color) => <h1 style={{color: randColor()}}>{color}</h1>)}
            <br/>
            <div style={{display:"flex"}}>
            <Span>
            <h1 onClick={colorClick as any} style={{color:"yellow", padding:"50px"}}>노</h1>
            </Span>
            <h1 onClick={colorClick as any} style={{color:"blue",padding:"50px"}}>파</h1>
            <h1 onClick={colorClick as any} style={{color:"red",padding:"50px"}}>빨</h1>
            </div>
            <div>
                <h1>점수 : {score}</h1>
            </div>
        </Container>
    );
}

export default Game;