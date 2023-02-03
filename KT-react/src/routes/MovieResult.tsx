import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { IAtomMovie, movieObj } from "./atom";
import { makeImagePath } from "./utils";


const Container = styled.div`
  width: 50vw;
  height: 110vh;
  
`;


const Banner = styled.div<{bgPhoto: string}>`
height: 25vh;
width: 50vw;
display: flex;
flex-direction: column;
justify-content: center;
padding: 60px;
background-image:
  url(${(props) => props.bgPhoto});
background-size: cover;
`;


interface IMovie {
    id: number;
    backdrop_path: string;
    poster_path: string;
    title: string;
    overview: string;
    vote_average: number;
  }

interface IGetMoives{
    dates:{
      maximum: string;
      minimum: string;
    }
    page: number;
    results: IMovie[];
    total_page: number;
    total_results: number;
  }

function MovieResult() {
    const result = useRecoilValue<IAtomMovie>(movieObj);
    const [movies, setMovies] = useState<IGetMoives>();
    const getMovies = async () => {
        const json = await (
          await fetch(
              `https://api.themoviedb.org/3/movie/now_playing?api_key=1e1dd98e7bbdb858a49359dbec86444f`
          )
          
        ).json();
        setMovies(json);
      };
      
    useEffect(() => {
        getMovies();
      }, []);

    return (
        <Container>
        <div style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
             <Banner bgPhoto={makeImagePath(movies?.results[1].backdrop_path || "")}/>
            <div style={{display:"flex", flexDirection:"column", alignContent:"center",marginTop:"60px"}}>
            {result.title !== "Avatar: The Way of Water" ? 
            <div><span style={{fontSize:"20px"}}><p style={{fontSize:"35px",fontWeight:"800"}}>{result.title}</p>를 선택 안하셨네요!</span></div>
             : <div><span style={{fontSize:"20px"}}><p style={{fontSize:"35px",fontWeight:"800",color:"#2BB7B3"}}>영화제목 성공!</p></span></div>}
            {result.time !== "11:40" ? 
            <div><span style={{fontSize:"20px"}}><p style={{fontSize:"35px",fontWeight:"800"}}>{result.time}</p>를 선택 안하셨네요!</span></div>
            : <div><span style={{fontSize:"20px"}}><p style={{fontSize:"35px",fontWeight:"800",color:"#2BB7B3"}}>시간 선택 성공!</p></span></div>}
           {result.seat !== 3 ? <div><span style={{fontSize:"20px"}}><p style={{fontSize:"35px",fontWeight:"800"}}>{result.seat}개의 좌석을 선택 안하셨네요!</p></span></div>
             : <div><span style={{fontSize:"20px"}}><p style={{fontSize:"35px",fontWeight:"800",color:"#2BB7B3"}}>좌석 선택 성공!</p></span></div>}
            </div>
        </div>
        </Container>
    );
}

export default MovieResult;