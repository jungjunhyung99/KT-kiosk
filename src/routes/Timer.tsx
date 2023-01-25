import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 30px;
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;

const Front = styled.div`
  text-align: right;
`;

const Back = styled.div`
  width: 1em;
`;

interface Iprob{
    flag: boolean;
}

function Timer(flag:Iprob){

    const [timeElapsed, setTimeElapsed] = useState(0);
    const record = useRef<number>();
    record.current  = timeElapsed;
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeElapsed(timeElapsed => timeElapsed + 30);
        },30);
        return () => {
            clearInterval(timer);
        };
    },[]);


    return <Container>
        <Front>{Math.floor(timeElapsed / 1000)}</Front>
        <Back>{(timeElapsed % 1000) / 10 }</Back>
    </Container>

}

export default Timer;