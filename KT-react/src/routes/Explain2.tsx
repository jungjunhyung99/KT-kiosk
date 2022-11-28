import {AnimatePresence, motion, useScroll, useViewportScroll} from "framer-motion";
import styled from "styled-components";
import useQuery from "react-query";
import Americano from "../image/americano.png"
import CGV from "../image/CGV.jpg";
import Ramen from "../image/Ramen.jpg";
import { useMatch, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import Cafe from "./Cafe";

const Container = styled(motion.div)`
    background: gray;
`;

const Info = styled(motion.div)`
  padding: 10px;
  opacity: 0;
  position: absolute;
  background-color: "#2F2F2F";
  width: 100%;
  bottom: 0;
  h4 {
    text-align: center;
    font-size: 18px;
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 130%; // 수정 필요
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`;

const BigMovie = styled(motion.div)`
  position: absolute;
  width: 70vw;
  height: 90vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: white;
  border: 2px solid white;
`;


const Box = styled(motion.div)<{bgPhoto: string}>`
    background-image: url(${(props)=>props.bgPhoto});
    background-size: cover;
    height: 200px;
    font-size: 66px;
    cursor: pointer;
    background-position: center center;
    border: 2px solid;
`;

const Row = styled(motion.div)`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(3,1fr); 
  width: 60%;
`;

const boxVariant = {
    initial: {
        scale:1,
    },
    hover: {
        scale: 1.3,
        transition: {
            delay: 0.5,
            duration: 0.1,
            type: "tween",
        },
    },
};

const infoVariants = {
    initial:{
        opacity: 0,
    },
    hover: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duaration: 0.1,
        type: "tween",
      },
    },
  };

const rowVariants = {
    hidden: {
      x: window.outerWidth + 2,
    },
    visible: {
      x: 0,
    },
    exit: {
      x: -window.outerWidth - 2,
    },
  };

const image = [CGV, Americano, Ramen, Ramen];

const kioskObj = [
    {
        id: "1", 
        sub:"CGV 요약본입니다.",
        img: image[0],
        name: "CGV",
    },
    {
        id: "2", 
        sub:"Cafe 요약본입니다.",
        img: image[1],
        name: "Cafe",
    },
    {
        id: "3", 
        sub:"식당 예약본입니다.",
        img: image[2],
        name: "식당",
    },
    
    {
        id: "4", 
        sub:"식당2 예약본입니다.",
        img: image[3],
        name: "식당",
    },
    
    {
        id: "5", 
        sub:"식당2 예약본입니다.",
        img: image[1],
        name: "식당",
    },
    {
        id: "6", 
        sub:"식당2 예약본입니다.",
        img: image[2],
        name: "식당",
    },
    {
        id: "7", 
        sub:"식당2 예약본입니다.",
        img: image[2],
        name: "식당",
    },
];

interface Ikiosk {
    id: number;
    sub: string;
    img: string;
    name: string;
}

const offset = 3;

function Explain2 () {
    const navigate = useNavigate();
    const modalMatch = useMatch("/Menu/explain/:objId");
    const [index, setIndex] = useState(0);
    const [leaving, setLeaving] = useState(false);
    const {scrollY} = useScroll();
    const increaseIndex = () => {
        if (kioskObj){
            if(leaving) return;
            toggleLeaving();
            const totalKiosk = kioskObj.length - 1;
            const maxIndex = Math.floor(totalKiosk / offset) - 1;
            setIndex((prev) => (prev === maxIndex ? 0 : prev +1));
        }
    };

    const toggleLeaving = () => setLeaving((prev) => !prev);
    const onOverlayClick = () => navigate(-1);
    const onBoxClicked = (objId : string) => {
     navigate(`/Menu/explain/${objId}`);
    };

    return (
          <>
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>    
            <button onClick={increaseIndex}></button>
            <Row
            variants={rowVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{type: "tween", duration: 1}}
            key={index}
            >
                {kioskObj.slice(offset * index, offset * index + offset).map((obj) => 
                <Box 
                layoutId={obj.id + ""}
                bgPhoto={obj.img} 
                key={obj.id}
                variants={boxVariant} initial whileHover="hover" 
                transition={{type:"tween"}}
                onClick={() => onBoxClicked(obj.id)}  >
                    
                <Info variants={infoVariants}>
                    <h4>{obj.sub}</h4>
                </Info> 
                </Box>
                )}
            </Row>
        </AnimatePresence>
        <AnimatePresence>
            {modalMatch ? (
              <>
                <Overlay
                  onClick={onOverlayClick}
                  exit= {{opacity: 0}}
                  animate={{opacity:1}}
                />
                <BigMovie
                  style={{ top: scrollY.get() + 100 }}
                  layoutId={modalMatch.params as any}
                >
                  <Cafe/>
                </BigMovie>
              </>
            ) : null}
          </AnimatePresence>
          </>
        );
}

export default Explain2;