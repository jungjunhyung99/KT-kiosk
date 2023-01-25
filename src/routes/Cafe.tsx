import React, { useState} from 'react';
import './Icecream_cone.css';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

function Icecream_pencil() { 
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

    const [number, setNumber] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [number3, setNumber3] = useState(0);
    const [number4, setNumber4] = useState(0);
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);
    const [minus_count, setMinusCount] = useState(0);
    const [minus_count2, setMinusCount2] = useState(0);
    const [minus_count3, setMinusCount3] = useState(0);
    const [minus_count4, setMinusCount4] = useState(0);

    // onIcrease가 btn_first_click (증가)
    const btn_first_click = () => {
        setNumber(number + 1);
    }

    const btn_second_click = () => {
        setNumber2(number2 + 1);
    }
    
    const btn_third_click = () => {
        setNumber3(number3 + 1);
    }

    const btn_fourth_click = () => {
        setNumber4(number4 + 1);
    }

    const btn_first_minus_click = () => {
        setNumber(number - 1);
    }

    const btn_second_minus_click = () => {
        setNumber2(number2 - 1);
    }

    const btn_third_minus_click = () => {
        setNumber3(number3 - 1);
    }

    const btn_fourth_minus_click = () => {
        setNumber4(number4 - 1);
    }

    const Count = () => {
        setCount(count + 1);
    }

    const Count2 = () => {
        setCount2(count2 + 1);
    }

    const Count3 = () => {
        setCount3(count3 + 1);
    }

    const Count4 = () => {
        setCount4(count4 + 1);
    }

    const Minus_Count = () => {    
        setMinusCount(minus_count - 1);
    }

    const Minus_Count2 = () => {
        setMinusCount2(minus_count2 - 1);
    }

    const Minus_Count3 = () => {
        setMinusCount3(minus_count3 - 1);
    }

    const Minus_Count4 = () => {
        setMinusCount4(minus_count4 - 1);
    }

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
        height: '30%',
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                <Button className="Cone" onClick={onClickIcecream_cone}>
                    <div className="cone">콘</div>
                </Button>
                <Button className="Bar" onClick={onClickIcecream_bar}>
                    <div className="bar">바</div>
                </Button>
                <Button className="Cup" onClick={onClickIcecream_cup}>
                    <div className="cup">컵</div>
                </Button>
                <Button className="Pencil" onClick={onClickIcecream_pencil}>
                    <div className="pencil">펜슬</div>
                </Button>
            </Box>
            <Box className="Care">
            <div className="care">주의 : 수량이 0보다 크도록 선택하세요. 아니면 주문에 실패합니다.</div>
            </Box>
            <Box className="kind">
                <Box className="First">
                    <Button className="first" onClick={() => {btn_first_click(); Count()}}>
                        <Item>
                            <img src="/img/빠삐코.png" width={190} height={140}/>
                            <h3 className="first_name">빠삐코</h3>
                            <div className="first_price">1,500원</div>
                        </Item>
                    </Button>
                </Box>

                <Box className="Second">
                    <Button className="second" onClick={() => {btn_second_click(); Count2()}}>
                        <Item>
                            <img src="/img/뿅따.png" width={190} height={140}/>
                            <h3 className="second_name">뿅따</h3>
                            <div className="second_price">1,000원</div>
                        </Item>
                    </Button>
                </Box>

                <Box className="Third">
                    <Button className="third" onClick={() => {btn_third_click(); Count3()}}>
                        <Item>    
                            <img src="/img/빠삐코 딸기.png" width={190} height={140}/>
                            <h3 className="third_name">빠삐코 딸기</h3>
                            <div className="third_price">1,500원</div>
                        </Item>
                    </Button>
                </Box>

                <Box className="Fourth">
                    <Button className="fourth" onClick={() => {btn_fourth_click(); Count4()}}>
                        <Item>
                            <img src="/img/주물러.png" width={190} height={140}/>
                            <h3 className="fourth_name">주물러</h3>
                            <div className="fourth_price">1,000원</div>
                        </Item>
                    </Button>
                </Box>
            </Box>
            <Box className="minus">
                <Button variant="contained" color="success" onClick={() => {btn_first_minus_click(); Minus_Count();}}>-</Button>
            </Box>
            <Box className="minus2"> 
                <Button variant="contained" color="success" onClick={() => {btn_second_minus_click(); Minus_Count2();}}>-</Button>
            </Box>   
            <Box className="minus3">
                <Button variant="contained" color="success" onClick={() => {btn_third_minus_click(); Minus_Count3();}}>-</Button>
            </Box>
            <Box className="minus4">
                <Button variant="contained" color="success" onClick={() => {btn_fourth_minus_click(); Minus_Count4();}}>-</Button>
            </Box>
            <Box className="cnt">
                <div className="first_cnt">{number}</div>
                <div className="second_cnt">{number2}</div>
                <div className="third_cnt">{number3}</div>
                <div className="fourth_cnt">{number4}</div>
            </Box>

            <Box className="Order">
            <Button className="order" variant="contained" onClick={handleOpen}>
                <div className="order">주문하기</div>
            </Button>
            </Box>
            <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description">
                        <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            <div className="naeyuk">내역</div>
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <div className="first_content">빠삐코 : 1.500원 * {count+(minus_count)}개 = {1500*(count+(minus_count))}원</div>
                            <div className="second_content">뿅따 : 1,000원 * {count2+(minus_count2)}개 = {1000*(count2+(minus_count2))}원</div>
                            <div className="third_content">빠삐코 딸기 : 1,500원 * {count3+(minus_count3)}개 = {1500*(count3+(minus_count3))}원</div>
                            <div className="fourth_content">주물러 : 1,000원 * {count4+(minus_count4)}개 = {1000*(count4+(minus_count4))}원</div> <br />
                            <div className="total">총 금액 : {(1500*(count+(minus_count))
                            +(1000*(count2+(minus_count2)))
                            +(1500*(count3+(minus_count3)))
                            +(1000*(count4+(minus_count4))))}원</div>
                        </Typography>
                        </Box>
            </Modal>
        </>
    )
}

export default Icecream_pencil;