import styled from "styled-components";



export const ThematicCard_li__is_itemContainer = styled.li`

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    width: auto;
    height: auto;

    


`

export const ThematicCard_img = styled.img`
    height: 100%;
    width: 30rem;
    object-fit: cover;
    border-radius: 1rem;
    transition: width 1s, height 1s; 
    &:hover {
        width:  35rem;
        height: 120%; 
    }

`


export const ThematicCard_p = styled.p`

    font-weight: var(--fw-bold);
    color: var(--fc-QUINARY);
    font-size: calc(var(--fs-p-medium) + .09rem);
    margin-top:2rem;
    margin-bottom: 2rem;
    font-stretch: 2px;
`