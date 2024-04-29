import React, { useContext } from "react";
import { Cover_styledLink, Cover_div__is_textContainer, Cover_h1__isTitleAbsolute, Cover_header__is_shopHeaderConteiner, Cover_img, Cover_ul__is_navStackInfoConatiner, Cover_li__isNavigationStackItems, Cover_img__is_ArrowIcon } from "./cover.style";
import { NavigationContext } from "../../../routers/NavigationContext";
import { Link } from "react-router-dom";



export default function Cover(){

    const {navStack, setNavStack} = useContext(NavigationContext)

    return(
        
        <Cover_header__is_shopHeaderConteiner>

            <Cover_img src={require('../../../assets/images/shop_cover.png')} alt="#"/>

            <Cover_div__is_textContainer>

                <Cover_h1__isTitleAbsolute>Shop</Cover_h1__isTitleAbsolute>

                <nav>
                    <Cover_ul__is_navStackInfoConatiner>

                    {navStack.map((item, index) => (
                            <Cover_li__isNavigationStackItems key={index}>
                                <Cover_styledLink to={item === 'Home' ? '/' : `/${item}`} isBold={index !== navStack.length - 1}>
                                    {item}
                                </Cover_styledLink>
                                {index !== navStack.length - 1 ? <Cover_img__is_ArrowIcon src={require("../../../assets/icons/arrow_svg.svg").default}/>:<></>}
                            </Cover_li__isNavigationStackItems>
                        ))}

                        
                    </Cover_ul__is_navStackInfoConatiner>
                </nav>
            
            
            </Cover_div__is_textContainer>         
            

            

            


          
        

        </Cover_header__is_shopHeaderConteiner>
    );
    
}