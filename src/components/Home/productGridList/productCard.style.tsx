import styled from "styled-components";





export const ProductCard_li__is_itemContainer = styled.li`
    

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    width: auto;
    height: auto;
    

`

export const ProductCard_div__is_productCardContentConatiner = styled.div`


    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    width: 20rem;
    height: auto;
    background-color:var(--card-bg-color);
    padding-bottom: 2rem;
    




`

export const ProductCard_hgroup = styled.hgroup`

    display: flex;
    flex-direction: column;
    margin-left: 1rem;

`



export const ProductCard_div__is_productCardHoverConatiner = styled.div`

    width: 20rem;
    height: 28.9rem;
    display: flex;
    flex-direction:column;
    overflow: hidden;
    background-color:var(--card-hover-bg-color);
    justify-content: center;
    align-items: center;
    position: absolute;
    opacity: 0;
    transition: opacity 0.3s ease, width 1s, height 1s;
 

    &:hover {
        opacity: 1; 
        
    }

`

export const ProductCard_Div_nav = styled.nav`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;



`


export const  ProductCard_button = styled.button`

    background-color: var(--color-PRIMARY);
    border: 1px solid var(--fc-QUATERNARY);
    color: var(--button-secondary-color);
    height: 4.5rem;
    width: 15rem;
    margin-bottom: 1rem;
    box-shadow: none


    
`


export const ProductCard_ul = styled.ul`

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    color: var(--color-PRIMARY);
    padding: 0px;


`

export const ProductCard_igm=styled.img`
    object-fit: cover;
    height: 100%;
    width: 100%;
`


export const ProductCard_p__is_cardDescription = styled.p`
    
    color: var(--fc-SECONDARY);

`

export const ProductCard_p__is_cardPrice = styled.p`
    
    color: var(--fc-QUINARY);
    margin-top:.5rem;
    font-weight: var(--fw-bold);

`


export const ProductCard_del__is_originaryPrice = styled.del`
    

    color: var(--fc-SECONDARY);
    margin-left: 1rem;
    font-weight: var(--fw-regular);
    opacity: .6;


`


export const ProductCard_Div_Nav_Ul_li__is_hoverLinks = styled.li`

    display: flex;
    flex-direction: row;
    margin-left: .5em;
    margin-right: .5rem;
    

`


export const ProductCard_Div_Nav_Ul_Li_img__is_icon =styled.img`

    margin-left: .5rem;
    margin-right: .5rem;
`