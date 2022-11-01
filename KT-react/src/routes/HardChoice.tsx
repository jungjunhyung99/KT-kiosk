import styled from "styled-components";
import React, {Component} from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Americano from "../image/americano.png";


interface IChoice{
    name: string;
    url: string;
}

const SliderItem = styled.div`
  width: 100%;
  img{
    max-width: 100%;
    height: auto;
  }
`;

const StyledSlider = styled(Slider)`
    .slick-list{
        width: 250px;
        margin: 0 auto;
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
`;

const SlideWrapper = styled.section`
    position: relative;
`;

const ImageContainer = styled.div`
  margin: 0 16px;  
`;

const Image = styled.div`
    max-width: 100%;
    max-height: 100%;
`;

const imgUrl = styled.image`
    width: 300px;
    height: 300px;    
`;

function HardChoice () {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        centerMode: true,
      };

    const items : IChoice[] = [
        { name: "대체", url: 'http://placehold.it/1200x400' },
        { name: "대체", url: imgUrl },
        { name: "대체", url: imgUrl },
        { name: "대체", url: imgUrl },
        { name: "대체", url: imgUrl },
        { name: "대체", url: imgUrl },
      ];
    

    return (<div>
        <section className="carousel">
            <StyledSlider {...settings}
            >
                {items.map((item,index) => (
                    <SliderItem key={index}>
                        <img src={Americano} alt={item.name}/>
                    </SliderItem>
                ))} 
            </StyledSlider>

         </section>
        </div>
    );
}

export default HardChoice;