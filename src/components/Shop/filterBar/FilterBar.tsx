import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavBar_ul } from "../../navBar/navBar.style";
import { FilterBar_Ul_li__is_moreEspacedAndTextBlack, FilterBar_div__is_queryContainer, FilterBar_img__is_ShopBarIcon, FilterBar_section__is_barContainer } from "./filterBar.style";
import CheckBoxDropDown from "./CheckBoxDropDown";
import OptionsDropDown, { numbersQueryDefArray, stringsQueryDefArray } from "./OptionsDropDown";
import QueryProvider, { QueryContext } from "./QueryContext";
import { OptionsDropDown_li__is_dropDownItem, OptionsDropDown_li__is_pageOrderdropDownSelectedItem, OptionsDropDown_li__is_pageSizedropDownSelectedItem } from "./optionsDropDown.style";


export default function FilterBar(){

    const {queryObj, setqueryObj} = useContext(QueryContext);

    const [isDownPageSize,setisDownPageSize] = useState<boolean>(false);

    const [isDownOrder,setIsDownOrder] = useState<boolean>(false);



    const handleDropPageSize = ()=>{

        setisDownPageSize(!isDownPageSize);

    }


    const handleDropPageOrder = ()=>{

        setIsDownOrder(!isDownOrder);
        
    }



    return(
            <FilterBar_section__is_barContainer>
                <NavBar_ul>
                    <FilterBar_Ul_li__is_moreEspacedAndTextBlack> <FilterBar_img__is_ShopBarIcon src={require("../../../assets/icons/filter_icon_svg.svg").default} alt="#" /> <CheckBoxDropDown/> </FilterBar_Ul_li__is_moreEspacedAndTextBlack>
                    <FilterBar_Ul_li__is_moreEspacedAndTextBlack><FilterBar_img__is_ShopBarIcon src={require("../../../assets/icons/shop_bar_icon_01_svg.svg").default} alt="#" />  </FilterBar_Ul_li__is_moreEspacedAndTextBlack>
                    <FilterBar_Ul_li__is_moreEspacedAndTextBlack> <FilterBar_img__is_ShopBarIcon src={require("../../../assets/icons/shop_bar_icon_02_svg.svg").default} alt="#" /></FilterBar_Ul_li__is_moreEspacedAndTextBlack>
                </NavBar_ul>

                <NavBar_ul>
                    <FilterBar_Ul_li__is_moreEspacedAndTextBlack> 
                        Show
                        <OptionsDropDown_li__is_pageSizedropDownSelectedItem onClick={handleDropPageSize}>{queryObj.pageSize}</OptionsDropDown_li__is_pageSizedropDownSelectedItem>
                        <FilterBar_div__is_queryContainer style={{display: isDownPageSize?'block':'none'}}>  
                            
                            <OptionsDropDown dataArray={numbersQueryDefArray} /> 
                        </FilterBar_div__is_queryContainer>
                        
                    </FilterBar_Ul_li__is_moreEspacedAndTextBlack>
                    <FilterBar_Ul_li__is_moreEspacedAndTextBlack>
                        Short by
                        <OptionsDropDown_li__is_pageOrderdropDownSelectedItem onClick={handleDropPageOrder}>{queryObj.order}</OptionsDropDown_li__is_pageOrderdropDownSelectedItem>
                        <FilterBar_div__is_queryContainer style={{display: isDownOrder?'block':'none'}}>  
                            
                            <OptionsDropDown dataArray={stringsQueryDefArray} /> 
                        </FilterBar_div__is_queryContainer> 
                    </FilterBar_Ul_li__is_moreEspacedAndTextBlack>
                </NavBar_ul>
            
            </FilterBar_section__is_barContainer>
    );


}