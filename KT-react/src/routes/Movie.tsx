import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";
import { useMatch, useNavigate } from "react-router-dom";
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
  height: 95vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: white;
  border: 2px solid white;
  overflow: hidden;
  background-color: #666666;
`;

function Movie() {
    const navigate = useNavigate();
    const onOverlayClick = () => navigate(-1);
    const modalMatch = useMatch("/Menu/home/hard/cgv");
    const [general, setGeneral] = useState(0);
    
    const useScroll = () => {
        const [state, setState] = useState({
          x: 0, // x와 y의 초기값을 0으로 지정
          y: 450,
        });
        const onScroll = () => {
          setState({ x: window.scrollX, y: window.scrollY });
        };
        useEffect(() => {
          window.addEventListener("scroll", onScroll); // scorll할 때 onScroll 이벤트 핸들러 지정
          return () => window.removeEventListener("scroll", onScroll); // clean up
        }, []);
        return state;
      };
      const {y} = useScroll();

    return (
        <AnimatePresence>
            {modalMatch ? 
                <>
                    <Overlay 
                    onClick={onOverlayClick}
                    exit={{opacity: 0}}
                    animate={{opacity:1}}/>
                    <BigMovie 
                    style={{ top: y + 10 }}
                    layoutId={modalMatch.params as any}>
                        <MovieWhen/>
                    </BigMovie>
                </> : null}
        </AnimatePresence>
    );
}

export default Movie;