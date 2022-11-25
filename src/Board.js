import React from "react";
import styled from "styled-components";
import Cell from "./Cell";
import './Board.css';

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
    border: 1px solid blue;
    display: grid;
    grid-template-columns: repeat(5,1fr);
    grid-template-columns: repeat(5,1fr);
`;

export default Board;