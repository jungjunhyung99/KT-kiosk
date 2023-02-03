import styled from "styled-components";
import {useEffect, useState} from "react";
import { makeImagePath } from "./utils";
import { useRecoilState } from "recoil";
import { IAtomMovie, movieObj } from "./atom";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 50vw;
  height: 110vh;
`;

const TimeBox = styled.div`
  display:flex;
  align-items: center;
  margin-right: 10px;
  margin-top: 5px;
  justify-content: center;
  border: 1px solid #666666;
  width: 9vw;
  height: 6vh;
`;

const Button = styled.button`
    font-size: 25px;
    width: 30vw;
    padding: 7px 0;
    border-radius: 16px;
    background-color: #666666;
    color: #fff;
    letter-spacing: -1px;
    border: none;
    margin-top: 8vh;
`;

const Box = styled.div<{bgPhoto: string}>`
  display: flex;
  width: 8vw;
  height: 19vh;
  background-image:
  url(${(props) => props.bgPhoto});
  background-size: cover;
  margin: 10px;
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

const Footer = styled.div`
  display: flex;
  background-color:#454444;
  width: 100%;
  height: 9vh;
`;

const BackButton = styled.button`
  font-size: 40px;
  color: white;
  font-weight: 800;
  background-color: #454444;
  border: none;
  margin-left: 10px;
`;

const HomeButton = styled.button`
  font-size: 40px;
  color: white;
  font-weight: 800;
  background-color: #454444;
  border: none;
  margin-left: 10px;
`;

const when = 
  {
      time: ["11:40", "12:55","14:05","15:20","16:35"],
      seat: ["26/218", "26/218", "26/218", "26/218", "26/218"]
  };

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


interface IMovie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
  vote_average: number;
}

function MovieWhen() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState<IGetMoives>();
  const [movieRecoil, SetMovieRecoil] = useRecoilState<IAtomMovie>(movieObj);
  const TimeClick = (timeline:string) => {
    SetMovieRecoil({title:movieRecoil.title, seat:0,time:timeline});
    navigate("/Menu/home/hard/cgv/seat");
  
  };
    const getMovies = async () => {
      const json = await (
        await fetch(
            `https://api.themoviedb.org/3/movie/now_playing?api_key=1e1dd98e7bbdb858a49359dbec86444f`
        )
        
      ).json();
      setMovies(json);
    console.log(json);
    };

    useEffect(() => {
      getMovies();
    }, []);
  
  return (
    <Container>
          <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
            <Banner bgPhoto={makeImagePath(movies?.results[4].backdrop_path || "")}/>
            {movies?.results.slice(1,4).map((movie) => (
               <div style={{display:"flex",justifyContent:"center",alignContent:"center"}}>
              <Box bgPhoto={makeImagePath(movie?.poster_path)}>
              </Box>
              <div style={{display:"flex", flexDirection:"column"}}>
                <div style={{display:"block",left:"0",top:"0"}}>
                  <p style={{fontWeight:"500",fontSize:"20px"}}>{movie.title}</p>
                </div>
                <div style={{display:"flex", flexWrap:"wrap"}}>
                  {when.time.map((time,index) => <TimeBox onClick={() => TimeClick(time)}>
                    <p>
                    {when.time[index]}
                    <br/>
                    {when.seat[index]}
                    </p>
                    </TimeBox>)}
                </div>
              </div>
              </div>
              ))}
          </div>
          <Footer>
            <BackButton>←</BackButton>
            <HomeButton></HomeButton>
          </Footer>
        </Container>   
  );
}

export default MovieWhen;