import axios from "axios";
import EventEmitter from "events";
import { Store, Action } from "../../FlexPatternInterfaces";
import { ProductCardProps } from "../../models/types";
import { stringActions } from "../../actions/ActionsList";

export class ShopProductStore extends EventEmitter implements Store {
    
    private _state: any = [] as ProductCardProps[];
    private _callbaks: (() => void)[] = [];
    private trimData:boolean = false;

    constructor(){
        super();

        this.on("UPDATE-INTERNAL-DATA",()=>{
            if(this.trimData){
                this._state = this._state.slice(0,16);
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

                if(!action.data.category){

                    axios.get(`http://localhost:3000/products/filter?page=${action.data.page}&pageSize=${action.data.pageSize}`).then((response)=>{

                    const newArray = [...this._state, ...response.data];
                    this._state = newArray;

                            
                        this.emit('UPDATE-INTERNAL-DATA');
                    }

                    ).catch((error) => {
                        console.error("Erro ao buscar os produtos:", error);
                    });

                }else{

                    axios.get(`http://localhost:3000/products/filter?category=${action.data.category}&page=${action.data.page}&pageSize=${action.data.pageSize}`).then(
                        (response)=>{

                    const newArray = [...this._state, ...response.data];
                    this._state = newArray;

                            
                        this.emit('UPDATE-INTERNAL-DATA');
                    }

                    ).catch((error) => {
                        console.error("Erro ao buscar os produtos:", error);
                    });

                }
                    


                    
               
                break;
            case stringActions.trimData:    
                    this.trimData = true;
                    
                break;
            
            case stringActions.loadDataByFilters:

            if(!action.data.category){

                axios.get(`http://localhost:3000/products/filter?page=${action.data.page}&pageSize=${action.data.pageSize}`).then((response)=>{

                const newArray = [...this._state, ...response.data];
                this._state = newArray;

                        
                    this.emit('DATA-CHANGE');
                }

                ).catch((error) => {
                    console.error("Erro ao buscar os produtos:", error);
                });

            }else{

                axios.get(`http://localhost:3000/products/filter?category=${action.data.category}&page=${action.data.page}&pageSize=${action.data.pageSize}`).then(
                    (response)=>{

                const newArray = [...this._state, ...response.data];
                this._state = newArray;

                        
                    this.emit('DATA-CHANGE');
                }

                ).catch((error) => {
                    console.error("Erro ao buscar os produtos:", error);
                });

            }                

                break;
            case stringActions.loadDataByArrayFilters:

            

                break;
            default:
                break;
        }
    }

}