import styled from "styled-components";
import logo from "../image/hd_logo.png";
import kt_header from "../image/kt_header.png";
import {Link,Outlet, Routes, Route, useMatch, useParams} from 'react-router-dom';
import React, { useState } from 'react';
import ApexChart from "react-apexcharts";
import Chart from "./Chart";

const Container = styled.div`
    
`;

const Header = styled.header`
    display: flex;
    position: relative;
    margin: 0 auto;
    width: 100%;
    height: 80px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #2BB7B3;
`;

const HeadOl = styled.ol`
    display: flex;
    list-style-type: disc;
    flex-direction: row;
    justify-content: center;    
    max-width: 1000px;
    z-index: 2;
    width: 100%;
    margin: 0 auto;
    transform: translateY(-50%);
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`;

const HeadLi = styled.li<{isActive: boolean}>`
    margin: -40px 10px;
    padding: 10px 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 10px;
    border: none;
    font-size: 16px;
    font-weight: 700;
    background-color: white;
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
    background-color: ${(props) => props.isActive ? props.theme.accentColor : props.theme.spanColor};
    color: ${(props) => props.isActive ? props.theme.spanColor : props.theme.textColor};
`;

const BodyContainer = styled.div`
    display: flex;
    height: 3vh;
`;

const NavBar = styled.nav`
  flex: 1;
  height: calc(100vh-100px);
  top: 100px;
  position: sticky;
  padding: 12px 8px;
  background-color: white;
  span{
    font-size: 30px;
    font-family: 'Courier New', Courier, monospace;
    font-weight: 200;
    border-bottom: 1px solid;
    border-color: white;    
  }
`;

const Body = styled.div`
    padding-top: 50px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    text-align: center;
    flex: 4;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const ContentContainer = styled.div`
`;

const ListContainer = styled.div`
    display: flex;
    justify-content: center;
`;

 const Img = styled.img.attrs({
    src: `${logo}`,
    alt: "kt_logo",
 })`
 `;

 const Middle_bg = styled.img.attrs({
    src: `${kt_header}`,
    alt: "kt_bodyImage",
 })`
    display: block;
    width: 100%;
    height: 400px;
    margin: 0px auto;
 `;

 const ChartContainer = styled.div`
  display: block;
  margin: 0 auto; 
 `;

const NavWrapper = styled.div`
    padding: 20px;
    color: black;
`;

const NavMenu = styled.div`
    margin-bottom: 2rem;
`;

const NavTitle = styled.h3`
    font-size: 1.9rem;
`;


 const Middle_gray = styled.div`
    display: inline-block;
    height: 100px;
    width: 100%;
    background-color: gray;
 `;

const Olist = styled.ol`
    font-size: 20px;
    font-weight: 700;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    list-style: none;
    padding: 0.5rem;
    margin: 0.5rem;
    &:hover{
        li{
            display: flex;        
        }
    }
`;

const NavList = styled.li`
    display: none;
`;

const List = styled.li`
    padding: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 10px;
    
    &:hover{
        background-color: #2BB7B3;
        transition: all 1s;
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

function Menu() {
    const contentMatch = useMatch("/Menu/*");
    const notMatch = useMatch("/");
    return (<div>
        <Header>
            <Link to={"/"}>
                <Img />
            </Link>
        <>
        <ListContainer>
        <Olist>
            IT 서포터즈 소개
            <NavList>gg</NavList>
            <NavList>zz</NavList>
        </Olist>
        <Olist>
            교육프로그램
            <NavList>하하</NavList>
            <NavList>후후</NavList>
        </Olist>
        <Olist>
            소리찾기/사랑의 봉사단
            <NavList>코코</NavList>
            <NavList>키키</NavList>
        </Olist>
        </ListContainer>
        <Olist>로그인</Olist>
        
        </>
        </Header>
        <Container>
        <Middle_bg></Middle_bg>
        <HeadOl>
            <HeadLi isActive={notMatch !== null}>디지털기초</HeadLi>
            <HeadLi isActive={notMatch !== null}>디지털생활</HeadLi>
            <HeadLi isActive={notMatch !== null}>디지털에듀</HeadLi>
            <HeadLi isActive={notMatch !== null}>디지털특화</HeadLi>
            <HeadLi isActive={notMatch !== null}>교육문의</HeadLi>
            <HeadLi isActive={contentMatch !== null}>온라인교육</HeadLi>
        </HeadOl>
        </Container>
        <BodyContainer>
            <NavBar>
                <NavWrapper>
                    <NavMenu>
                        <Olist>
                            <StyledLink to="/Menu/home/middle">
                                <NavTitle>
                                    키오스크 실전연습
                                </NavTitle>
                            </StyledLink>
                            <StyledLink to="/Menu/explain2">
                                <NavTitle>
                                    키오스크 설명서
                                </NavTitle>
                            </StyledLink>
                            <StyledLink to="/Menu/game">
                                <NavTitle>
                                    뇌활력 게임
                                </NavTitle>
                            </StyledLink>
                            <StyledLink to="/Menu/test">
                                <NavTitle>
                                    치매 테스트
                                </NavTitle>
                            </StyledLink>
                            <StyledLink to="/Menu/explain">
                                <NavTitle>
                                    미완성
                                </NavTitle>
                            </StyledLink>
                                <StyledLink to="/Menu/home"><List>식당</List></StyledLink>
                                <StyledLink to="/Menu/chart"><List>구매시설</List></StyledLink>
                                <StyledLink to="/Menu/"><List>교통시설</List></StyledLink>
                                <StyledLink to="/Menu/"><List>극장</List></StyledLink>
                                <StyledLink to="/Menu/chart"><List>은행</List></StyledLink>
                                <StyledLink to="/Menu/Cafe"><List>카페</List></StyledLink>
                                <StyledLink to="/Menu/chart"><List>업무</List></StyledLink>
                                <StyledLink to="/Menu/chart"><List>기타</List></StyledLink>
                                </Olist>
                                <StyledLink to="/Menu/chart"> 
                                    <Olist>
                                <NavTitle>
                                통계 보기
                                </NavTitle>
                            </Olist>
                        </StyledLink>
                    </NavMenu>
                </NavWrapper>
            </NavBar>
        <Body>
            <Outlet/>
        </Body>
        </BodyContainer>
        </div>
    );
}

export default Menu;