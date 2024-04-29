import { ProductCardProps } from "./types";



export  class  ProductCard{

   
    constructor( private _productCardProps:ProductCardProps){}

    get productCardProps(): ProductCardProps {
        return this._productCardProps;
    }
    

    set productCardProps(value: ProductCardProps) {
        this._productCardProps = value;
    }








    


}

