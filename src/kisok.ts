import useQuery from "react-query";
import Americano from "./image/americano.png"
import Espresso from "./image/Espresso.jpg";
import SweetPo from "./image/SweetPo.jpg";
import Latte from "./image/Latte.jpg";
import IceTea from "./image/IceTea.jpg";
import Tiramisu from "./image/Tiramisu.png";
import Chococake from "./image/Chococake.png";
import Bagle from "./image/Bagle.png";
import Browny from "./image/Browny.png";
import Apogatto from "./image/Apogatto.png";
import Soybean from "./image/Soybean.png";

export const image = [Americano, SweetPo, Espresso, Latte,IceTea, Apogatto,Soybean];
export const image2 = [Tiramisu, Chococake, Bagle, Browny];

export const kioskObj = [
    {
        id: "0", 
        sub:"CGV 요약본입니다.",
        img: image[0],
        name: "아메리카노",
        cost: 3500,
        selected: false,
        quantity: 1,
    },
    {
        id: "1", 
        sub:"Cafe 요약본입니다.",
        img: image[1],
        name: "고구마라떼",
        cost: 4000,
        selected: false,
        quantity: 1,
    },
    {
        id: "2", 
        sub:"식당 예약본입니다.",
        img: image[2],
        name: "에스프레소",
        cost: 3000,
        selected: false,
        quantity: 1,
    },
    
    {
        id: "3", 
        sub:"식당2 예약본입니다.",
        img: image[3],
        name: "카페라떼",
        cost: 4000,
        selected: false,
        quantity: 1,
    },

    {
        id: "4", 
        sub:"식당2 예약본입니다.",
        img: image[4],
        name: "아이스티",
        cost: 3000,
        selected: false,
        quantity: 1,
    },
    {
        id: "5", 
        sub:"식당2 예약본입니다.",
        img: image[5],
        name: "아포가토",
        cost: 3000,
        selected: false,
        quantity: 1,
    },
    {
        id: "6", 
        sub:"식당2 예약본입니다.",
        img: image[6],
        name: "두유라떼",
        cost: 4500,
        selected: false,
        quantity: 1,
    },
];


export const kioskObj2 = [
    {
        id: "10", 
        sub:"달콤한 티라미수",
        img: image2[0],
        name: "티라미수 케잌",
        cost: 3500,
        selected: false,
        quantity: 1,
    },
    {
        id: "11", 
        sub:"바삭한 초코칩이 들어간 케이크",
        img: image2[1],
        name: "초코케이크",
        cost: 4000,
        selected: false,
        quantity: 1,
    },
    {
        id: "12", 
        sub:"담백한 식감의 베이글",
        img: image2[2],
        name: "플레인베이글",
        cost: 3000,
        selected: false,
        quantity: 1,
    },
    
    {
        id: "13", 
        sub:"단게 땡길때 먹는 브라우니",
        img: image2[3],
        name: "브라우니",
        cost: 4000,
        selected: false,
        quantity: 1,
    },
];
