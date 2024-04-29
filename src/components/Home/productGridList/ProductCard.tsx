import React from "react";
import { ProductCardProps } from "../../../models/types";
import { ProductCard_Div_Nav_Ul_Li_img__is_icon, ProductCard_Div_Nav_Ul_li__is_hoverLinks, ProductCard_Div_nav, ProductCard_button, ProductCard_del__is_originaryPrice, ProductCard_div__is_productCardContentConatiner, ProductCard_div__is_productCardHoverConatiner, ProductCard_hgroup, ProductCard_igm, ProductCard_li__is_itemContainer, ProductCard_p__is_cardDescription, ProductCard_p__is_cardPrice, ProductCard_ul } from "./productCard.style";

export default function ProductCard(props:{product:ProductCardProps}){

    return(

        <ProductCard_li__is_itemContainer>

            <ProductCard_div__is_productCardContentConatiner>

                <ProductCard_igm src={props.product.image_link} />
                
                <ProductCard_hgroup>
                    <h1>{props.product.name}</h1>

                    <ProductCard_p__is_cardDescription> {props.product.description} </ProductCard_p__is_cardDescription>

                    {props.product.discount_price !== props.product.price ? (
                        
                        <ProductCard_p__is_cardPrice> { "Rp "+ props.product.discount_price.toString()} 

                        <ProductCard_del__is_originaryPrice>{"Rp " + props.product.price.toString()}</ProductCard_del__is_originaryPrice>
                        
                        </ProductCard_p__is_cardPrice>):(

                        <ProductCard_p__is_cardPrice>{"Rp "+ props.product.discount_price.toString()}</ProductCard_p__is_cardPrice> )}

                </ProductCard_hgroup>

            </ProductCard_div__is_productCardContentConatiner>


            <ProductCard_div__is_productCardHoverConatiner>

                <ProductCard_Div_nav>

                    <ProductCard_button>See Details</ProductCard_button>

                    <ProductCard_ul>
                        <ProductCard_Div_Nav_Ul_li__is_hoverLinks><ProductCard_Div_Nav_Ul_Li_img__is_icon src={require("../../../assets/icons/share_icon.svg").default} alt="#"/> <p>Share</p></ProductCard_Div_Nav_Ul_li__is_hoverLinks>
                        <ProductCard_Div_Nav_Ul_li__is_hoverLinks><ProductCard_Div_Nav_Ul_Li_img__is_icon src={require("../../../assets/icons/compare_icon.svg").default} alt="#"/><p>Compare</p></ProductCard_Div_Nav_Ul_li__is_hoverLinks>
                        <ProductCard_Div_Nav_Ul_li__is_hoverLinks><ProductCard_Div_Nav_Ul_Li_img__is_icon src={require("../../../assets/icons/like_icon.svg").default} alt="#"/><p>Like</p></ProductCard_Div_Nav_Ul_li__is_hoverLinks>
                    </ProductCard_ul>

                </ProductCard_Div_nav>
                
            </ProductCard_div__is_productCardHoverConatiner>
            
        </ProductCard_li__is_itemContainer>
    );


}