import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import monitor1 from "../image/monitor1.png";
import monitor2 from "../image/monitor2.png";

const HeadVariable = {
    initial:{
        opacity: 0,
        screenY: -1,
    },

    end:{
        opacity: 1,
        transition:{
            screenY: 0,
            delay: 0.5,
            duration: 1,
        }
    }
};

const Container = styled(motion.div)`
  display  : flex;
  flex-direction: column;
  width: 100vw;
`;

const BodyContainer = styled.div`
  display: flex;
  margin-top: 10vh;
`;

const Button = styled.button`
    display: inline-block;
    font-size: 36px;
    width: 160px;
    padding: 7px 0;
    border-radius: 16px;
    background-color: #a69eb0;
    color: #fff;
    letter-spacing: -1px;
    border: none;
`;


const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    font-weight: 800;
    &:focus, &hover, &:visited, &:link, &active{
        text-decoration: none;
    }
`;

function introduce(){
    return (
    <AnimatePresence>
    <Container
    variants={HeadVariable}
    initial="initial"
    animate="end">
        <span style={{fontSize:"40px",fontWeight:"300"}}>   
        키오스크 설명
        <hr/>
        </span>
        <BodyContainer>
            <img src={monitor1} alt="대체" style={{margin:"0 10vw",width:"40vw", height: "60vh"}}/>
            <div>
                <h3 style={{fontSize:"25px"}}>
                <span style={{fontSize:"40px",color:"#a69eb0", marginRight:"15px"}}>
                    01
                </span>
                여러 키오스크 체험하기
                </h3>
                <div style={{width:"30vw"}}>
                    <p style={{fontSize:"20px",fontFamily:"seoul-hangang-jung-m!important" ,wordBreak:"keep-all",lineHeight:"1.3"}}>
                        <br/><br/>
                        리액트를 학습하며 제작한 시니어대상의 키오스크 연습 페이지 입니다.
                        <br></br><br/>
                        미션이 주어지고, 주어진 미션대로 키오스크 주문을 완료하면 성공입니다.
                        <br/><br/>
                    </p>
                </div>
                <StyledLink to="/Menu/home/hard"><Button>Go to</Button></StyledLink>
            </div>
        </BodyContainer>
        <hr></hr>
        <BodyContainer>
            
            <div>
                <h3 style={{fontSize:"25px"}}>
                <span style={{fontSize:"40px",color:"#a69eb0", marginRight:"15px"}}>
                    02
                </span>
                뇌활력 게임 체험하기
                </h3>
                <div style={{width:"30vw",marginLeft:"70px"}}>
                    <p style={{fontSize:"20px",wordBreak:"keep-all",lineHeight:"1.3"}}>
                        <br/><br/>
                        남녀노소 즐길 수 있는 뇌활력 게임입니다.
                        <br></br><br/>
                        주어진 시간 동안, 최대한 많이 클리어 해보세요!
                        <br/><br/>
                    </p>
                </div>
                <StyledLink to="/Menu/home/gamechoice/game"><Button>Go to</Button></StyledLink>
            </div>
            <img src={monitor2} alt="대체" style={{margin:"0 auto",width:"40vw", height: "60vh"}}/>
        </BodyContainer>
    </Container>
    </AnimatePresence>
    )
}

export default introduce;