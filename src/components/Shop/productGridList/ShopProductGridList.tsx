import React, { useCallback, useEffect, useState } from "react";
import { HomeDispatcher } from "../../../dispatchers/homeDispatcher/HomeDispatcher";
import { ProductCardProps } from "../../../models/types";

import * as ShopActions from "../../../actions/shopActions/ShopActions"
import ProductCard from "../../Home/productGridList/ProductCard";
import { ProductGridList_section, ProductGridList_ul__is_gridContainer } from "../../Home/productGridList/homeProductGridList.style";
import { ShopProductStore } from "../../../stores/homeProductStore/ShopProductStore";
import { trimProductsDataAction } from "../../../actions/homeActions/HomeActions";


const dispatcher:HomeDispatcher = HomeDispatcher.getInstance();
const shopStore:ShopProductStore = new ShopProductStore();

dispatcher.register(shopStore.handleAction.bind(shopStore))







/**
 * 
 * caso queira que a Store da home seja alimentada pasivamente 
 * via outros componentes fazer HomeProductStore singleton
 * e registrar handleStoreChange() na store fora da função do componente
 * 
 */

export default function ShopProductGridList(){ 

    const [productList,setProductList] = useState<ProductCardProps[]>([]);


        
        
 
    
    useEffect(()=>{

        shopStore.on("DATA-CHANGE",()=>{
            setProductList(shopStore.state);      
          })

        

          ShopActions.fetchProductsDataByFilterAction(1,16);

        


          return ()=>{
            trimProductsDataAction()
          }
          

        
        

      
    },[])


    return(
        
        <ProductGridList_section>
        
            <ProductGridList_ul__is_gridContainer>

                {
              
                productList.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}

            </ProductGridList_ul__is_gridContainer>
            
        </ProductGridList_section>
       



    );


}