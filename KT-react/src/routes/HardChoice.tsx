import styled from "styled-components";
import React, {Component} from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Americano from "../image/americano.png";
import { Link } from "react-router-dom";
import CGV from "../image/CGV.jpg";
import Ramen from "../image/Ramen.jpg";

interface IChoice{
    name: string;
    url: string;
}

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    font-weight: 800;
    &:focus, &hover, &:visited, &:link, &active{
        text-decoration: none;
    }
`;


const SliderItem = styled.div`
  width: 100%;
  img{
    max-width: 100%;
    height: auto;
  }
`;

const StyledSlider = styled(Slider)`
    .slick-list{
        width: 400px;
        margin: 0 auto;
        margin-left: 20px;
    }

    .slick-slide img {
        object-fit: cover;
        height: 300px;
        width: 100%;
        box-sizing: border-box;
    }

    .slick-dots{
        bottom: -50px;   
        margin-top: 200px;
    }
    
    .slick-slide div{
        cursor: pointer;
    }

    .slick-track{
        overflow-x: hidden;
    }

    .slick-prev:before, .slick-next:before{ // 양옆 버튼
    	font-family: 'slick';
        font-size: 40px;
        line-height: 1;
        opacity: .7;
        color:  #2BB7B3;
        -webkit-font-smoothing: antialiased;
    }
`;

const SlideWrapper = styled.section`
    position: relative;
`;

const Img = styled.img`
    width: 400px;
    height: 100px;
`;

function HardChoice () {
    const settings = {
        dots: true,
        infinite: true,
        speed: 3500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        centerMode: true,
        centerPadding: "60px",
        fade: true,
        autoplay: true,
        autoSpeed: 5000,
        pauseOnHover: true,
      };

    const items : IChoice[] = [
        { name: "대체", url: Americano },
        { name: "대체", url: Ramen },
        { name: "대체", url: CGV },
        { name: "대체", url: Americano },
        { name: "대체", url: Ramen },
        { name: "대체", url: CGV },
      ];
    

    return (<div>
        <section className="carousel">
            <StyledSlider {...settings}
            >
                {items.map((item,index) => (
                    <SliderItem key={index}>
                        <StyledLink to={"/Menu/explain/:objId"}>
                            <Img src={item.url} alt={item.name}/>
                        </StyledLink>
                    </SliderItem>
                ))} 
            </StyledSlider>
         </section>
        </div>
    );
}

export default HardChoice;