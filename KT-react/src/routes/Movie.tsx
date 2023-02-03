import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";
import { Outlet, useMatch, useNavigate } from "react-router-dom";
import styled from "styled-components";
import MovieFood from "./MovieFood";
import MovieMain from "./MovieMain";
import MovieSeat from "./MovieSeat";
import MovieWhen from "./MovieWhen";

const Overlay = styled(motion.div)`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100%;
background-color: rgba(0, 0, 0, 0.5);
opacity: 0;
`;

const BigMovie = styled(motion.div)`
  position: absolute;
  width: 50vw;
  height: 110vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: #343333;
  color: white;
  border: 2px solid white;
  overflow: hidden;
`;

const SmallMovie = styled(motion.div)`
    position: absolute;
    width: 20vw;
    height: 40vh;
    right: 0;
    background-color: #343333;
    color: white;
    border: 2px solid white;
    overflow: hidden;
    margin-right: 20px;
`;

function Movie() {
    const navigate = useNavigate();
    const onOverlayClick = () => navigate("/Menu/home/hard");
    const modalMatch = useMatch("/Menu/home/hard/cgv/*");
    const modalMatch2 = useMatch("/Menu/home/hard/cgv");
    const [general, setGeneral] = useState(0);
    console.log(modalMatch);
    return (
        <AnimatePresence>
            {modalMatch ? 
                <>
                    <Overlay 
                    onClick={onOverlayClick}
                    exit={{opacity: 0}}
                    animate={{opacity:1}}/>
                    <div style={{display:"flex"}}>
                        <BigMovie 
                        style={{ top: 200 }}
                        >
                            {modalMatch2 ? <MovieMain/> : <Outlet/>}
                        </BigMovie>
                        <SmallMovie
                        style={{ top: 200 }}
                        >
                            <h1>이렇게 담아주세요!</h1>
                            <hr/>
                            <p><h2>영화 : </h2>Avatar: The Way of Water<br/>
                            <h2>시간대 : </h2>11:40 <br/>
                            <h2>좌석 수 : </h2> 3자리</p>

                        </SmallMovie>
                    </div>
                </> : <div></div>}
        </AnimatePresence>
    );
}

export default Movie;