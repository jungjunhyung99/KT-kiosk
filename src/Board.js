import React from "react";
import styled from "styled-components";
import Cell from "./Cell";

function Board({numbers, handleClick}){
    console.log("Board");
    return (
        <Container>
            {numbers.map((num, index)=>(
                <Cell num={num} key={index} handleClick={handleClick}></Cell>
            ))}
        </Container>
    );
}

const Container=styled.div`
    width: 400px;
    height: 400px;
    top:-50px;
    display: grid;
    grid-template-columns: repeat(5,1fr);
    grid-template-columns: repeat(5,1fr);
    position:relative;
    left:-430px;
`;

export default Board;