import { atom } from "recoil";

export interface IAtomMovie {
    title: string;
    time: string;
    seat: number;
}

export const movieObj = atom<IAtomMovie>({
    key: "movieState",
    default: {
        title: 'm',
        time: '',
        seat: 0,
    },
});

export interface IAtomCafe {
    name: string;
    quantity: number;
}

export const cafeObj = atom<IAtomCafe[]>({
    key: "movieState",
    default: [],
}) 