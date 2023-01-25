import Takeout from "../image/Takeout.jpg";
import Mug from "../image/Mug.jpg";
import styled from "styled-components";
import {AnimatePresence, motion, useScroll, useViewportScroll} from "framer-motion";
import { useEffect, useState } from "react";


const Take = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  max-width: 60vw;
  min-height: 100vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: white;
  border: 2px solid white;
`;

function TakeOut() {
    const [data,useData] = useState<any>();
    useEffect(()=>{
        fetch("http://minho2618.dothome.co.kr/test1/api/kiosk_answer.php?store=burger&level=middle")
        .then((res) => res.json()).then((api) => {console.log(api);})
    },[]);
    return (
        <div>
            {}
        </div>
    );
}


export default TakeOut;