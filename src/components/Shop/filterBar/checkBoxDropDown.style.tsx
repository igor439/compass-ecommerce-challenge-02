import styled from "styled-components";




export const CheckBoxDropDown_div__is_CheckBoxDropDownContainer = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    color: var(--fc-TERTIARY);
`

export const CheckBoxDropDown_button__is_DropDownTrigger = styled.button`

    background: none;
    border: none;
    font-weight: var(--fw-medium);
    font-family: "Poppins", sans-serif;
    font-size: calc(var(--fs-p-medium) - 0.2rem);
    &:hover {
        color:var(--button-secondary-color);
    }
    

`


export const  CheckBoxDropDown_li = styled.li`
    height: 100%;
    cursor: pointer;
`

export const CheckBoxDropDown_ul__is_dropDownConatiner = styled.ul`

    position: absolute;
    margin-top: 12rem;
    background-color: var( --color-TERTIARY);
    color:var(--fc-TERTIARY);
    box-shadow: 0 4px 12px rgb(0,0,0,.1);
    border-radius: .5rem;
    z-index: 999;
    padding-left: 0;



`