import {AnimatePresence, motion} from "framer-motion";
import styled from "styled-components";
import useQuery from "react-query";
import Americano from "../image/americano.png"
import Espresso from "../image/Espresso.jpg";
import SweetPo from "../image/SweetPo.jpg";
import Latte from "../image/Latte.jpg";
import IceTea from "../image/IceTea.jpg";
import { useMatch, useNavigate, useParams } from "react-router-dom";
import { useLayoutEffect, useState } from "react";
import { useEffect } from "react";

const Container = styled(motion.div)`
    width:100%;
    height: 100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    margin: 50px;
`;

const MenuContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    font-size: 20px;
    align-items: center;
`;

const OrderSlider = styled(motion.div)`
  display: flex; 
`;

const Payment = styled.div`
    display: flex;
    width: 230px;
    height: 150px;
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
    height: 160px;
    width: 160px;
    font-size: 30px;
    cursor: pointer;
    background-position: center center;
    margin: 0 auto;
    border: 2px solid;
`;

const SmallBox = styled(motion.div)<{bgPhoto: string}>`
    background-image: url(${(props)=>props.bgPhoto});
    background-size: cover;
    height: 70px;
    width: 70px;
    font-size: 66px;
    cursor: pointer;
    background-position: center center;
    border: 2px solid;
`;

const Row = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2,0.33fr);
  grid-template-rows: repeat(3,0,5fr);
  margin-bottom: 5vh;
`;

const Order = styled(motion.div)`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(6, 1fr);
  width: 60%;
`;

const Selection = styled(motion.div)`
    height: 40vh;
    background-color: black;
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

const smboxVariant = {
    initial: {
        opacity:0,
    },
    end: {
        opacity: 1,
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
      x: window.outerWidth + 5,
    },
    visible: {
      x: 0,
    },
    exit: {
      x: -window.outerWidth - 5,
    },
  };

const image = [Americano, SweetPo, Espresso, Latte,IceTea];

const kioskObj = [
    {
        id: "0", 
        sub:"CGV 요약본입니다.",
        img: image[0],
        name: "아메리카노",
        cost: 3500,
        selected: false,
        quantity: 1,
    },
    {
        id: "1", 
        sub:"Cafe 요약본입니다.",
        img: image[1],
        name: "고구마라떼",
        cost: 4000,
        selected: false,
        quantity: 1,
    },
    {
        id: "2", 
        sub:"식당 예약본입니다.",
        img: image[2],
        name: "에스프레소",
        cost: 3000,
        selected: false,
        quantity: 1,
    },
    
    {
        id: "3", 
        sub:"식당2 예약본입니다.",
        img: image[3],
        name: "카페라떼",
        cost: 4000,
        selected: false,
        quantity: 1,
    },

    {
        id: "4", 
        sub:"식당2 예약본입니다.",
        img: image[4],
        name: "아이스티",
        cost: 3000,
        selected: false,
        quantity: 1,
    },
    
];

interface Ikiosk {
    id: string;
    sub: string;
    img: any;
    name: string;
    cost: number;
    selected: boolean;
    quantity: number;
}

// const Overlay = styled(motion.div)`
//   position: fixed;
//   top: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.5);
//   opacity: 0;
// `;

const offset = 6;

function Cafe () {
    const navigate = useNavigate();
    const modalMatch = useMatch("/Menu/explain/:objId");
    const selectionMatch = useMatch("/Menu/explain/:objId/selection");
    const [index, setIndex] = useState(0);
    const [leaving, setLeaving] = useState(false);
    const [cost, setCost] = useState(0);
    const [choice, setChoice] = useState<Ikiosk[]>([]);
    const toggleLeaving = () => setLeaving((prev) => !prev);

    const increaseIndex = (array:Ikiosk[]) => {
        if (kioskObj){
            if(leaving) return;
            console.log(index)
            toggleLeaving();
            const totalKiosk = array.length - 1;
            const maxIndex = Math.floor(totalKiosk / offset) - 1;
            setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
        }
    };

    const onBoxClicked = (objId : string) => {
        const boxCopy = choice;
        for(let i = 0; i < choice.length; i++){
            if(boxCopy[i].id === objId){
                boxCopy[i].quantity++;
                setChoice([...boxCopy]);
                const costCopy = cost;
                setCost(costCopy + kioskObj[Number(objId)].cost);
                return ;
            }
        }
        //navigate(`/Menu/explain/${objId}/selection`);
        const costCopy = cost;
        setChoice([...boxCopy,kioskObj[Number(objId)]]);
        console.log(choice);
        setCost(costCopy + kioskObj[Number(objId)].cost);
    };
    

    useEffect(() => {
        
    },[choice])

    return (
        <AnimatePresence initial={false} onExitComplete={toggleLeaving}>    
            <Container>
            <Row
            >
                {kioskObj.map((obj) => 
                <MenuContainer>
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
                <div>
                    <div style={{fontSize:"23px", fontWeight:"bold"}}>{obj.name}</div>
                    <span>{obj.cost}원</span>
                </div>
                </MenuContainer>
                )}
            </Row>
            <OrderSlider
            variants={rowVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{type: "tween", duration: 1}}
            key="row"
            >    
                <Order key="order" layoutId="row">
                    {choice.slice(offset * index, offset * index + offset).map((choice) => 
                    <MenuContainer>
                    <SmallBox
                    bgPhoto={choice.img} 
                    key={choice.id}
                    variants={smboxVariant} initial animate="exit"
                    transition={{type:"tween"}}
                >          
                    </SmallBox>
                    <div style={{margin: "0 auto", fontSize: "25px", fontWeight:"bold"}}>{choice.quantity}</div>    
                    </MenuContainer>)}
                </Order>
                <button onClick={() => increaseIndex(choice)}>next</button>
            </OrderSlider>
            <h1>가격: {cost}</h1>
            </Container>
        </AnimatePresence>
    );
}

export default Cafe;