import { Action, Dispatcher } from "../../FlexPatternInterfaces";


export class HomeDispatcher implements Dispatcher {

    private static _instance:HomeDispatcher;

    private constructor(){}
    unregister(callBack: (action: Action) => void): void {
        const index = this.callBacks.indexOf(callBack);
        if (index !== -1) {
            this.callBacks.splice(index, 1);
        }
    }

    

    callBacks: ((action: Action) => void)[] = [];

    register(callBack: (action: Action) => void): void {
      
            this.callBacks.push(callBack);
       
    }

    dispatch(action: Action): void {

    
        this.callBacks.forEach(callBack => callBack(action));
    }


    static getInstance(): HomeDispatcher {
        
        if(this._instance == null){
            this._instance = new HomeDispatcher();
        }

        return this._instance;
    }
}


