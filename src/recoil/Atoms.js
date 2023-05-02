import { atom } from "recoil";

export const dataAtom = atom({
    key: "data",
    default: null,
  });

export const amountAtom=atom({
  key:"amount",
  default:0,
});

export const selectedItemsAtom=atom({
  key:"items",
  default:[],//null
});