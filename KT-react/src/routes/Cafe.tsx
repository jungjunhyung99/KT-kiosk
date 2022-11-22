import {AnimatePresence, motion} from "framer-motion";
import styled from "styled-components";
import useQuery from "react-query";
import Americano from "../image/americano.png"
import CGV from "../image/CGV.jpg";
import Ramen from "../image/Ramen.jpg";
import { useMatch, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const Container = styled(motion.div)`
    width:100%;
    display:flex;
    flex-direction: column;
    margin: 50px;
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

const Box = styled(motion.div)<{bgPhoto: string}>`
    background-image: url(${(props)=>props.bgPhoto});
    background-size: cover;
    height: 200px;
    width: 200px;
    font-size: 66px;
    cursor: pointer;
    background-position: center center;
    border: 2px solid;
`;

const SmallBox = styled(motion.div)<{bgPhoto: string}>`
    background-image: url(${(props)=>props.bgPhoto});
    background-size: cover;
    height: 50px;
    width: 50px;
    font-size: 66px;
    cursor: pointer;
    background-position: center center;
    border: 2px solid;
`;

const Row = styled(motion.div)`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(3,1fr);
  grid-template-rows: repeat(2,1fr); 
  width: 60%;
  margin-bottom: 30px;
`;

const Order = styled(motion.div)`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(6, 1fr);
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
        id: "0", 
        sub:"CGV 요약본입니다.",
        img: image[0],
        name: "CGV",
        cost: 3000,
        selected: false,
    },
    {
        id: "1", 
        sub:"Cafe 요약본입니다.",
        img: image[1],
        name: "Cafe",
        cost: 4000,
        selected: false,
    },
    {
        id: "2", 
        sub:"식당 예약본입니다.",
        img: image[2],
        name: "식당",
        cost: 2000,
        selected: false,
    },
    
    {
        id: "3", 
        sub:"식당2 예약본입니다.",
        img: image[3],
        name: "식당",
        cost: 1000,
        selected: false,
    },
    
    {
        id: "4", 
        sub:"식당2 예약본입니다.",
        img: image[1],
        name: "식당",
        cost: 6000,
        selected: false,
    },
    {
        id: "5", 
        sub:"식당2 예약본입니다.",
        img: image[2],
        name: "식당",
        cost: 3000,
        selected: false,
    },
    {
        id: "6", 
        sub:"식당2 예약본입니다.",
        img: image[2],
        name: "식당",
        cost: 7000,
        selected: false,
    },
];

interface Ikiosk {
    id: string;
    sub: string;
    img: any;
    name: string;
    cost: number;
    selected: boolean;
}

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`;


const offset = 3;

function Cafe () {
    const navigate = useNavigate();
    const modalMatch = useMatch("/Menu/:objId");
    const [index, setIndex] = useState(0);
    const [leaving, setLeaving] = useState(false);
    const [cost, setCost] = useState(0);
    const [choice, setChoice] = useState<Ikiosk[]>([]);
    const toggleLeaving = () => setLeaving((prev) => !prev);

    const increaseIndex = () => {
        if (kioskObj){
            if(leaving) return;
            toggleLeaving();
            const totalKiosk = kioskObj.length - 1;
            const maxIndex = Math.floor(totalKiosk / offset) - 1;
            setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
        }
    };

    const onBoxClicked = (objId : string) => {
        const boxCopy = choice;
        const costCopy = cost;
        setChoice([...boxCopy,kioskObj[Number(objId)]]);
        console.log(choice);
        setCost(costCopy + kioskObj[Number(objId)].cost);
    };

    return (
        <AnimatePresence initial={false} onExitComplete={toggleLeaving}>    
            <Container>
            <Row
            variants={rowVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{type: "tween", duration: 1}}
            key="row"
            >
                {kioskObj.map((obj) => 
                <Box 
                bgPhoto={obj.img} 
                key={obj.id}
                variants={boxVariant} initial whileHover="hover" 
                transition={{type:"tween"}}
                onClick={() => onBoxClicked(obj.id)}>
                    
                <Info variants={infoVariants}>
                    <h4>{obj.sub}</h4>
                </Info> 
                </Box>
                )}
            </Row>
            <Order key="order" layoutId="row">
                {choice.map((choice) => <SmallBox
                bgPhoto={choice.img} 
                key={choice.id}
                variants={boxVariant} initial whileHover="hover" 
                transition={{type:"tween"}}
                onClick={() => onBoxClicked(choice.id)}
                >                
                </SmallBox>)}
            </Order>
            <h1>가격: {cost}</h1>
            </Container>
        </AnimatePresence>
        
    );
}

export default Cafe;