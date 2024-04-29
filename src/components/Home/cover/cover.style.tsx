import styled from "styled-components";



export const Cover_div__is_imageContainer = styled.div`
    width: 100%;
    height: 41rem;
    overflow: hidden;
    position: relative;
`


export const Cover_Div_img__is_coverImage = styled.img`
    
    width: 100%;
    height: 60rem;
    object-fit: cover;

`


export const Cover_div__is_mensageContainer = styled.div`

    width: 45%;
    height: 25em;
    position: absolute;
    background-color: var(--color-TERTIARY);
    justify-content: left;
    align-items: center;
    top: 20em; /* Alinha o filho no topo do pai */
    right: 3.5em; /* Alinha o filho à direita do pai */
  
`

export const Cover_p__is_menssage = styled.p`
    margin: 3em;
    font-weight: var(--fw-semibold);
    font-size: calc(var(--fs-p-medium) - .2rem);
`


