import styled from "styled-components";
import {useState} from "react";

const PosterImage=styled.img`
    width : 13.5rem;
    height : 20rem;
    padding : 1rem;
`

const MovieName=styled.button`
padding : 1rem 2rem;
font-size : 20px;
line-height: 2rem;
background-color : ${props=>props.color};
width:15rem;
height : 6rem;
`

const MovieBox=styled.div`
    width:16rem;
    height:29rem;
    border : 0.2rem solid;
`

function Movie(){
    const [MNameColor1, setMNameColor1]=useState('white');
    const onClick1=()=>{
        MNameColor1==='white'?setMNameColor1('lightblue'):setMNameColor1('white');
    };
    const [MNameColor2, setMNameColor2]=useState('white');
    const onClick2=()=>{
        MNameColor2==='white'?setMNameColor2('lightblue'):setMNameColor2('white');
    };
    const [MNameColor3, setMNameColor3]=useState('white');
    const onClick3=()=>{
        MNameColor3==='white'?setMNameColor3('lightblue'):setMNameColor3('white');
    };
    const [MNameColor4, setMNameColor4]=useState('white');
    const onClick4=()=>{
        MNameColor4==='white'?setMNameColor4('lightblue'):setMNameColor4('white');
    };
    const [MNameColor5, setMNameColor5]=useState('white');
    const onClick5=()=>{
        MNameColor5==='white'?setMNameColor5('lightblue'):setMNameColor5('white');
    };
    const [MNameColor6, setMNameColor6]=useState('white');
    const onClick6=()=>{
        MNameColor6==='white'?setMNameColor6('lightblue'):setMNameColor6('white');
    };
    return (
        <div>
            <div style={{display:'flex'}}>
                <MovieBox>
                    <PosterImage src="/movie/avatar.jpg" alt="avatar"/>
                    <MovieName color={MNameColor1} onClick={onClick1}>아바타-물의 길</MovieName>
                </MovieBox>
                <MovieBox>
                    <PosterImage src="/movie/ghost.jpg" alt="ghost"/>
                    <MovieName color={MNameColor2} onClick={onClick2}>유령</MovieName>
                </MovieBox>
                <MovieBox>
                    <PosterImage src="/movie/hero.jpg" alt="hero"/>
                    <MovieName color={MNameColor3} onClick={onClick3}>영웅</MovieName>
                </MovieBox>
            </div>
            <div style={{display:'flex'}}>
            <MovieBox>
                    <PosterImage src="/movie/owl.jpeg" alt="owl"/>
                    <MovieName color={MNameColor4} onClick={onClick4}>올빼미</MovieName>
                </MovieBox>
                <MovieBox>
                    <PosterImage src="/movie/slamdunk.png" alt="slamdunk"/>
                    <MovieName color={MNameColor5} onClick={onClick5}>더 퍼스트 슬램덩크</MovieName>
                </MovieBox>
                <MovieBox>
                    <PosterImage src="/movie/todaynolove.jpeg" alt="todaynolove"/>
                    <MovieName color={MNameColor6} onClick={onClick6}>오늘 밤, 이 세계에서 사랑이 사라진다 해도</MovieName>
                </MovieBox>
            </div>
        </div>
        
    );
}

export default Movie;