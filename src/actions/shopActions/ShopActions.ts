import { Action } from "../../FlexPatternInterfaces";
import { HomeDispatcher } from "../../dispatchers/homeDispatcher/HomeDispatcher";
import { stringActions } from "../ActionsList";


const dispatcher:HomeDispatcher = HomeDispatcher.getInstance();



export function fetchProductsDataByFilterAction(page:number,pageSize:number,category?:string){

    dispatcher.dispatch({action:stringActions.fecthData, data:{
        category:category, page:page, pageSize:pageSize

    }});
    
}

export function loadMoreProductsDataByFilterAction(page:number,pageSize:number,category?:string){

    dispatcher.dispatch({action:stringActions.loadDataByFilters, data:{
        category:category, page:page, pageSize:pageSize

    }});
    
}