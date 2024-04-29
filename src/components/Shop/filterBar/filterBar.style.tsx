import styled from "styled-components";

export const FilterBar_section__is_barContainer = styled.section`

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 0px;
    background:var(--color-QUATERNARY);
   
`
export const FilterBar_Ul_li__is_moreEspacedAndTextBlack = styled.li`
    justify-content: center;
    display: flex;
    flex-direction: row;
    font-size: calc(var(--fs-p-medium) - 0.2rem);
    padding:1rem;
    align-items: center;
    color: var( --fc-TERTIARY);

    &:hover {
        color:var(--button-secondary-color);
    }
  
`

export const FilterBar_img__is_ShopBarIcon = styled.img`
margin-right: .5rem;
   
`

export const FilterBar_div__is_queryContainer = styled.div`
    
    position: absolute;
    padding: 0;
    background-color: var( --color-TERTIARY);
    color:var(--fc-TERTIARY);
    box-shadow: 0 4px 12px rgb(0,0,0,.1);
    border-radius: .5rem;
    z-index: 999;
    
    
    


`


