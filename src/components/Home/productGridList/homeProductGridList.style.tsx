import styled from "styled-components";





export const ProductGridList_ul__is_gridContainer = styled.ul`


    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 1rem;
    margin-left: 10rem;
    margin-right: 10rem;



`


export const ProductGridList_button = styled.button`
    

    background-color: var(--color-PRIMARY);
    border: 1px solid var(--button-secondary-color);
    color: var(--button-secondary-color);
    height: 4.5rem;
    width: 20rem;
    margin-bottom: 1rem;
    box-shadow: none
    



`

export const ProductGridList_section = styled.section`
    

    display: flex;
    flex-direction: column;
    width: auto;
    align-items: center;
    justify-content: center;



`