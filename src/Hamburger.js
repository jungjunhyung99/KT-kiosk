import React, { useState} from 'react';
import './Hamburger_single.css?after';
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

function Hamburger() {
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
                <Button>
                <Item>
                    <img src="/img/A버거.png" width={190} height={140}/>
                    <h3>A버거</h3>
                    5,400원~
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
                    <img src="/img/B버거.png" width={190} height={140}/>
                    <h3>B버거</h3>
                    4,900원~
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
                    <img src="/img/C버거.png" width={190} height={140}/>
                    <h3>C버거</h3>
                    8,900원~
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
                    <img src="/img/D버거.png" width={190} height={140}/>
                    <h3>D버거</h3>
                    4,000원~
                </Item>
                </Button>
            </Box>
         </Box>
           
         <Button className="cancel" variant="contained">취소</Button>
         <Button className="order" variant="contained">주문하기</Button>
        </>
    )
}

export default Hamburger;