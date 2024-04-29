import React from "react";
import { ThematicCard_li__is_itemContainer, ThematicCard_img, ThematicCard_p } from "./thematicCard.style";



export  default function ThematicCard(props:{imageLink:string, alt:string, title:string}){

    return(

        <ThematicCard_li__is_itemContainer>
            <ThematicCard_img src={require('../../../assets/images/'+ props.imageLink)} alt={props.alt} />
            <ThematicCard_p>{props.title}</ThematicCard_p>
        </ThematicCard_li__is_itemContainer>


    );
}