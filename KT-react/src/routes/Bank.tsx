import { AnimatePresence, motion, useScroll} from "framer-motion";
import { useEffect, useState } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {balloon} from "../game";
import Tiramisu from "../image/Tiramisu.png";

interface IBallon {
    
}

const reload = () => {

};

const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: repeat(3,1fr);
    margin: 0 40px;
    height: 80%;
    width: 70%;
`;

const Overlay = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%; // 수정 필요
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`;

const Box = styled(motion.div)<{bgPhoto: string}>`
    background-image: url(${(props)=>props.bgPhoto});
    background-size: cover;
    height: 15vh;
    width: 8vw;
    font-size: 30px;
    cursor: pointer;
    background-position: center center;
    margin: 0 auto;
    
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
`;

interface Iscroll {
    x: number;
    y: number;
}

function Game2() {
    const navigate = useNavigate();
    const [ball, setBall] = useState(balloon);
    const modalMatch = useMatch("/Menu/gamechoice/game");
    const onOverlayClick = () => navigate(-1);
    const useScroll = () => {
        const [state, setState] = useState<Iscroll>({
          x: 0, // x와 y의 초기값을 0으로 지정
          y: 0,
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
    const changing = () => {
      init(Tiramisu);
    };

    const init = (img : any) => {
      return img;
    };
    
      return (
    <div>
        <AnimatePresence>
            {modalMatch ? (
              <>
                <Overlay
                  onClick={onOverlayClick}
                  exit= {{opacity: 0}}
                  animate={{opacity:1}}
                />
                <BigMovie
                  style={{ top: y + 10 }}
                  layoutId={modalMatch.params as any}
                >
                  <h1 style={{color:"white"}}>번호표를 발급 받으세요</h1>
                  <div style={{display:"flex", justifyContent:"center"}}>
                    
                  </div>  
                </BigMovie>
              </>
            ) : null}
          </AnimatePresence>
    </div>
    );
}

export default Game2;