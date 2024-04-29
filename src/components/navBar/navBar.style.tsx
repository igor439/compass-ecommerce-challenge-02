import styled from "styled-components";


export const NavBar_header = styled.header `

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: var(--color-PRIMARY);
    justify-content: space-around;
    align-items: center;
    margin-left: 2rem;
    margin-right: 2rem;
    padding-top: 1rem;
    padding-bottom: 1rem;


`


export const NavBar_Header_nav = styled.nav `

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;


`


export const NavBar_ul = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 3rem;
    margin-right: 3rem;
`


export const NavBar_Ul_li__is_lessEspaced = styled.li`
    justify-content: center;
    align-items: center;
    margin-left: 4.5rem;
 
`

export const NavBar_img__is_icon = styled.img`
    width: 85%;
    height: 85%;
`

export const NavBar_Ul_li__is_moreEspaced = styled.li`
    justify-content: center;
    height: 100%;
    font-size: calc(var(--fs-p-medium) - 0.2rem);
    align-items: center;
    margin-left: 5rem;

    &:hover {
    color: #c0c0c0e1;

  }
  
`


export const NavBar_Ul_li__is_moreEspacedAndTextBlack = styled.li`
    justify-content: center;
    font-size: calc(var(--fs-p-medium) - 0.2rem);
    align-items: center;
    color: var( --fc-TERTIARY);
    margin-left: 5rem;
  
`