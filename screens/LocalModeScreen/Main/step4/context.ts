import { Dispatch, SetStateAction, createContext, useContext } from "react";

export const CheckResultContext = createContext<[boolean, Dispatch<SetStateAction<boolean>>]>([false, ()=>{}])
export const useCheckResult = () => useContext(CheckResultContext)