import React, {useState} from "react";
import styled from "styled-components";
import { IoMdArrowDropdown } from "react-icons/io";


const CustomSelect = () => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);

  const optionsList = [
    "Name",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5"
  ];

  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  const setSelectedThenCloseDropdown = (index) => {
    setSelectedOption(index);
    setIsOptionsOpen(false);
  };

  const handleKeyDown = (index) => (e) => {
    switch (e.key) {
      case " ":
      case "SpaceBar":
      case "Enter":
        e.preventDefault();
        setSelectedThenCloseDropdown(index);
        break;
      default:
        break;
    }
  };

  const handleListKeyDown = (e) => {
    switch (e.key) {
      case "Escape":
        e.preventDefault();
        setIsOptionsOpen(false);
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedOption(
          selectedOption - 1 >= 0 ? selectedOption - 1 : optionsList.length - 1
        );
        break;
      case "ArrowDown":
        e.preventDefault();
        setSelectedOption(
          selectedOption === optionsList.length - 1 ? 0 : selectedOption + 1
        );
        break;
      default:
        break;
    }
  };

  const CustomSelectBox = styled.div`
    position: relative;
    button{
        border-radius: 25px;
        border: 1px solid #DDEDD0;
        width: 100%;
        padding: 10px 16px;
        position: relative;
        text-align: left;
        .drop-icon{
            right: 16px;
            position: absolute;
        }
    }
    .options{
        border: 1px solid green;
        display: none;
        border-radius:5px;
        list-style: none;
        padding: 4px 0;
        background-color: white;
        position: absolute;
        left: 0;
        right: 0;
        z-index: 2;
        li{
            padding: 10px;
            &:active, &:focus, &:hover, [aria-selected="true"]
            {
                background: #eaeaea;
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
            className={isOptionsOpen ? "expanded" : ""}
            onClick={toggleOptions}
            onKeyDown={handleListKeyDown}>
            {optionsList[selectedOption]}
            <IoMdArrowDropdown className="drop-icon"/>
        </button>
        <ul
        className={`options ${isOptionsOpen ? "show" : ""}`}
        role="listbox"
        aria-activedescendant={optionsList[selectedOption]}
        tabIndex={-1}
        onKeyDown={handleListKeyDown}>
            {optionsList.map((option, index) => (
                <li
                id={option}
                role="option"
                aria-selected={selectedOption === index}
                tabIndex={0}
                onKeyDown={handleKeyDown(index)}
                onClick={() => {
                    setSelectedThenCloseDropdown(index);
                }}>
                    {option}
                </li>
            ))}
        </ul>
    </CustomSelectBox>
  );
};


export default CustomSelect;
