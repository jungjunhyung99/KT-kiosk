import styled from "styled-components";
import { useState } from "react";

const CenterText = styled.div`
  width:100rem;
  justify-content:center;
  display: flex;
  font-size :22px;
`
const CenterTextDes = styled.div`
  width:100rem;
  justify-content:center;
  display: flex;
  font-size :19px;
`

const MFoodBox = styled.div`
  width : 100rem;
  height : 5rem;
  padding : 1rem;
  display: flex;
  justify-content:center; 
`

const MFoodPopBox = styled.div`
  width : 100rem;
  height : 10rem;
  padding : 1rem;
  display: flex;
  justify-content:center; 
`

const FoodChoice = styled.button`
    width : 15.8rem;
    height : 4rem;
    border : 0.1rem solid;
    font-size:20px;
    margin : 0.3rem;
    background-color : ${props => props.color};
`

const PopcornChoice = styled.button`
width : 9.3rem;
height : 8rem;
border : 0.1rem solid;
font-size:20px;
margin : 0.3rem;
background-color : ${props => props.color};
`

const BeverageChoice = styled.button`
width : 11.8rem;
height : 4rem;
border : 0.1rem solid;
font-size:20px;
margin : 0.3rem;
background-color : ${props => props.color};
`

function Food() {
  const [MFoodColor1, setMFoodColor1] = useState('white');
  const MFoodClick1 = () => {
    MFoodColor1 === 'white' ? setMFoodColor1('lightblue') : setMFoodColor1('white');
  };
  const [MFoodColor2, setMFoodColor2] = useState('white');
  const MFoodClick2 = () => {
    MFoodColor2 === 'white' ? setMFoodColor2('lightblue') : setMFoodColor2('white');
  };
  const [MFoodColor3, setMFoodColor3] = useState('white');
  const MFoodClick3 = () => {
    MFoodColor3 === 'white' ? setMFoodColor3('lightblue') : setMFoodColor3('white');
  };
  const [MPopColor1, setMPopColor1] = useState('white');
  const MPopClick1 = () => {
    MPopColor1 === 'white' ? setMPopColor1('lightblue') : setMPopColor1('white');
  };
  const [MPopColor2, setMPopColor2] = useState('white');
  const MPopClick2 = () => {
    MPopColor2 === 'white' ? setMPopColor2('lightblue') : setMPopColor2('white');
  };
  const [MPopColor3, setMPopColor3] = useState('white');
  const MPopClick3 = () => {
    MPopColor3 === 'white' ? setMPopColor3('lightblue') : setMPopColor3('white');
  };
  const [MPopColor4, setMPopColor4] = useState('white');
  const MPopClick4 = () => {
    MPopColor4 === 'white' ? setMPopColor4('lightblue') : setMPopColor4('white');
  };
  const [MPopColor5, setMPopColor5] = useState('white');
  const MPopClick5 = () => {
    MPopColor5 === 'white' ? setMPopColor5('lightblue') : setMPopColor5('white');
  };
  const [MBevColor1, setMBevColor1] = useState('white');
  const MBevClick1 = () => {
    MBevColor1 === 'white' ? setMBevColor1('lightblue') : setMBevColor1('white');
  };
  const [MBevColor2, setMBevColor2] = useState('white');
  const MBevClick2 = () => {
    MBevColor2 === 'white' ? setMBevColor2('lightblue') : setMBevColor2('white');
  };
  const [MBevColor3, setMBevColor3] = useState('white');
  const MBevClick3 = () => {
    MBevColor3 === 'white' ? setMBevColor3('lightblue') : setMBevColor3('white');
  };
  const [MBevColor4, setMBevColor4] = useState('white');
  const MBevClick4 = () => {
    MBevColor4 === 'white' ? setMBevColor4('lightblue') : setMBevColor4('white');
  };

  return (
    <div>

      <CenterText>5. 영화보면서 드실 음식을 선택해주세요</CenterText>
      <MFoodBox>
        <FoodChoice color={MFoodColor1} onClick={MFoodClick1}>콤보(팝콘&음료)</FoodChoice>
        <FoodChoice color={MFoodColor2} onClick={MFoodClick2}>팝콘</FoodChoice>
        <FoodChoice color={MFoodColor3} onClick={MFoodClick3}>음료</FoodChoice>
      </MFoodBox>

      <CenterTextDes>팝콘 선택</CenterTextDes>
      <MFoodPopBox>
        <PopcornChoice color={MPopColor1} onClick={MPopClick1}>달콤팝콘(L)+1000</PopcornChoice>
        <PopcornChoice color={MPopColor2} onClick={MPopClick2}>고소팝콘(L)</PopcornChoice>
        <PopcornChoice color={MPopColor3} onClick={MPopClick3}>반반팝콘+1000</PopcornChoice>
        <PopcornChoice color={MPopColor4} onClick={MPopClick4}>바질어니언팝콘(L)+1000</PopcornChoice>
        <PopcornChoice color={MPopColor5} onClick={MPopClick5}>더블치즈팝콘(L)+1000</PopcornChoice>
      </MFoodPopBox>

      <CenterTextDes>음료 선택</CenterTextDes>
      <MFoodBox>
        <BeverageChoice color={MBevColor1} onClick={MBevClick1}>콜라(M)</BeverageChoice>
        <BeverageChoice color={MBevColor2} onClick={MBevClick2}>사이다(M)</BeverageChoice>
        <BeverageChoice color={MBevColor3} onClick={MBevClick3}>콜라(L)+500</BeverageChoice>
        <BeverageChoice color={MBevColor4} onClick={MBevClick4}>사이다(L)+500</BeverageChoice>
      </MFoodBox>
    </div>

  )
}

export default Food;