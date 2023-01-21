import styled from "styled-components";
import React, {Component} from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Americano from "../image/americano.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
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
  background-size: cover;
  img{
    
    max-width: 100%;
    height: auto;
  }
`;

const StyledSlider = styled(Slider)`
    .slick-list{
        width: 25vw;
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

    .slick-slide{
        visibility: hidden;
    }

    .slick-slide.slick-active{
        visibility: visible;
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
    
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
`;

const items : IChoice[] = [
    { name: "cafe", url: Americano },
    { name: "ramen", url: Ramen },
    { name: "cgv", url: CGV },
    { name: "cafe", url: Americano},
    { name: "ramen", url: Ramen},
    { name: "cgv", url: CGV }
    ];

function HardChoice () {
    const navigate = useNavigate();
    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        centerMode: true,
        fade:true,
        centerPadding: "60px",
        autoplay: true,
        autoSpeed: 5000,
        pauseOnHover: true,
      };

      const handleClickProducts= (objId:string) => {
        navigate(`/Menu/home/hard/${objId}`);
      };

    return (<div>
        <section className="carousel">
            <StyledSlider {...settings}
            >
                {items.map((item,index) => (
                   <SliderItem key={index}> 
                        <Img onClick={() => {handleClickProducts(item.name)}} src={item.url}></Img>
                    </SliderItem>
                ))} 
            </StyledSlider>
         </section>
        </div>
    );
}

export default HardChoice;