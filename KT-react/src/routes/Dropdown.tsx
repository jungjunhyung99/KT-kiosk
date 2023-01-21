import { darken } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Li = styled.li`
    list-style: none;
    border-radius: 15px;
    width: 100%;
    &:hover{
        color: #2BB7B3;
    }
`;

const Ul = styled.ul`
  list-style: none;
  font-weight: bold;
  font-size: 16px;
  color: black;
  line-height: 22px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
`;


const DropDown = styled.button`
  border: none;
  outline:none;
  position: relative;
  background-color: white;
  width: 12vw;
`;

const LiContainer = styled.div`
  border: 1px solid ${props => props.theme.borderColor};
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  width: 8vw;
  position: absolute;
  display:none;
  ${DropDown}:active & {
    display: block;    
    h2{
      color:white;
    }
  }

  

  ${DropDown}:focus & {
    display: block;
    h2{
      color:white;
    }
  }
`;


function Dropdown(){
  
  
  return(
    <Li>
        <DropDown>
            <h2 style={{fontSize:"1rem"}}>
            IT서포터즈 소개
            </h2>
          <LiContainer>
             <Ul>
                 <Li>프로필</Li>
                 <Li>로그아웃</Li>
                 <Li>구뜨</Li>
            </Ul>
          </LiContainer>
        </DropDown>
        <DropDown>
            <h2 style={{fontSize:"1rem"}}>
            IT서포터즈 교육과정
            </h2>
          <LiContainer>
             <Ul>
                 <Li>프로필</Li>
                 <Li>로그아웃</Li>
                 <Li>구뜨</Li>
            </Ul>
          </LiContainer>
        </DropDown>
        
        <DropDown>
            <h2 style={{fontSize:"1rem", fontWeight:"750"}}>
            KT장기사회공헌
            </h2>
          <LiContainer>
             <Ul>
                 <Li>프로필</Li>
                 <Li>로그아웃</Li>
                 <Li>구뜨</Li>
            </Ul>
          </LiContainer>
        </DropDown>
    </Li>
  );
}


export default Dropdown;