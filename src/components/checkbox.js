import React from "react";
import styled from "styled-components";

const CheckBoxInfo = ({labelName, labelId, checkboxSection}) => {

    const CheckboxSection = styled.div`
        .form-check{
            gap: 12px;
            text-align:left;
            height: 25px;
            align-items: center;
            input[type=checkbox]{
                border-radius: .25em;
                width: 27px;
                height: 20px;
                background-color: white;
                position: relative;
                border: 1px solid #ccc;
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                &:checked{
                    background-image: url("../images/checkbox.svg");
                    background-repeat: no-repeat;
                    background-position: center center;
                    border-color: var(--Trust-Green,#004d37);
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