import { useState } from "react";
import styled from "styled-components";
import basic1 from "../image/Basic1.png";
import basic2 from "../image/basic2.png";
import basic3 from "../image/basic3.png";
import life1 from "../image/life1.png";
import life2 from "../image/life2.png";
import life3 from "../image/life3.png";
import life4 from "../image/life4.png";
import life5 from "../image/life5.png";

const images1 = [basic1, basic2, basic3];
const images2 = [life1,life2,life3,life4,life5]; 

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

function TopMenu(){    
    const [choice, setChoice] = useState([]);
    return (
    <Container>
        {}
        {choice?.map((choice,index) => <img src={choice} alt="대체"/>)}
    </Container>
    );
}

export default TopMenu;