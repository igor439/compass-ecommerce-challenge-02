import { Link } from "react-router-dom";
import styled from "styled-components";


export const Cover_header__is_shopHeaderConteiner = styled.header`

        width: 100%;
        margin: 0px;
        position: relative;



`


export const  Cover_img = styled.img`


    width: 100%;
    height: auto;
    object-fit: cover;
    opacity: .5;
    filter: blur(2px);

   

`


export const Cover_ul__is_navStackInfoConatiner = styled.ul`

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 0px;
    font-size: calc(var(--fs-p-small) + .5em);

`


export const Cover_h1__isTitleAbsolute = styled.h1`
    
    font-size: 4.8em;
    font-weight: var(--fw-medium);


`


export const Cover_div__is_textContainer = styled.div`


position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: var(--fc-TERTIARY);
    z-index: 1; /* Garante que o texto fique sobre a imagem */
  


`


export const Cover_styledLink = styled(Link)<{ isBold: boolean }>`
    font-weight: ${({ isBold }) => (isBold ? 600 : "normal")};
`;


export const Cover_li__isNavigationStackItems = styled.li`

    padding-right:.5em;


`


export const Cover_img__is_ArrowIcon = styled.img`
    
    margin-left: .5em;
    


`


