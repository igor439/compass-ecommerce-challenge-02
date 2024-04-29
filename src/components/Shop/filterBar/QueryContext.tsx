import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

export type QueryObj = {category:string[],pageSize:number,order:string}


export interface QueryContextInterface {

    queryObj:QueryObj,
    setqueryObj: Dispatch<SetStateAction<QueryObj>>
}

const defaultQuery = {
    queryObj:{category:[''],pageSize:16,order:'default'},
    setqueryObj:(queryObj:QueryObj) => {}
} as QueryContextInterface;


export const QueryContext = createContext(defaultQuery);

type QueryProviderProps = {
    children:ReactNode
}


export default function QueryProvider({children}:QueryProviderProps){

    const [queryObj, setqueryObj] = useState<QueryObj>({category:[''],pageSize:16,order:'default'})

    return(
        <QueryContext.Provider value={{ queryObj, setqueryObj}}>
            {children}
        </QueryContext.Provider>
    );
}