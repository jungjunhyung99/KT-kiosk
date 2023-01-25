import React, { useState } from 'react';
import './Hamburger_single.css';
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function Hamburger_single() {
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
        <div>
            <Box className= "one_set_beverage">
                <Button className="One" onClick={onClickHamburger_single}>
                    <div className="one">단품</div>
                </Button>
                <Button className="Set" onClick={onClickHamburger_set}>
                    <div className="set">세트</div>
                </Button>
                <Button className="Beverage" onClick={onClickHamburger_beverage}>
                    <div className="beverage">음료</div>
                </Button>
            </Box>
            <hr></hr>
            <div className="care">주의 : 수량이 0보다 크도록 선택하세요. 아니면 주문에 실패합니다.</div>
            <Box className="box">
                <Grid className="grid" container spacing={3}>
                    <Grid item xs={3}>
                        <Button onClick={() => {btn_first_click(); Count()}}>
                            <Item>
                                <img src="/img/A버거.png" width={190} height={200}/>
                                <h3 className="A_name">A버거</h3>
                                <div className="A_price">5,400원</div>
                            </Item>
                        </Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button onClick={() => {btn_second_click(); Count2()}}>
                            <Item>
                                <img src="/img/B버거.png" width={190} height={200}/>
                                <h3 className="B_name">B버거</h3>
                                <div className="B_price">4,900원</div>
                            </Item>
                        </Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button onClick={() => {btn_third_click(); Count3()}}>
                            <Item>
                                <img src="/img/C버거.png" width={190} height={200}/>
                                <h3 className="C_name">C버거</h3>
                                <div className="C_price">8,900원</div>
                            </Item>
                        </Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button onClick={() => {btn_fourth_click(); Count4()}}>
                            <Item>
                                <img src="/img/D버거.png" width={190} height={200}/>
                                <h3 className="D_name">D버거</h3>
                                <div className="D_price">4,000원</div>
                            </Item>
                        </Button>
                    </Grid>
                </Grid>
            </Box>
            <Box className="box2">
                <Grid container spacing={22}>
                    <Grid item xs={3}>
                        <Button variant="contained" color="success" onClick={() => {btn_first_minus_click(); Minus_Count();}}>-</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained" color="success" onClick={() => {btn_second_minus_click(); Minus_Count2();}}>-</Button>
                    </Grid>
                </Grid>
            </Box>
            <Box className="box_2">
                <Grid container spacing={31}>
                    <Grid item xs={3}>
                        <Button variant="contained" color="success" onClick={() => {btn_third_minus_click(); Minus_Count3();}}>-</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained" color="success" onClick={() => {btn_fourth_minus_click(); Minus_Count4();}}>-</Button>
                    </Grid>
                </Grid>
            </Box>
            <div className="First_cnt">{number}</div>
            <Box className="box3">
                <Grid container spacing={30}> 
                    <Grid item xs = {3}>
                        <div className="first_cnt">{number}</div>
                    </Grid>      
                    <Grid item xs = {3}>
                        <div className="second_cnt">{number2}</div>
                    </Grid>              
                    <Grid item xs = {3}>
                        <div className="third_cnt">{number3}</div>
                    </Grid>
                    <Grid item xs = {3}>
                        <div className="fourth_cnt">{number4}</div>
                    </Grid>
                </Grid>
            </Box>
            <Button className="Order" variant="contained" onClick={handleOpen} sx={{width:1520}}>
                <div className="order">주문하기</div>
            </Button>
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
                            <div className="A_content">A버거 : 5,400원 * {count+(minus_count)}개 = {5400*(count+(minus_count))}원</div>
                            <div className="B_content">B버거 : 4,900원 * {count2+(minus_count2)}개 = {4900*(count2+(minus_count2))}원</div>
                            <div className="C_content">C버거 : 8,900원 * {count3+(minus_count3)}개 = {8900*(count3+(minus_count3))}원</div>
                            <div className="D_content">D버거 : 4,000원 * {count4+(minus_count4)}개 = {4000*(count4+(minus_count4))}원</div> <br />
                            <div className="total">총 금액 : {(5400*(count+(minus_count))
                            +(4900*(count2+(minus_count2)))
                            +(8900*(count3+(minus_count3)))
                            +(4000*(count4+(minus_count4))))}원</div>
                        </Typography>
                        </Box>
                </Modal>
        </div>
    )
}

export default Hamburger_single;