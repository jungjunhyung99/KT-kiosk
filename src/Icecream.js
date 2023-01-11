import React, { useState} from 'react';
import './Icecream.css';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

function Icecream() { 
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

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                    <img src="/img/돼지콘.png" width={190} height={140}/>
                    <h3>돼지콘</h3>
                    1,300원
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
                    <img src="/img/요맘때.png" width={190} height={140}/>
                    <h3>요맘때</h3>
                    1,500원
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
                    <img src="/img/월드콘.png" width={190} height={140}/>
                    <h3>월드콘</h3>
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
                    <img src="/img/부라보.png" width={190} height={140}/>
                    <h3>부라보</h3>
                    1,200원
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
                    <img src="/img/구구콘.png" width={190} height={140}/>
                    <h3>구구콘</h3>
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
                    <img src="/img/슈팅스타.png" width={190} height={140}/>
                    <h3>슈팅스타</h3>
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
                    <img src="/img/메타.png" width={190} height={140}/>
                    <h3>메타</h3>
                    1,800원
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
                    <img src="/img/슈퍼콘.png" width={190} height={140}/>
                    <h3>슈퍼콘</h3>
                    1,500원
                </Item>
                </Button>
            </Box>

         </Box>
                
         <Button className="cancel" variant="contained">취소</Button>
         <Button className="order" variant="contained">주문하기</Button>
         <div>
           <Button onClick={handleOpen}>장바구니</Button>
           <Modal
           open={open}
           onClose={handleClose}
           aria-labelledby="modal-modal-title"
           aria-describedby="modal-modal-description"
           >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
            구매하기
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </div>
        </>
    )
}

export default Icecream;