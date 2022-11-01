import React, { useState} from 'react';
import Box from '@mui/material/Box';
import '../Explain.css';

function Explain() {

    return (
        <>
        <h1 className="explain1">키오스크 설명서</h1>
        
        <Box className="first"
            sx={{
                width: 300,
                height: 600,
            }}>
            <img src="/img/냐옹1.png" width={300} height={300}/>
            <h3>사용법 1</h3>
            먹고싶은 메뉴를 선택한다
            
         </Box>

         <Box className="second"
            sx={{
                width: 300,
                height: 600,
            }}>
            <img src="/img/냐옹2.png" width={300} height={300}/>
            <h3>사용법 2</h3>
            먹고싶은 메뉴를 선택한다
         </Box>

         <Box className="third"
            sx={{
                width: 300,
                height: 600,
            }}>
            <img src="/img/냐옹3.png" width={300} height={300}/>
            <h3>사용법 3</h3>
            먹고싶은 메뉴를 선택한다
         </Box>

         <Box className="fourth"
            sx={{
                width: 300,
                height: 600,
            }}>
            <img src="/img/냐옹4.png" width={300} height={300}/>
            <h3>사용법 4</h3>
            먹고싶은 메뉴를 선택한다
         </Box>
         <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
         <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
         <div className="slider-wrap">
         <div className="cont">1</div>
         <div className="cont">2</div>
         <div className="cont">3</div>
        <div className="cont">4</div>
        <div className="cont">5</div>
        </div>
        
        
        
                </>
    )
}

export default Explain;