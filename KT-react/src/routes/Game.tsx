import { yellow } from "@mui/material/colors";
import { padding } from "@mui/system";
import React, { useEffect, useLayoutEffect, useState} from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { probState } from "../atom";
import Timer from "./Timer";

const Container = styled.div`
    
`;

const Span = styled.span`
    display: block;
`;

function Game() {
    const [prob, setProb] = useRecoilState(probState);
    const [realProb,setReal]= useState(prob);
    const [color,setColor] = useState('');
    const [score, setScore] = useState(0);
    const [flag, setFlag] = useState<boolean>(false);

    useLayoutEffect(() => {
        reroll();
    },[realProb.length === 0]);

    const fontColor = {
       color: ["red", "blue", "yellow"],
       key: [0,1,2],
    };

    const randColor = () => {
        let colorIndex = Math.floor(Math.random()*fontColor.color.length);
        return fontColor.color[colorIndex];
    };

    const reroll = () =>{
        let firstIndex = Math.floor(Math.random()*prob.length);
        let firstProb = prob.at(firstIndex);   
        let afterArray = [...prob.slice(0,firstIndex), ...prob.slice(firstIndex+1)];
        let secondIndex = Math.floor(Math.random()*afterArray.length); 
        let secondProb = afterArray.at(secondIndex);
        // 문제를 2개 세팅하려 했으나 렌더링 문제 + 미숙한 react 이해도로 문제는 하나씩...
        // 추후 수정 예정입니다.
        setReal([firstProb] as any);
    };

    const onClick = () => {
        reroll();
        console.log(realProb);
        setFlag((prev) => !prev);
    };

    const colorClick = (event:React.MouseEvent<HTMLButtonElement>) => {
        let index = 0;
        if(event.currentTarget.innerText === "노"){
            
            if(realProb[0] === "노란색"){
                setScore(score + 1);
            }
            else{
                setScore(score - 2);
            }
            index = realProb.indexOf("노란색");
            realProb.splice(index,1);
        }
        if(event.currentTarget.innerText === "빨"){
            if(realProb[0] === "빨간색"){
                setScore(score + 1);
            }
            else{
                setScore(score - 2);
            }
            index = realProb.indexOf("빨간색");
            realProb.splice(index,1);
        }
        if(event.currentTarget.innerText === "파"){
            if(realProb[0] === "파란색"){
                setScore(score + 1);
            }
            else{setScore(score - 2);}
            index = realProb.indexOf("파란색");
            realProb.splice(index,1);
        }
    };

    return(
        <Container>
            <h1>글자색 맞추기 게임</h1>
            <Link to="/Menu/gamechoice/game">dfa</Link>

            {/* <Timer flag={flag}/> */}

            <button onClick={onClick}>click me</button>
            {realProb.map((color, index) => <h1 key={index} style={{color: randColor()}}>{color}</h1>)}
            <br/>
            <div style={{display:"flex"}}>
            <Span>
            <h1 onClick={colorClick as any} style={{color:"yellow", padding:"50px", cursor:"pointer"}}>노</h1>
            </Span>
            <h1 onClick={colorClick as any} style={{color:"blue",padding:"50px",cursor:"pointer"}}>파</h1>
            <h1 onClick={colorClick as any} style={{color:"red",padding:"50px",cursor:"pointer"}}>빨</h1>
            </div>
            <div>
                <h1>점수 : {score}</h1>
            </div>
        </Container>
    );
}

export default Game;