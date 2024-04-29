import React from "react";
import { Cover_Div_img__is_coverImage, Cover_div__is_imageContainer, Cover_div__is_mensageContainer, Cover_p__is_menssage } from "./cover.style";

export default function Cover(){

    return (
        <Cover_div__is_imageContainer>

            <Cover_Div_img__is_coverImage src={require('../../../assets/images/cover_image.png')} alt="living room with personalized decoration with Funrio furniture."/>

            <Cover_div__is_mensageContainer>
                <Cover_p__is_menssage>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</Cover_p__is_menssage>
            </Cover_div__is_mensageContainer>

        </Cover_div__is_imageContainer>
    );


}