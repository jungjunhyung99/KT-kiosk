import styled from "styled-components";
import React, {Component} from "react";
import {
  Link,
  Routes,
  Route,
  useLocation,
  useParams,
  useMatch,
  Outlet,
} from "react-router-dom";

const Container = styled.div`
    padding: 30px 60px;
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;

const Tab = styled.span<{ isActive: boolean }>`
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  padding: 7px 0px;
  border-radius: 10px;
  width: 10vw;
  border: 2px solid black;
  background-color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.spanColor};
  a {
    padding: 7px 0px;
    display: block;
  }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    font-weight: 800;
    &:focus, &hover, &:visited, &:link, &active{
        text-decoration: none;
    }
`;

function Choice () {
  const middleMatch = useMatch("/Menu/home/middle/*");
  const hardMatch = useMatch("/Menu/home/hard/*");
  const easyMatch = useMatch("/Menu/home/easy/*");
  return (
    <Container>
      <h1>식당 키오스크 실전연습</h1>
      <h2 style={{padding:20}}>미션 난이도 선택</h2>
      <Tabs>
        <Tab isActive={hardMatch !== null}>
          <StyledLink to={"/Menu/home/hard"}>상</StyledLink>
        </Tab>
        <Tab isActive={middleMatch !== null}>
          <StyledLink to={"/Menu/home/middle"}>중</StyledLink>
        </Tab>
        <Tab isActive={easyMatch !== null}>
          <StyledLink to={"/Menu/home/easy"}>하</StyledLink>
        </Tab>
      </Tabs>
      <Outlet/>
    </Container>
  );
}

export default Choice;