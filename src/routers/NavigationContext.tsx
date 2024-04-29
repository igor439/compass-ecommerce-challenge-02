import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

export interface NavigationContextInterface {

    navStack:string[],
    setNavStack: Dispatch<SetStateAction<string[]>>
}

const defaultStack = {
    navStack:['Home'],
    setNavStack:(navStack:string[])=>{}
} as NavigationContextInterface


export const NavigationContext = createContext(defaultStack);

type NaviagtionProviderProps = {
    children:ReactNode
}


export default function NavigationProvider({children}:NaviagtionProviderProps){

    const [navStack, setNavStack] = useState<string[]>(['Home'])

    return(
        <NavigationContext.Provider value={{ navStack, setNavStack}}>
            {children}
        </NavigationContext.Provider>
    );
}