import styled from "styled-components";

const FoodChoice=styled.button`
    width : 16rem;
    height : 4rem;
    border : 0.1rem solid;
    font-size:20px;
    margin : 0.3rem;
`

const PopcornChoice=styled.button`
width : 16rem;
height : 4rem;
border : 0.1rem solid;
font-size:20px;
margin : 0.3rem;
`

const BeverageChoice=styled.button`
width : 16rem;
height : 4rem;
border : 0.1rem solid;
font-size:20px;
margin : 0.3rem;
`

function Food(){
    return(
        <div>
            <div>
                <h2>영화보면서 드실 음식을 선택해주세요</h2>
                <FoodChoice>콤보(팝콘&음료)</FoodChoice>
                <FoodChoice>팝콘</FoodChoice>
                <FoodChoice>음료</FoodChoice>
            </div>
            <div>
                <h3>팝콘 선택</h3>

                <PopcornChoice>달콤팝콘(L)+1000</PopcornChoice>
                <PopcornChoice>고소팝콘(L)</PopcornChoice>
                <PopcornChoice>반반팝콘+1000</PopcornChoice>
                <PopcornChoice>바질어니언팝콘(L)+1000</PopcornChoice>
                <PopcornChoice>더블치즈팝콘(L)+1000</PopcornChoice>
            </div>
            <div>
                <h3>음료 선택</h3>
                <BeverageChoice>콜라(M)</BeverageChoice>
                <BeverageChoice>사이다(M)</BeverageChoice>
                <BeverageChoice>콜라(L)+500</BeverageChoice>
                <BeverageChoice>사이다(L)+500</BeverageChoice>
            </div>
        </div>

    )
}

export default Food;