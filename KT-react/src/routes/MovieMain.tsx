import styled from "styled-components";
import {useEffect, useState} from "react";
import { makeImagePath } from "./utils";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { IAtomMovie, movieObj } from "./atom";
import { title } from "process";

const Container = styled.div`
  width: 50vw;
  height: 110vh;
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
  width: 13vw;
  height: 25vh;
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



const PosterImage=styled.img`
    width : 13.5rem;
    height : 20rem;
    padding : 1rem;
`;

const MovieName=styled.button`
  
  padding : 1rem 2rem;
  font-size : 20px;
  line-height: 2rem;
  background-color : ${props=>props.color};
  width:15rem;
height : 6rem;
`;

const MovieBox=styled.div`
    width:16rem;
    height:29rem;
    border : 0.2rem solid;
`;

const MovieContainer = styled.div`
  display:flex;
  flex-direction: column;
`;

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

function Movie(){
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState<IGetMoives>();
    const [movieRecoil, setMovieRecoil] = useRecoilState<IAtomMovie>(movieObj);
    const BoxClicked = (MovieTitle: string) => {
      setMovieRecoil({title:MovieTitle, seat:0,time:""});
      navigate("/Menu/home/hard/cgv/when");
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
            <Banner bgPhoto={makeImagePath(movies?.results[1].backdrop_path || "")}/>
            <div>
              <h2 style={{color:"#666666", display:"flex",justifyContent:"center"}}>가장 빨리 볼 수 있는 영화</h2>
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
              
              {movies?.results.slice(1,4).map((movie) => (
                <div style={{display:"flex",justifyContent:"center",flexDirection:"column",margin:"5px"}}>
                  <Box onClick={() => BoxClicked(movie.title)} bgPhoto={makeImagePath(movie?.poster_path)}>
                  </Box>
                  <p style={{borderTop:"1px solid #666666",fontSize:"20px"}}>{movie.title}</p>
                  <h3 style={{fontSize:"15px", borderTop:"1px solid #666666"}}>별점: <span style={{fontSize:"23px"}}>{movie.vote_average}</span></h3>
                </div>
              ))}
            </div>
          </div>
          <Button onClick={() => navigate("/Menu/home/hard")}>홈으로 가기</Button>
        </Container>
    //     <div style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
    //         <div style={{color: "white"}}>
    //             <img src={movies[0].large_cover_image}/>
    //         </div>
    //     <Container>
    //       {movies.map((movie) => (
    //         <MovieContainer>
    //             <div style={{display:"flex",justifyContent:"center"}}>
    //                 <img src={movie.large_cover_image} style={{width:"180px",height:"250px"}}/>
    //             </div>
    //          <h2>{movie.title}</h2>
    //          </MovieContainer>
    //       ))}
    //       </Container>
    //   </div>
    );
}

export default Movie;