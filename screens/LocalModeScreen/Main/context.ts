import { Dispatch, SetStateAction, createContext, useContext } from "react";

export const DialogVisibleContext = createContext<[boolean, Dispatch<SetStateAction<boolean>>]>([false, ()=>{}])
export const useDialogVisible = () => useContext(DialogVisibleContext)

export const CurrentChairContext = createContext<[number, Dispatch<SetStateAction<number>>]>([-1, ()=>{}])
export const useCurrentChair = () => useContext(CurrentChairContext)
