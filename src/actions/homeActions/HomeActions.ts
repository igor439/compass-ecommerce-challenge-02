import { Action } from "../../FlexPatternInterfaces";
import { HomeDispatcher } from "../../dispatchers/homeDispatcher/HomeDispatcher";
import { stringActions } from "../ActionsList";


const dispatcher:HomeDispatcher = HomeDispatcher.getInstance();



export function fetchProductsDataAction(page:number){

    dispatcher.dispatch({action:stringActions.fecthData,data:page})

}


export function trimProductsDataAction(){
    dispatcher.dispatch({action:stringActions.trimData,data:''})
}


export function loadMoreProductData(page:number){

    dispatcher.dispatch({action:stringActions.loadMoreData,data:page})

}

