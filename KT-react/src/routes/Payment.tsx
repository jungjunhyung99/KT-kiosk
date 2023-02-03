import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import pay1 from "../image/pay1.png";
import payComplete from "../image/PayComplete.png";
import { cafeObj, IAtomCafe } from "./atom";

const Container = styled(motion.div)`
  display: flex;
  flex-direction  : column;
  justify-content: center;
  align-items: center;
`;

const Content = styled(motion.div)`
    width: 100%;    
`;

const imgVariable = {
    hidden: {
      scale: 1,
    },
    visible: {
      scale: 1,
    },
    exit: {
      scale: 0,
    },
  };


function Payment() {
    const [content, setContent] = useState(true);
    const menu = useRecoilValue<IAtomCafe[]>(cafeObj);
    const answer :IAtomCafe[] = [
      {
        name:"아메리카노",
        quantity: 3,
      },
      {
        name:"티라미수 케잌",
        quantity: 1,
      },
      {
        name: "청포도 에이드",
        quantity: 2,
      },
    ];

  const [message, setMessage] = useState<string[]>([]);
  
  const print = (obj: IAtomCafe[]) => {
    for(let i = 0 ; i < answer.length ; i++){
      for(let j = 0; j < obj.length; j++){
        if(answer[i].name == obj[j].name && answer[i].quantity == obj[j].quantity){ 
          setMessage(["주문 성공!"]);
        }
        else if(j === obj.length){
          setMessage([...message,`${answer[i].name}주문 실패...`]);
        }
      }
    }
  };

  const conClick = () => {
    setContent(false);
  };

  useEffect(()=>{
    print(menu);
  },[]);
  

    return (
        <AnimatePresence>
            <Container onClick={conClick}
            >
                {content ? <Content
                variants={imgVariable}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{type: "spring", duration: 3}}
                layoutId="content"
                >
                    <div style={{width:"100%",height:"10vh", backgroundColor:"black"}}/>
                    <div style={{width:"100%", height:"75vh", display:"flex", alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
                        <h1>화면을 클릭해주세요</h1>
                        <img src={pay1} alt="hi"/>
                    </div>
                    <div style={{width:"100%",height:"10vh", backgroundColor:"#666666"}}/>
                </Content>
                : 
                <Content
                layoutId="content">
                    <div style={{width:"100%",height:"10vh", backgroundColor:"black"}}/>
                    <div style={{width:"100%", height:"75vh", display:"flex", alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
                        {message.map((mes) => <h2>{mes}</h2>)}
                    </div>
                    <div style={{width:"100%",height:"10vh", backgroundColor:"#666666"}}/>
                </Content>}
                
            </Container>
        </AnimatePresence>
    );
}

export default Payment;