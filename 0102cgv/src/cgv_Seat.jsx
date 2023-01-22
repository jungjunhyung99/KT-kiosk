import styled from "styled-components";

const MoviePeople=styled.div`
    width:28rem;
    height:27rem;
    border : 0.3rem solid;
    margin : 0.2rem;
`

const PeopleAge=styled.div`
    width:26rem;
    height : 5rem;
    padding : 0.4rem;
    margin : 0.5rem;
    border : 0.2rem solid;
`

const PeopleNum=styled.button`
    border : 0.1rem solid;
    width : 3rem;
    height : 3rem;
    padding : 0.2rem;
    margin : 0.2rem;
`
function Seat(){
    return(
        <div>
            <h2>인원 선택</h2>
            <text>최대 8명까지 가능</text>
            <MoviePeople>
                <PeopleAge>
                    <text>일반</text>
                    <div style={{display:'flex'}}>
                        <PeopleNum>1</PeopleNum>
                        <PeopleNum>2</PeopleNum>
                        <PeopleNum>3</PeopleNum>
                        <PeopleNum>4</PeopleNum>
                        <PeopleNum>5</PeopleNum>
                        <PeopleNum>6</PeopleNum>
                        <PeopleNum>7</PeopleNum>
                        <PeopleNum>8</PeopleNum>
                    </div>
                </PeopleAge>
                <PeopleAge>
                    <text>청소년</text>
                    <div style={{display:'flex'}}>
                        <PeopleNum>1</PeopleNum>
                        <PeopleNum>2</PeopleNum>
                        <PeopleNum>3</PeopleNum>
                        <PeopleNum>4</PeopleNum>
                        <PeopleNum>5</PeopleNum>
                        <PeopleNum>6</PeopleNum>
                        <PeopleNum>7</PeopleNum>
                        <PeopleNum>8</PeopleNum>
                    </div>
                </PeopleAge>
                <PeopleAge>
                    <text>경로</text>
                    <div style={{display:'flex'}}>
                        <PeopleNum>1</PeopleNum>
                        <PeopleNum>2</PeopleNum>
                        <PeopleNum>3</PeopleNum>
                        <PeopleNum>4</PeopleNum>
                        <PeopleNum>5</PeopleNum>
                        <PeopleNum>6</PeopleNum>
                        <PeopleNum>7</PeopleNum>
                        <PeopleNum>8</PeopleNum>
                    </div>
                </PeopleAge>
                <PeopleAge>
                    <text>우대</text>
                    <div style={{display:'flex'}}>
                        <PeopleNum>1</PeopleNum>
                        <PeopleNum>2</PeopleNum>
                        <PeopleNum>3</PeopleNum>
                        <PeopleNum>4</PeopleNum>
                        <PeopleNum>5</PeopleNum>
                        <PeopleNum>6</PeopleNum>
                        <PeopleNum>7</PeopleNum>
                        <PeopleNum>8</PeopleNum>
                    </div>
                </PeopleAge>
            </MoviePeople>
            <h2>좌석선택</h2>
            
        </div>
    )
}

export default Seat;