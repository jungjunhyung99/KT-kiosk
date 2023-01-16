import React, { useState} from 'react';
import './Icecream_cone.css';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';

function Icecream_cone() { 
    const navigate = useNavigate();

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
            <Box className="title">
                <div className="name">Icecream</div>
            </Box>

            <Box className="menu">
                <Button className="cone" onClick={onClickIcecream_cone}>콘</Button>
                <Button className="bar" onClick={onClickIcecream_bar}>바</Button>
                <Button className="cup" onClick={onClickIcecream_cup}>컵</Button>
                <Button className="pencil" onClick={onClickIcecream_pencil}>펜슬</Button>
            </Box>

            <Box className="kind">
                <Box className="First">
                    <Button className="first">
                        <Item>
                            <img src="/img/돼지콘.png" width={190} height={140}/>
                            <h3>돼지콘</h3>
                            1,300원
                        </Item>
                    </Button>
                </Box>

                <Box className="Second">
                    <Button className="second">
                        <Item>
                            <img src="/img/요맘때.png" width={190} height={140}/>
                            <h3>요맘때</h3>
                            1,500원
                        </Item>
                    </Button>
                </Box>

                <Box className="Third">
                    <Button className="third">
                        <Item>    
                            <img src="/img/월드콘.png" width={190} height={140}/>
                            <h3>월드콘</h3>
                            1,500원
                        </Item>
                    </Button>
                </Box>

                <Box className="Fourth">
                    <Button className="fourth">
                        <Item>
                            <img src="/img/부라보.png" width={190} height={140}/>
                            <h3>부라보</h3>
                            1,200원
                        </Item>
                    </Button>
                </Box>

                <Box className="Fifth">
                    <Button className="fifth">
                        <Item>
                            <img src="/img/구구콘.png" width={190} height={140}/>
                            <h3>구구콘</h3>
                            1,600원
                        </Item>
                    </Button>
                </Box>

                <Box className="Sixth">
                    <Button className="sixth">
                        <Item>
                            <img src="/img/슈팅스타.png" width={190} height={140}/>
                            <h3>슈팅스타</h3>
                            2,000원
                        </Item>
                    </Button>
                </Box>

                <Box className="Seventh">
                    <Button className="seventh">
                        <Item>
                            <img src="/img/메타.png" width={190} height={140}/>
                            <h3>메타</h3>
                            1,800원
                        </Item>
                    </Button>
                </Box>

                <Box className="Eightth">
                    <Button className="eightth">
                        <Item>
                            <img src="/img/슈퍼콘.png" width={190} height={140}/>
                            <h3>슈퍼콘</h3>
                            1,500원
                        </Item>
                    </Button>
                </Box>
            </Box>
                
         <Button className="order" variant="contained">주문하기</Button>
        </>
    )
}

export default Icecream_cone;