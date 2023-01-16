import React, { useState} from 'react';
import './Icecream_cone.css';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';

function Icecream_pencil() { 
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
                    <img src="/img/빠삐코.png" width={190} height={140}/>
                    <h3>빠삐코</h3>
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
                    <img src="/img/뽕따.png" width={190} height={140}/>
                    <h3>뽕따</h3>
                    1,000원
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
                    <img src="/img/빠삐코 딸기.png" width={190} height={140}/>
                    <h3>빠삐코 딸기</h3>
                    1,500원
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
                    <img src="/img/주물러.png" width={190} height={140}/>
                    <h3>주물러</h3>
                    1,000원
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
                    <img src="/img/초키초키.png" width={190} height={140}/>
                    <h3>초키초키</h3>
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
                    <img src="/img/탱크보이.png" width={190} height={140}/>
                    <h3>탱크보이</h3>
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
                    <img src="/img/쮸쮸바.png" width={190} height={140}/>
                    <h3>쮸쮸바</h3>
                    2,000원
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
                    <img src="/img/토마토마.png" width={190} height={140}/>
                    <h3>토마토마</h3>
                    1,500원
                </Item>
                </Button>
            </Box>

         </Box>
                
         <Button className="cancel" variant="contained">취소</Button>
         <Button className="order" variant="contained">주문하기</Button>
         
           
        </>
    )
}

export default Icecream_pencil;