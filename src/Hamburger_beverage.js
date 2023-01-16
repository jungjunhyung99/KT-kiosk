import React, { useState} from 'react';
import './Hamburger_single.css';
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

function Hamburger_beverage() {
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
        <>
            <Box className= "one_set_beverage">
                <Button className="one" onClick={onClickHamburger_single}>단품</Button>
                <Button className="set" onClick={onClickHamburger_set}>세트</Button>
                <Button className="beverage" onClick={onClickHamburger_beverage}>음료</Button>
            </Box>
            <hr></hr>
            <div className="care">주의 : 수량이 0보다 크도록 선택하세요. 아니면 주문에 실패합니다.</div>
            <Box className="First">
                <Button className="first" onClick={() => {btn_first_click(); Count()}}>
                    <Item>
                        <img src="/img/A음료.png" width={190} height={140}/>
                        <h3>A음료</h3>
                        <div className="first_price">2,700원</div>
                    </Item>
                </Button>    
            </Box>
            <Box className="Second">
                <Button className="second" onClick={() => {btn_second_click(); Count2()}}>
                    <Item>
                        <img src="/img/B음료.png" width={190} height={140}/>
                        <h3>B음료</h3>
                        2,500원
                    </Item>
                </Button>
            </Box>
            <Box className="Third">
                <Button className="third" onClick={() => {btn_third_click(); Count3()}}>
                    <Item>    
                        <img src="/img/C음료.png" width={190} height={140}/>
                        <h3>C음료</h3>
                        2,300원
                    </Item>
                </Button>
            </Box>
            <Box className="Fourth">
                   <Button className="fourth" onClick={() => {btn_fourth_click(); Count4()}}>
                    <Item>
                        <img src="/img/D음료.png" width={190} height={140}/>
                        <h3>D음료</h3>
                        2,500원
                    </Item>
                </Button>
            </Box>
            <Box className="minus">
                <Button className="first_minus" variant="contained" color="success" onClick={() => {btn_first_minus_click(); Minus_Count();}}>-</Button>
            </Box>
            <Box className="minus2"> 
                <Button className="second_minus" variant="contained" color="success" onClick={() => {btn_second_minus_click(); Minus_Count2();}}>-</Button>
            </Box>   
            <Box className="minus3">
                <Button className="third_minus" variant="contained" color="success" onClick={() => {btn_third_minus_click(); Minus_Count3();}}>-</Button>
            </Box>
            <Box className="minus4">
                <Button className="fourth_minus" variant="contained" color="success" onClick={() => {btn_fourth_minus_click(); Minus_Count4();}}>-</Button>
            </Box>
            <Box className="cnt">
                <div className="first_cnt">{number}</div>
                <div className="second_cnt">{number2}</div>
                <div className="third_cnt">{number3}</div>
                <div className="fourth_cnt">{number4}</div>
             </Box>

            <Button className="order" variant="contained" onClick={handleOpen}>주문하기</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description">
                        <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            내역
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <div>A음료 : 2,700원 * {count+(minus_count)}개 = "{5400*(count+(minus_count))}"원</div>
                            <div>B음료 : 2,500원 * {count2+(minus_count2)}개 = "{4900*(count2+(minus_count2))}"원</div>
                            <div>C음료 : 2,300원 * {count3+(minus_count3)}개 = "{8900*(count3+(minus_count3))}"원</div>
                            <div>D음료 : 2,500원 * {count4+(minus_count4)}개 = "{4000*(count4+(minus_count4))}"원</div> <br />
                            <div>총 금액 : {(5400*(count+(minus_count))
                            +(4900*(count2+(minus_count2)))
                            +(8900*(count3+(minus_count3)))
                            +(4000*(count4+(minus_count4))))}원</div>
                        </Typography>
                        </Box>
                </Modal>
        </>
    )
}

export default Hamburger_beverage;