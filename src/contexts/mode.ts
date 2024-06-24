import { Dispatch, SetStateAction, createContext, useContext } from "react";

export const ModeContext = createContext<[number, Dispatch<SetStateAction<number>>]>([0, ()=>{}])
export const useMode = () => useContext(ModeContext)