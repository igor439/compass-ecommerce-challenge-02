export interface Action{
    action:string;
    data:any;
}

export interface Dispatcher {

    callBacks: ((action:Action)=> void)[];
    register (callBack: (action:Action)=> void): void;
    unregister(callBack: (action:Action)=> void): void;
    dispatch(action: Action): void;
}


export interface Store{

    state:any;
    callbaks:(()=>void)[];
    register(callBack: ()=>void): void;
    unregister(callBack: ()=>void): void;
    handleAction(action:Action): void;
    

}

