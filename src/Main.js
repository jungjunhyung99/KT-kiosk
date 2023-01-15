import react from 'react';
import { useNavigate } from 'react-router-dom';
import Explain from './Explain';
import Practice from './Practice';
import Button from '@mui/material/Button';
import Item from './Item';
import Hamburger_single from './Hamburger_single';
import Icecream_cone from './Icecream_cone';

function Main() {
    const navigate = useNavigate();
    const onClickExplain = () => {
        navigate('/Explain');
    }

    const onClickPractice = () => {
        navigate('/Practice');
    }

    const onClickGame = () => {
        navigate('/OneToFifty');
    }

    const onClickPay = () => {
        navigate('/Item');
    }

    const onClickHamburger_single = () => {
        navigate('/Hamburger_single');
    }

    const onClickIcecream_cone = () => {
        navigate('/Icecream_cone');
    }

    return (
        <>
            <Button variant="contained" className="explain" onClick={onClickExplain}>키오스크 설명서</Button><br />
            <div>학습목표 : 키오스크에 대해 이해하고 KT키오스크 교육용 앱 실습을 통해 키오스크 사용에 자신감을 가질 수 있다.</div><br />
            <Button variant="contained" className="practice" onClick={onClickPractice}>키오스크 실전 연습</Button>
            <div>키오스크 실전 연습을 통해 키오스크 사용에 자신감을 가질 수 있다.</div><br />
            <Button variant="contained" className="game" onClick={onClickGame}>게임</Button><br />
            <div>게임을 통해 뇌 노화를 늦출 수 있다.</div><br />
            <Button variant="contained" className="pay" onClick={onClickPay}>결제하기</Button><br /><br />
            <Button variant="contained" className="Hamburger_single" onClick={onClickHamburger_single}>햄버거 키오스크</Button><br /><br />
            <Button variant="contained" className="Icecream" onClick={onClickIcecream_cone}>아이스크림 키오스크</Button><br />
        </>
    )
}

export default Main;