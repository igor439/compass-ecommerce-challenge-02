import React from "react";
import Cover from "../components/Home/cover/Cover";
import ThematicCardList from "../components/Home/thematicCardList/ThematicCardList";
import { thematicImages } from "../staticData/staticData";
import HomeProductGridList from "../components/Home/productGridList/HomeProductGridList";


export default function Home(){

    return(
    
        <>
            <Cover />
            <ThematicCardList imgesCradProps={thematicImages} listTitle={"Browse The Range"}  />
            <HomeProductGridList/>
        </>
);

}