import react from 'react';
import { useNavigate } from 'react-router-dom';
import Explain from './Explain';
import Practice from './Practice';
import Button from '@mui/material/Button';
import Item from './Item';
import Hamburger from './Hamburger';

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

    const onClickHamburger = () => {
        navigate('/Hamburger');
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
            <Button variant="contained" className="Hamburger" onClick={onClickHamburger}>햄버거 키오스크</Button><br />
        </>
    )
}

export default Main;