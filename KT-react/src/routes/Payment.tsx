import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import pay1 from "../image/pay1.png";
import payComplete from "../image/PayComplete.png";

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

    
  const conClick = () => {
    setContent(false);
  };

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
                        <h1>결제가 완료되었습니다.</h1>
                        <img src={payComplete} alt="hi" style={{width:"100",height:"70%"}}/>
                    </div>
                    <div style={{width:"100%",height:"10vh", backgroundColor:"#666666"}}/>
                </Content>}
                
            </Container>
        </AnimatePresence>
    );

}

export default Payment;