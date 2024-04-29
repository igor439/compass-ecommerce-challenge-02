import React, { useContext } from "react";
import { CheckBoxDropDown_ul__is_dropDownConatiner } from "./checkBoxDropDown.style";
import { OptionsDropDown_li__is_dropDownItem, OptionsDropDown_ul__is_dropDownConatiner } from "./optionsDropDown.style";
import { QueryContext, QueryObj } from "./QueryContext";


export const numbersQueryDefArray: number[] = [];
for (let i = 16; i <= 80; i += 8) {
    numbersQueryDefArray.push(i);
}

export const stringsQueryDefArray: string[] = ['Default', 'Ascending', 'Descending'];




export default function OptionsDropDown(props:{dataArray:(number | string)[]}){

    const { queryObj, setqueryObj } = useContext(QueryContext);
    
    const updateQueryObj = (newQueryObj: QueryObj) => {
        setqueryObj(newQueryObj);
    };

    return (
        <OptionsDropDown_ul__is_dropDownConatiner>
            {props.dataArray.map((item, index) => (
                <OptionsDropDown_li__is_dropDownItem key={index} onClick={() => {
                    if (typeof item === 'string') {
                        const newQueryObj = { ...queryObj, order: item };
                        updateQueryObj(newQueryObj);
                    } else {
                        const newQueryObj = { ...queryObj, pageSize: item };
                        updateQueryObj(newQueryObj);
                    }
                }}>{item}</OptionsDropDown_li__is_dropDownItem>
            ))}
        </OptionsDropDown_ul__is_dropDownConatiner>
    );
}
