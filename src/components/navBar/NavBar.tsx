import React from "react";
import { Link } from "react-router-dom";
import { NavBar_Header_nav, NavBar_Ul_li__is_lessEspaced, NavBar_Ul_li__is_moreEspaced, NavBar_header, NavBar_img__is_icon, NavBar_ul} from "./navBar.style";


export default function NavBar(){

    return (
        
        <NavBar_header>

            <img src={require('../../assets/images/logo.svg').default} alt="Store logo"/>

            <NavBar_Header_nav>

                <NavBar_ul>
                    <NavBar_Ul_li__is_moreEspaced> <Link to={'/'}>Home</Link></NavBar_Ul_li__is_moreEspaced>
                    <NavBar_Ul_li__is_moreEspaced> <Link to={'/Shop'}>Shop</Link> </NavBar_Ul_li__is_moreEspaced>
                    <NavBar_Ul_li__is_moreEspaced> <a href="">About</a> </NavBar_Ul_li__is_moreEspaced>
                    <NavBar_Ul_li__is_moreEspaced> <a href="">Contact</a> </NavBar_Ul_li__is_moreEspaced>
                </NavBar_ul>

            </NavBar_Header_nav>

            <NavBar_Header_nav>

                <NavBar_ul>
                    <NavBar_Ul_li__is_lessEspaced> <a href=""> <NavBar_img__is_icon src={require("../../assets/icons/profile_icon_svg.svg").default} alt="Profile link indicator icon" /></a> </NavBar_Ul_li__is_lessEspaced>
                    <NavBar_Ul_li__is_lessEspaced> <a href=""> <NavBar_img__is_icon src={require("../../assets/icons/search_icon_svg.svg").default} alt="Search bar indicator icon"/> </a> </NavBar_Ul_li__is_lessEspaced>
                    <NavBar_Ul_li__is_lessEspaced> <a href=""> <NavBar_img__is_icon src={require("../../assets/icons/favorite_icon_svg.svg").default} alt="Favorite link indicator icon"/></a> </NavBar_Ul_li__is_lessEspaced>
                    <NavBar_Ul_li__is_lessEspaced> <a href=""> <NavBar_img__is_icon src={require("../../assets/icons/cart_icon_svg.svg").default} alt="Cart link indicator icon" /> </a> </NavBar_Ul_li__is_lessEspaced>
                </NavBar_ul>

            </NavBar_Header_nav>

        </NavBar_header>

    );
}