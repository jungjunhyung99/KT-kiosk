import react from 'react';
import { useNavigate } from 'react-router-dom';
import Explain from './Explain';
import Practice from './Practice';
import Button from '@mui/material/Button';

function Main() {
    const navigate = useNavigate();
    const onClickExplain = () => {
        navigate('/Explain');
    }

    const onClickPractice = () => {
        navigate('/Practice');
    }

    return (
        <>
            <Button variant="contained" className="explain" onClick={onClickExplain}>키오스크 설명서</Button><br />
            <div>학습목표 : 키오스크에 대해 이해하고 KT키오스크 교육용 앱 실습을 통해 키오스크 사용에 자신감을 가질 수 있다.</div><br />
            <Button variant="contained" className="practice" onClick={onClickPractice}>키오스크 실전 연습</Button>
            <div>키오스크 실전 연습을 통해 키오스크 사용에 자신감을 가질 수 있다.</div>
        </>
    )
}

export default Main;