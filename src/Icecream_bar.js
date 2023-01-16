import React, { useState} from 'react';
import './Icecream_cone.css';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';

function Icecream_bar() { 
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
                    <img src="/img/돼지바.png" width={190} height={140}/>
                    <h3>돼지바</h3>
                    500원
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
                    <img src="/img/누가바.png" width={190} height={140}/>
                    <h3>누가바</h3>
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
                    <img src="/img/바밤바.png" width={190} height={140}/>
                    <h3>바밤바</h3>
                    1,000원
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
                    <img src="/img/망고바.png" width={190} height={140}/>
                    <h3>망고바</h3>
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
                    <img src="/img/와일드바디.png" width={190} height={140}/>
                    <h3>와일드바디</h3>
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
                    <img src="/img/인절미바.png" width={190} height={140}/>
                    <h3>인절미바</h3>
                    1,000원
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
                    <img src="/img/메가톤.png" width={190} height={140}/>
                    <h3>메가톤</h3>
                    1,500원
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
                    <img src="/img/쌍쌍바.png" width={190} height={140}/>
                    <h3>쌍쌍바</h3>
                    1,300원
                </Item>
                </Button>
            </Box>

         </Box>
                
         <Button className="cancel" variant="contained">취소</Button>
         <Button className="order" variant="contained">주문하기</Button>
         
           
        </>
    )
}

export default Icecream_bar;