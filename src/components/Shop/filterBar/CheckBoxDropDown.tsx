import axios from "axios";
import React, { useEffect, useState } from "react";
import { CheckBoxDropDown_button__is_DropDownTrigger, CheckBoxDropDown_div__is_CheckBoxDropDownContainer, CheckBoxDropDown_li, CheckBoxDropDown_ul__is_dropDownConatiner } from "./checkBoxDropDown.style";

export default function CheckBoxDropDown(){

    const [category, steCategory] = useState<string[]>([]);
    const [queryCategory, setQueryCategory] = useState<string[]>([]);
    const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);

    useEffect(() => {
        axios.get(`http://localhost:3000/products/filters`).then(
            (response) => {
                const categoryIds = response.data.map((item: {category_id: string}) => item.category_id);
                steCategory(categoryIds);
            }
        ).catch((error) => {
            console.error("Erro ao buscar os produtos:", error);
        });
    }, []);

    useEffect(() => {
        console.log("queryCategory updated:", queryCategory);
    }, [queryCategory]);
    

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, item: string) => {
        const selectedValue = e.target.value;
        const isChecked = e.target.checked;
      
        if (isChecked) {
            setQueryCategory(oldData => [...oldData, selectedValue]);
        } else {
            setQueryCategory(queryCategory.filter(item => item !== selectedValue));
        }
    };

    const toggleDropDown = () => {
        setIsDropDownOpen(!isDropDownOpen);
    };
      
    return(
        <CheckBoxDropDown_div__is_CheckBoxDropDownContainer>
            <CheckBoxDropDown_button__is_DropDownTrigger onClick={toggleDropDown}>Filter</CheckBoxDropDown_button__is_DropDownTrigger>
            <CheckBoxDropDown_ul__is_dropDownConatiner style={{ display: isDropDownOpen ? "block" : "none" }}>
                {category.map((item, index) => (
                    <CheckBoxDropDown_li key={index}>
                        <input type="checkbox" name={`${item}`} id={`${item}`} value={item} onChange={(e) => handleChange(e, item)} />
                        <span>{item.toLowerCase()}</span>
                    </CheckBoxDropDown_li>
                ))}
            </CheckBoxDropDown_ul__is_dropDownConatiner>
        </CheckBoxDropDown_div__is_CheckBoxDropDownContainer>
    );
}
