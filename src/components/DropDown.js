import React, { useState } from "react";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownHeader = styled.div`
  cursor: pointer;
  gap: 5px;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  color: #004D37;
  transition: color 0.3s linear;
  width: 100%;
`;

const DropdownListContainer = styled.div`
  position: absolute;
  top: 30px;
  right: auto;
  width: auto;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 99;
`;

const DropdownList = styled.ul`
  padding: 10px 0;
  margin: 0;
  list-style: none;
`;

const DropdownItem = styled.li`
  cursor: pointer;
  padding: 10px 20px;
  display: inline-block;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  color: #004D37;
  transition: color 0.3s linear;
  width: 100%;
  &:hover {
    background-color: #eee;
  }
`;

const DropdownMenu = ({ options, defaultVal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <DropdownHeader className="flex items-center" onClick={toggleDropdown}>
        {selectedOption || defaultVal}
        <IoIosArrowDown/>
      </DropdownHeader>
      {isOpen && (
        <DropdownListContainer>
          <DropdownList>
            {options.map((option) => (
              <DropdownItem key={option} onClick={() => selectOption(option)}>
                {option}
              </DropdownItem>
            ))}
          </DropdownList>
        </DropdownListContainer>
      )}
    </DropdownContainer>
  );
};

export default DropdownMenu;