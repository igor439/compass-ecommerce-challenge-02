import React from "react";
import { NavBar_ul } from "../navBar/navBar.style";
import { Footer_Article_Ul_Li_img__is_icon, Footer_Article_p, Footer_Section_h1, Footer_Ul__li, Footer_div__is_BottomConteiner, Footer_address, Footer_article, Footer_h1__is_bottomSpaced, Footer_section, Footer_ul__is_collum, Footer_ul__is_row, Footer_div__is_rightsConteiner, Footer_input, Footer_Input_button } from "./footer.style";


export default function Footer(){



    return (

        <>
            <Footer_article>

                <Footer_ul__is_row>
                    <Footer_Ul__li>
                        <Footer_Article_Ul_Li_img__is_icon src={require('../../assets/images/high_quality.svg').default} alt="trophy icon"/>
                        <hgroup>
                            <h1>High Quality</h1>
                            <Footer_Article_p>crafted from top materials</Footer_Article_p>
                        </hgroup>
                    </Footer_Ul__li>

                    <Footer_Ul__li>
                        <Footer_Article_Ul_Li_img__is_icon src={require('../../assets/images/warrant_protection.svg').default} alt="checked icon"/>
                        <hgroup>
                            <h1>Warranty Protection</h1>
                            <Footer_Article_p>Over 2 years</Footer_Article_p>
                        </hgroup>
                    </Footer_Ul__li>

                    <Footer_Ul__li>
                        <Footer_Article_Ul_Li_img__is_icon src={require('../../assets/images/free_shipping.svg').default} alt="delivery icon"/>
                        <hgroup>
                            <h1>Free Shipping</h1>
                            <Footer_Article_p>Order over 150 $</Footer_Article_p>
                        </hgroup>
                    </Footer_Ul__li>

                    <Footer_Ul__li>
                        <Footer_Article_Ul_Li_img__is_icon src={require('../../assets/images/support.svg').default} alt="telemarketing icon"/>
                        <hgroup>
                            <h1>24 / 7 Support</h1>
                            <Footer_Article_p>Dedicated support</Footer_Article_p>
                        </hgroup>
                    </Footer_Ul__li>
                
                </Footer_ul__is_row>

            </Footer_article>

            <Footer_div__is_BottomConteiner>
                <Footer_address>

                    <hgroup>
                        <Footer_h1__is_bottomSpaced>Funiro.</Footer_h1__is_bottomSpaced>
                        <Footer_Article_p>400 University Drive Suite 200 Coral<br/> Gables, <br/> FL 33134 USA</Footer_Article_p>
                    </hgroup>

                </Footer_address>

                <Footer_section>

                    <Footer_Section_h1>Links</Footer_Section_h1>

                    <Footer_ul__is_collum>
                        <Footer_Ul__li> <a href="">Home</a> </Footer_Ul__li>
                        <Footer_Ul__li> <a href="">Shop</a> </Footer_Ul__li>
                        <Footer_Ul__li> <a href="">About</a> </Footer_Ul__li>
                        <Footer_Ul__li> <a href="">Contact</a> </Footer_Ul__li>
                    </Footer_ul__is_collum>

                </Footer_section>


                <Footer_section>

                    <Footer_Section_h1>Help</Footer_Section_h1>

                    <Footer_ul__is_collum>
                        <Footer_Ul__li> <a href="">Payment Options</a> </Footer_Ul__li>
                        <Footer_Ul__li> <a href="">Returns</a> </Footer_Ul__li>
                        <Footer_Ul__li> <a href="">Privacy Policies</a> </Footer_Ul__li>
                    </Footer_ul__is_collum>

                </Footer_section>


                <Footer_section>

                    <Footer_Section_h1>Newsletter</Footer_Section_h1>
                
                    <form>
                        <Footer_input type="email" placeholder="Enter Your Email Address" required/>
                        <Footer_Input_button type="submit">SUBSCRIBE</Footer_Input_button>
                    </form>

                </Footer_section>
            </Footer_div__is_BottomConteiner>

            <Footer_div__is_rightsConteiner>
                <p>2023 furino. All rights reverved</p>
            </Footer_div__is_rightsConteiner>
    
        </>

        


    );

}