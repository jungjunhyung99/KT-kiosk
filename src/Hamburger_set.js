import React, { useState} from 'react';
import './Hamburger_single.css';
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

function Hamburger_set() {
    const navigate = useNavigate();

    const onClickHamburger_single = () => {
        navigate('/Hamburger_single');
    }

    const onClickHamburger_set = () => {
        navigate('/Hamburger_set');
    }

    const onClickHamburger_beverage = () => {
        navigate('/Hamburger_beverage');
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
            <Button className="one" onClick={onClickHamburger_single}>단품</Button>
            <Button className="set" onClick={onClickHamburger_set}>세트</Button>
            <Button className="beverage" onClick={onClickHamburger_beverage}>음료</Button>
            <hr></hr>

            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
            <Box className="first" gridColumn="span 8"
                sx={{
                    width: 300,
                    height: 600,
                }}>  
                <Button className="a">
                <Item>
                    <Item><img src="/img/A세트.png" width={180} height={140}/></Item>
                    <h3>A세트</h3>
                    7,600원~
                </Item>
                </Button>
            </Box>

            <Box className="second" gridColumn="span 8"
                sx={{
                    width: 300,
                    height: 600,
                }}>
                <Button className="b">
                <Item>
                    <Item><img src="/img/B세트.png" width={170} height={140}/></Item>
                    <h3>B세트</h3>
                    6,500원~
                </Item>
                </Button>
            </Box>

            <Box className="third" gridColumn="span 8"
                sx={{
                    width: 300,
                    height: 600,
                }}>
                <Button className="c">
                <Item>    
                    <Item><img src="/img/C세트.png" width={190} height={140}/></Item>
                    <h3>C세트</h3>
                    10,900원~
                </Item>
                </Button>
            </Box>

            <Box className="fourth" gridColumn="span 8"
                sx={{
                    width: 300,
                    height: 600,
                }}>
                <Button className="d">
                <Item>
                    <Item><img src="/img/D세트.png" width={180} height={140}/></Item>
                    <h3>D세트</h3>
                    6,500원~
                </Item>
                </Button>
            </Box>
         </Box>
           
         <Button className="cancel" variant="contained">취소</Button>
         <Button className="order" variant="contained">주문하기</Button>

         <body>
            <hr className="line" color="green"></hr>
         </body>
        </>
    )
}

export default Hamburger_set;