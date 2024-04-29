import axios from "axios";
import { Action, Store } from "../../FlexPatternInterfaces";
import { ProductCardProps } from "../../models/types";
import EventEmitter from "events";
import { stringActions } from "../../actions/ActionsList";



export class HomeProductStore extends EventEmitter implements Store {
    
    private _state: any = [] as ProductCardProps[];
    private _callbaks: (() => void)[] = [];
    private trimData:boolean = false;

    constructor(){
        super();

        this.on("UPDATE-INTERNAL-DATA",()=>{
            if(this.trimData){
                this._state = this._state.slice(0,8);
                this.trimData = false;
                this.emit("DATA-CHANGE");
            }
            
            
                        
        })
    }



    get state(): ProductCardProps[] {
        return this._state;
    }

    
    get callbaks(): any {
        return [];
    }


    register(callBack: () => void): void {
       
            this._callbaks.push(callBack);
        
    }

    unregister(callBack: () => void): void {
        const index = this._callbaks.indexOf(callBack);
        if (index !== -1) {
            this._callbaks.splice(index, 1);
        }
        
    }

   

    async handleAction(action: Action): Promise<void> {
        switch(action.action) {
            case stringActions.fecthData:
                
                    axios.get(`http://localhost:3000/products?page=${action.data}`).then((response)=>{

                        const newArray = [...this._state, ...response.data];
                        this._state = newArray;

                        
                        this.emit('UPDATE-INTERNAL-DATA');
                    }

                    ).catch((error) => {
                        console.error("Erro ao buscar os produtos:", error);
                    });    


                    
               
                break;
            case stringActions.trimData:    
                    this.trimData = true;
                    
                break;
            
            case stringActions.loadMoreData:

                axios.get(`http://localhost:3000/products?page=${action.data}`).then((response)=>{

                        const newArray = [...this._state, ...response.data];
                        this._state = newArray;

                        
                        this.emit('DATA-CHANGE');
                    }

                    ).catch((error) => {
                        console.error("Erro ao buscar os produtos:", error);
                    });    


                    

                break;
            default:
                break;
        }
    }

}





