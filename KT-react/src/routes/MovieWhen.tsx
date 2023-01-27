import styled from "styled-components";
import { useState } from "react";

const MDayBox = styled.div`
  width : 100rem;
  height : 7rem;
  padding : 1rem;
  display: flex;
  justify-content:center; 
`
const MTimeBox = styled.div`
  width : 100rem;
  height : 4rem;
  padding : 1rem;
  display: flex;
  justify-content:center; 
`

const CenterText = styled.div`
  width:100rem;
  justify-content:center;
  display: flex;
  font-size :22px;

`


const MovieDate = styled.button`
    padding : 1rem 1rem;
    border-radius : 2rem;
    font-size : 20px;
    line-height: 2rem;
    background-color : ${props => props.color};
    justify-content:center; 
    display:flex;
    margin:0.3rem 1.05rem;
    width : 4.5rem;
`

const MovieDay = styled.div`
  font-size : 20px;
  justify-content:center;
  display: flex;
`

const MovieWhen = styled.div`
    width:6.8rem;
    height:7em;
    border : 0.1rem black solid;
`

const MovieTime = styled.button`
    width:12.1rem;
    height : 3rem;
    border : 0.1rem black solid;
    background-color : ${props => props.color};
`

function When() {
  const [MDateColor1, setMDateColor1] = useState('white');
  const MDateClick1 = () => {
    MDateColor1 === 'white' ? setMDateColor1('lightblue') : setMDateColor1('white');
  };
  const [MDateColor2, setMDateColor2] = useState('white');
  const MDateClick2 = () => {
    MDateColor2 === 'white' ? setMDateColor2('lightblue') : setMDateColor2('white');
  };
  const [MDateColor3, setMDateColor3] = useState('white');
  const MDateClick3 = () => {
    MDateColor3 === 'white' ? setMDateColor3('lightblue') : setMDateColor3('white');
  };
  const [MDateColor4, setMDateColor4] = useState('white');
  const MDateClick4 = () => {
    MDateColor4 === 'white' ? setMDateColor4('lightblue') : setMDateColor4('white');
  };
  const [MDateColor5, setMDateColor5] = useState('white');
  const MDateClick5 = () => {
    MDateColor5 === 'white' ? setMDateColor5('lightblue') : setMDateColor5('white');
  };
  const [MDateColor6, setMDateColor6] = useState('white');
  const MDateClick6 = () => {
    MDateColor6 === 'white' ? setMDateColor6('lightblue') : setMDateColor6('white');
  };
  const [MDateColor7, setMDateColor7] = useState('white');
  const MDateClick7 = () => {
    MDateColor7 === 'white' ? setMDateColor7('lightblue') : setMDateColor7('white');
  };
  const [MTimeColor1, setMTimeColor1] = useState('white');
  const MTimeClick1 = () => {
    MTimeColor1 === 'white' ? setMTimeColor1('lightblue') : setMTimeColor1('white');
  };
  const [MTimeColor2, setMTimeColor2] = useState('white');
  const MTimeClick2 = () => {
    MTimeColor2 === 'white' ? setMTimeColor2('lightblue') : setMTimeColor2('white');
  };
  const [MTimeColor3, setMTimeColor3] = useState('white');
  const MTimeClick3 = () => {
    MTimeColor3 === 'white' ? setMTimeColor3('lightblue') : setMTimeColor3('white');
  };
  const [MTimeColor4, setMTimeColor4] = useState('white');
  const MTimeClick4 = () => {
    MTimeColor4 === 'white' ? setMTimeColor4('lightblue') : setMTimeColor4('white');
  };
  return (
    <div>
      <CenterText>2. 영화를 볼 날짜를 선택해주세요</CenterText>
      <MDayBox style={{ display: 'flex' }}>
        <MovieWhen>
          <MovieDate color={MDateColor1} onClick={MDateClick1}>2</MovieDate>
          <MovieDay>월</MovieDay>
        </MovieWhen>
        <MovieWhen>
          <MovieDate color={MDateColor2} onClick={MDateClick2}>3</MovieDate>
          <MovieDay>화</MovieDay>
        </MovieWhen>
        <MovieWhen>
          <MovieDate color={MDateColor3} onClick={MDateClick3}>4</MovieDate>
          <MovieDay>수</MovieDay>
        </MovieWhen>
        <MovieWhen>
          <MovieDate color={MDateColor4} onClick={MDateClick4}>5</MovieDate>
          <MovieDay>목</MovieDay>
        </MovieWhen>
        <MovieWhen>
          <MovieDate color={MDateColor5} onClick={MDateClick5}>6</MovieDate>
          <MovieDay>금</MovieDay>
        </MovieWhen>
        <MovieWhen>
          <MovieDate color={MDateColor6} onClick={MDateClick6}>7</MovieDate>
          <MovieDay>토</MovieDay>
        </MovieWhen>
        <MovieWhen>
          <MovieDate color={MDateColor7} onClick={MDateClick7}>8</MovieDate>
          <MovieDay>일</MovieDay>
        </MovieWhen>

      </MDayBox>
      <CenterText>3. 영화를 볼 시간을 선택해주세요</CenterText>
      <MTimeBox>
        <MovieTime color={MTimeColor1} onClick={MTimeClick1}>13:40~15:54</MovieTime>
        <MovieTime color={MTimeColor2} onClick={MTimeClick2}>16:25~18:39</MovieTime>
        <MovieTime color={MTimeColor3} onClick={MTimeClick3}>19:10~21:24</MovieTime>
        <MovieTime color={MTimeColor4} onClick={MTimeClick4}>21:45~23:59</MovieTime>
      </MTimeBox>
    </div>
  );
}

export default When;