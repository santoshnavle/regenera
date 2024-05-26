import React from "react";
import styled from "styled-components";

const CheckBoxInfo = ({labelName, labelId, checkboxSection}) => {

    const CheckboxSection = styled.div`
        .form-check{
            gap: 12px;
            text-align:left;
            align-items: flex-start;
            input[type=checkbox]{
                border-radius: .25em;
                width: 25px;
                height: 18px;
                position: relative;
                top: 3px;
                border: 1px solid #ccc;
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                &:checked{
                    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e");
                    background-color: #0d6efd;
                    border-color: #0d6efd;
                }
            }
        }
    `

    return (
        <CheckboxSection className={`${checkboxSection}`}>
            <div className="form-check flex">
                <input type="checkbox" id={labelId} />
                <label className="form-check-label" for={labelId}>
                    {labelName}
                </label>
            </div>
        </CheckboxSection>
    )
}

export default CheckBoxInfo;