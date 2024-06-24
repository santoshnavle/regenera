import React, {useState} from "react";
import styled from "styled-components";
import { IoMdArrowDropdown } from "react-icons/io";


const CustomRadioSelect = ({optionsList, classname}) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);

  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  const setSelectedThenCloseDropdown = (index) => {
    setSelectedOption(index);
    setIsOptionsOpen(false);
  };

  const CustomSelectBox = styled.div`
    position: relative;
    button{
        border-radius: 8px;
        border: 1px solid #DDEDD0;
        width: 100%;
        padding: 4px 12px;
        position: relative;
        background-color: white;
        text-align: left;
        .drop-icon{
            right: 12px;
            top: 11px;
            position: absolute;
        }
    }
    .options{
        border: 1px solid #eaeaea;
        display: none;
        border-radius:8px;
        list-style: none;
        padding: 6px 12px 10px;
        background-color: white;
        box-shadow: 2px 4px 15px 0px rgba(0, 0, 0, 0.05);
        position: absolute;
        left: 0;
        right: 0;
        z-index: 2;
        li{
            line-height: 180%;
            font-size: 16px;
            font-weight: 400;
            margin-top: 4px;
            &:active, &:focus, &:hover, [aria-selected="true"]
            {
                cursor: pointer;
            }
        }
    }
    .show{
        display: block;
        background-color: white;
    }
  `

  return (
    <CustomSelectBox>
        <button
            type="button"
            aria-haspopup="listbox"
            aria-expanded={isOptionsOpen}
            className={`${classname} ${isOptionsOpen ? "expanded" : ""}`}
            onClick={toggleOptions}>
            {optionsList[selectedOption]}
            <IoMdArrowDropdown className="drop-icon"/>
        </button>
        <ul
        className={`options ${isOptionsOpen ? "show" : ""}`}
        role="listbox"
        aria-activedescendant={optionsList[selectedOption]}
        tabIndex={-1}>
            {optionsList.map((option, index) => (
                <li
                id={option}
                role="option"
                aria-selected={selectedOption === index}
                tabIndex={0}
                onClick={() => {
                    setSelectedThenCloseDropdown(index);
                }}>
                    <label class="radio-box">{option}
                      <input type="radio" id={index} value={option}
                        checked={ selectedOption === index } 
                      />
                      <span class="checkmark"></span>
                    </label>
                </li>
            ))}
        </ul>
    </CustomSelectBox>
  );
};


export default CustomRadioSelect;
