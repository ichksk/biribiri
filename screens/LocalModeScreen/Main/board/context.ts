import { Dispatch, SetStateAction, createContext, useContext } from "react";

export const DialogVisibleContext = createContext<[boolean, Dispatch<SetStateAction<boolean>>]>([false, ()=>{}])
export const useDialogVisible = () => useContext(DialogVisibleContext)

export const SelectedChairContext = createContext<[number, Dispatch<SetStateAction<number>>]>([0, ()=>{}])
export const useSelectedChair = () => useContext(SelectedChairContext)
