import styled from "styled-components";

const MovieDate=styled.button`
    padding : 1rem 1rem;
    border : 0.1rem solid lightgrey;
    border-radius : 4rem;
    font-size : 20px;
    line-height: 0.5rem;
    background : "white";
`

const MovieDay=styled.text`
    font-size : 20px;
`

const MovieWhen=styled.div`
    width:4rem;
    height:6em;
    border : 0.1rem blue solid;
`

const MovieTime=styled.button`
    width:10rem;
    height : 3rem;
    border : 0.1rem green solid;
`

function When(){
    return (
        <div>
            <div style={{display:'flex'}}>
                <MovieWhen>
                    <MovieDate>2</MovieDate>
                    <MovieDay>월</MovieDay>
                </MovieWhen>
                <MovieWhen>
                    <MovieDate>3</MovieDate>
                    <MovieDay>화</MovieDay>
                </MovieWhen>
                <MovieWhen>
                    <MovieDate>4</MovieDate>
                    <MovieDay>수</MovieDay>
                </MovieWhen>
                <MovieWhen>
                    <MovieDate>5</MovieDate>
                    <MovieDay>목</MovieDay>
                </MovieWhen>
                <MovieWhen>
                    <MovieDate>6</MovieDate>
                    <MovieDay>금</MovieDay>
                </MovieWhen>
                <MovieWhen>
                    <MovieDate>7</MovieDate>
                    <MovieDay>토</MovieDay>
                </MovieWhen>
                <MovieWhen>
                    <MovieDate>8</MovieDate>
                    <MovieDay>일</MovieDay>
                </MovieWhen>

            </div>
            <div>
                <MovieTime>13:40~15:54</MovieTime>
                <MovieTime>16:25~18:39</MovieTime>
                <MovieTime>19:10~21:24</MovieTime>
                <MovieTime>21:45~23:59</MovieTime>
            </div>
        </div>
    );
}

export default When;