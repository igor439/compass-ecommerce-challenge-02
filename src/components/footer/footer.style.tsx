import styled from "styled-components";




export const Footer_article = styled.article`
    background-color: var(--color-SECONDARY);
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    padding-top: 3em;
    padding-bottom: 3em;
    
`


export const Footer_Ul__li = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: left;
    font-size: calc(var(--fs-p-medium) - 0.2rem);
    align-items: center;
    margin: 1rem;
`


export const Footer_Article_Ul_Li_img__is_icon = styled.img`

    margin-right: 1.5rem;
    
`


export const Footer_ul__is_row = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

`

export const Footer_ul__is_collum = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    color: var(--fc-TERTIARY);

`


export const Footer_Article_p = styled.p`
    color: var(--fc-SECONDARY);
`


export const Footer_div__is_BottomConteiner = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    padding-top: 4rem;
    margin-top: 1rem;
    border-top: 1px solid  rgba(137, 137, 137, 0.3);
   
   
`


export const Footer_section = styled.section`
    justify-content: left;
    margin-left: 5rem;
`


export const Footer_Section_h1 = styled.h1`

    color: var(--fc-QUATERNARY);
    font-weight: calc( var( --fw-semibold) - 0.01rem);
    font-size: calc( var(--fs-p-medium) - .3rem);
    margin-left: 4.59rem;
    margin-bottom: 2rem;
    
`

export const Footer_h1__is_bottomSpaced = styled.h1`
    margin-bottom: 2rem;
`
export const Footer_address= styled.address`
    margin-left: 5rem;
`


export const Footer_div__is_rightsConteiner = styled.div`

    border-top: 1px solid  rgba(137, 137, 137, 0.3);
    padding-top: 2rem;
    margin-left: 5rem;
    margin-right: 5rem;
    color: var(--fc-TERTIARY);

`


export const Footer_input = styled.input`

    border:none; 
    border-bottom:1px solid black;
    margin-top: 1rem;
    margin-left: 4.5rem;
`

export const Footer_Input_button = styled.button`
    border: none; 
    border-bottom: 1px solid black;
    margin-left: 1rem;
    background: none;
    font-weight: var(--fw-semibold);
`