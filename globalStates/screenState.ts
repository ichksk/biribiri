import { atom, useRecoilState } from "recoil";

export const screenStateAtom = atom<"Title"|"Local"|"Multi"|"Settings">({
  key: 'screenStateAtom',
  default: "Title",
});

export const useScreenState = () => useRecoilState(screenStateAtom);