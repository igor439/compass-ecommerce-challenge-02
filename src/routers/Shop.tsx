import React, { useState } from "react";
import { ProductGridList_section, ProductGridList_ul__is_gridContainer } from "../components/Home/productGridList/homeProductGridList.style";
import { ProductCardProps } from "../models/types";
import ProductCard from "../components/Home/productGridList/ProductCard";
import { HomeDispatcher } from "../dispatchers/homeDispatcher/HomeDispatcher";
import { HomeProductStore } from "../stores/homeProductStore/HomeProductStore";
import ShopProductGridList from "../components/Shop/productGridList/ShopProductGridList";
import Cover from "../components/Shop/cover/Cover";
import FilterBar from "../components/Shop/filterBar/FilterBar";
import QueryProvider from "../components/Shop/filterBar/QueryContext";


export default function Shop(){


    return(
    
       <section>
        <Cover/>
        <QueryProvider>
        <FilterBar/>
        </QueryProvider>
       <ShopProductGridList/>
        
       </section>
);

}