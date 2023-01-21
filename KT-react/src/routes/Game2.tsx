import { AnimatePresence, motion, useScroll} from "framer-motion";
import { useEffect, useState } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {balloon} from "../game";
import Tiramisu from "../image/Tiramisu.png";

interface IBallon {
    
}

const MainContainer = styled.div`
  display:flex;
  justify-content: center;
  flex-direction:column;
  align-items: center;
`;

const reload = () => {

};

const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-template-rows: repeat(4,1fr);
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
  background-color: #A43433;
`;

interface Iscroll {
    x: number;
    y: number;
}

const ballColor = {
    color: ["노란색","빨간색","초록색","파란색"],
};



function Game2() {

  const randColor = () => {
    

    if(selColor.length === 1) return;
    let colorIndex = Math.floor(Math.random()*ballColor.color.length);
    let colorIndex2 = Math.floor(Math.random()*ballColor.color.length);
    setColor([ballColor.color[colorIndex],ballColor.color[colorIndex2]]);
    return [ballColor.color[colorIndex],ballColor.color[colorIndex2]];
    };  
    const navigate = useNavigate();
    const modalMatch = useMatch("/Menu/gamechoice/game");
    const onOverlayClick = () => navigate(-1);
    const [selColor, setColor] = useState<string[]>([]);
    const [score, setScore] = useState(0);
    const [fontColor,setFontColor] = useState<string[]>(["green","red"]);    
    
    const changeFontColor = (colorIdx:string[]) => {
      if(selColor.length === 1) return;
      const color = ["yellow","red","green","blue"];
      for(let i = 0; i < 2; i++){
      let index = Math.floor(Math.random()*color.length);
      let index2 = Math.floor(Math.random()*color.length-1);
      setFontColor([color[index],color[index2]]);
      if(colorIdx[i] === "노란색" && index === 0){
        setFontColor([color.slice(1,4).at(index2) as string,...fontColor]);
      }
      else if(colorIdx[i] === "빨간색" && index === 1){
        setFontColor([[...color.slice(0,1), ...color.slice(2,4)].at(index2) as string, ...fontColor]);
      }
      else if(colorIdx[i] === "초록색" && index === 2){ 
        setFontColor([[...color.slice(0,2), ...color.slice(3)].at(index2) as string, ...fontColor]);
      }
      else if(colorIdx[i] === "파란색" && index === 3){
        setFontColor([color.slice(0,3).at(index2) as string,...fontColor]);
      }}
    };

    useEffect(() => {
      randColor();
      changeFontColor(selColor);
      suffle();
    },[selColor.length === 0]);

    const suffle = () => {
      balloon.sort(() => Math.random() - 0.5);
    };

    const suffleColor = () => {
      
    };

    const useScroll = () => {
        const [state, setState] = useState<Iscroll>({
          x: 0, // x와 y의 초기값을 0으로 지정
          y: 0,
        });
        const onScroll = () => {
          setState({ x: window.scrollX, y: window.scrollY });
        };
        // useEffect(() => {
        //   window.addEventListener("scroll", onScroll); // scorll할 때 onScroll 이벤트 핸들러 지정
        //   return () => window.removeEventListener("scroll", onScroll); // clean up
        // }, []);
        
        return state;
      };
    const {y} = useScroll();

    const changing = (ballName: string) => {
      const arr = selColor;
      for(let i = 0 ; i < selColor.length; i++){
        if(arr[i] === ballName){
          arr.splice(i,1);
          fontColor.splice(i,1);          
          console.log(selColor);
          setScore((prev) => prev+1);
        }
        else{
          if(i === 2){ // 주의 깊게 보기 
          setScore((prev) => prev - 2);
        }
        }
      }
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
                  <h1 style={{color:"white"}}>인지력 게임</h1>
                  <MainContainer>
                    <div style={{margin:"0 auto", display:"flex", flexDirection:"column"}}>
                      <h1 style={{margin: "0 auto",color:"white", fontSize:"90px", fontWeight:"800"}}>
                        {score}
                      </h1>
                      <h1 style={{margin: "0 auto", color: "white"}}>
                        score
                      </h1>
                    </div>
                    <div style={{display:"flex", justifyContent:"center"}}>{selColor.map((colorIdx,index) => <h1 key={index} style={{margin:"15px",color:fontColor[index]}}>
                      {colorIdx}
                      </h1>)}
                    </div>
                    <Row>
                        {balloon.map((ball) => <Box onClick={() => changing(ball.name)} bgPhoto={init(ball.img)}></Box>)}
                    </Row>
                  </MainContainer>  
                </BigMovie>
              </>
            ) : null}
          </AnimatePresence>
    </div>
    );
}

export default Game2;