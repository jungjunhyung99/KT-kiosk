import React, {useState, useEffect, useRef} from "react";
import styled from "styled-components";

function Timer(){
    const [timeElapsed, setTimeElapsed]=useState(0);
    const record=useRef();
    record.current=timeElapsed;
    useEffect(()=>{
        const timer=setInterval(
            ()=>{setTimeElapsed(timeElapsed=>timeElapsed+30);}, 30);

        return ()=>{
            alert("Your Record:"+record.current/1000);
            clearInterval(timer);
        };
    },[]);
    return (
        <Container>
            <Front>{Math.floor(timeElapsed/1000)}:</Front>
            <Back>{(timeElapsed/1000)/10}</Back>
        </Container>
    );
}

const Container=styled.div`
    margin-top:30px;
    width:100px;
    height:50px;
    display:flex;
`;

const Front=styled.div`
    text-align:right;
`;

const Back=styled.div`
    width:1em;
`;

export default Timer;