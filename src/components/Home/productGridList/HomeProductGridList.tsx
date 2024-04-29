import React, { useCallback, useContext, useEffect, useState } from "react";
import { ProductGridList_button, ProductGridList_section, ProductGridList_ul__is_gridContainer } from "./homeProductGridList.style";
import { HomeDispatcher } from "../../../dispatchers/homeDispatcher/HomeDispatcher";
import { HomeProductStore } from "../../../stores/homeProductStore/HomeProductStore";
import { ProductCardProps } from "../../../models/types";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";

import * as ProductActions from '../../../actions/homeActions/HomeActions'
import { NavigationContext } from "../../../routers/NavigationContext";


const dispatcher:HomeDispatcher = HomeDispatcher.getInstance();
const homeStore:HomeProductStore = new HomeProductStore();
let clickCount:number = 0;

dispatcher.register(homeStore.handleAction.bind(homeStore))







/**
 * 
 * caso queira que a Store da home seja alimentada pasivamente 
 * via outros componentes fazer HomeProductStore singleton
 * e registrar handleStoreChange() na store fora da função do componente
 * 
 */

export default function HomeProductGridList(){ 

    const [productList,setProductList] = useState<ProductCardProps[]>([]);
    const {navStack, setNavStack} = useContext(NavigationContext);

    let navigate = useNavigate()

    const loadData = () => {
        clickCount++;
        if(clickCount < 2){
    
            ProductActions.loadMoreProductData(clickCount);
    
        }else{
            navigate('/Shop');
            setNavStack([...navStack,'Shop']);
            clickCount = 0;
        }
    }

        
        
 
    
    useEffect(()=>{

        homeStore.on("DATA-CHANGE",()=>{
            setProductList(homeStore.state);      
          })

        

          ProductActions.fetchProductsDataAction(1);

        


          return ()=>{
            ProductActions.trimProductsDataAction()
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

            <ProductGridList_button onClick={loadData}>Show More</ProductGridList_button>
            
        </ProductGridList_section>
       



    );


}