import React, { useState} from 'react';
import './Icecream_cone.css';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';

function Icecream_cone() { 
    const navigate = useNavigate();

    const onClickIcecream_name = () => {
        navigate('/Icecream_name');
    }

    const onClickIcecream_cone = () => {
        navigate('/Icecream_cone');
    }

    const onClickIcecream_bar = () => {
        navigate('/Icecream_bar');
    }

    const onClickIcecream_cup = () => {
        navigate('/Icecream_cup');
    }

    const onClickIcecream_pencil = () => {
        navigate('/Icecream_pencil');
    }

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
              }));  

    return (
        <>
             <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
            <Box className="title" gridColumn="span 8"
                sx={{
                    left: -7,
                    width: 1480,
                    height: 50,
                    top:-10,
                }}>  
                <Button className="name" onClick={onClickIcecream_name}>Icecream</Button>
                </Box>
                </Box>

            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
            <Box className="menu" gridColumn="span 8"
                sx={{
                    left: -7,
                    width: 1480,
                    height: 50,
                    top:-10,
                }}>  
                <Button>
                    <Button className="cone" onClick={onClickIcecream_cone}>콘</Button>
                    <div class="v-line1"></div>
                    <Button className="bar" onClick={onClickIcecream_bar}>바</Button>
                    <div class="v-line2"></div>
                    <Button className="cup" onClick={onClickIcecream_cup}>컵</Button>
                    <div class="v-line3"></div>
                    <Button className="pencil" onClick={onClickIcecream_pencil}>펜슬</Button>
                 </Button>
            </Box>
            </Box>

            <Box className="kind" display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
            <Box className="first" gridColumn="span 8"
                sx={{
                    width: 100,
                    height: 500,
                }}>  
                <Button>
                <Item>
                    <img src="/img/상하목장.png" width={190} height={140}/>
                    <h3>상하목장</h3>
                    1,500원
                </Item>
                </Button>
            </Box>

            <Box className="second" gridColumn="span 8"
                sx={{
                    width: 300,
                    height: 600,
                }}>
                <Button>
                <Item>
                    <img src="/img/투게더.png" width={190} height={140}/>
                    <h3>투게더</h3>
                    2,800원
                </Item>
                </Button>
            </Box>

            <Box className="third" gridColumn="span 8"
                sx={{
                    width: 300,
                    height: 600,
                }}>
                <Button>
                <Item>    
                    <img src="/img/쿠앤크.png" width={190} height={140}/>
                    <h3>쿠앤크</h3>
                    3,000원
                </Item>
                </Button>
            </Box>

            <Box className="fourth" gridColumn="span 8"
                sx={{
                    width: 300,
                    height: 600,
                }}>
                <Button>
                <Item>
                    <img src="/img/끌레도르.png" width={190} height={140}/>
                    <h3>끌레도르</h3>
                    1,400원
                </Item>
                </Button>
            </Box>

            <Box className="fifth" gridColumn="span 8"
                sx={{
                    width: 1500,
                    height: 500,
                }}>  
                <Button>
                <Item>
                    <img src="/img/Haagen-Dazs.png" width={190} height={140}/>
                    <h3>Haagen-Dazs</h3>
                    1,600원
                </Item>
                </Button>
            </Box>

            <Box className="sixth" gridColumn="span 8"
                sx={{
                    width: 1500,
                    height: 500,
                }}>  
                <Button>
                <Item>
                    <img src="/img/Natuur.png" width={190} height={140}/>
                    <h3>Natuur</h3>
                    2,000원
                </Item>
                </Button>
            </Box>

            <Box className="seventh" gridColumn="span 8"
                sx={{
                    width: 1500,
                    height: 500,
                }}>  
                <Button>
                <Item>
                    <img src="/img/위즐.png" width={190} height={140}/>
                    <h3>위즐</h3>
                    2,500원
                </Item>
                </Button>
            </Box>

            <Box className="eightth" gridColumn="span 8"
                sx={{
                    width: 1500,
                    height: 500,
                }}>  
                <Button>
                <Item>
                    <img src="/img/비요뜨.png" width={190} height={140}/>
                    <h3>비요뜨</h3>
                    3,000원
                </Item>
                </Button>
            </Box>

         </Box>
                
         <Button className="cancel" variant="contained">취소</Button>
         <Button className="order" variant="contained">주문하기</Button>
         
           
        </>
    )
}

export default Icecream_cone;