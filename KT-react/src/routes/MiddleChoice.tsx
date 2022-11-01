import styled from "styled-components";
import React, {Component} from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Ramen from "../image/Ramen.jpg";



/*
const ContentContainer = styled.div`
display: grid;
grid-template-columns: repeat(2, minmax(400px, 1fr));
grid-gap: 100px;
padding: 50px;
width: 80%;
padding-top: 70px;
box-sizing: border-box;
`;

const Content = styled.div`
  
  background-color: white;
  margin-bottom: 70px;
  font-weight: 300;
  padding: 20px;
  border-radius: 5px;
  color: #adaeb9;
  display: grid;
  grid-template-columns: minmax(150px, 1fr) 2fr;
  grid-gap: 20px;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  &:first-child{
    margin: 0;
    font-weight: 300;
    text-decoration: none;
  }

  &:last-child{
    margin: 0;
    font-weight: 150;
    text-decoration: none;
    flex-wrap: wrap;
  }
`;

interface IChoice{
    title: string;
    content: string;
}
*/

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
const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;

const Tab = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 0px;
  border-radius: 10px;
  color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.textColor};
  a {
    padding: 7px 0px;
    display: block;
  }
`;

function MiddleChoice () {
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
                        <img src={Ramen} alt={item.name}/>
                    </SliderItem>
                ))} 
            </StyledSlider>

         </section>
        </div>
    );
}

export default MiddleChoice;