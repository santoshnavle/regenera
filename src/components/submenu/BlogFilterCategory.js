import React from "react";
import CheckBoxInfo from "../checkbox";

const BlogFilter = () => {

    return <div className="submenu">
        <ul>
            <li>
                <CheckBoxInfo 
                    labelName = "Regenerate Together"
                    labelId = "rege-together"
                    checkboxSection = "checkbox-section"
                />
            </li>
             <li>
                <CheckBoxInfo 
                    labelName = "Stories from Earth"
                    labelId = "stories"
                    checkboxSection = "checkbox-section"
                />
            </li>
             <li>
                <CheckBoxInfo 
                    labelName = "Partners in Action"
                    labelId = "partner-action"
                    checkboxSection = "checkbox-section"
                />
            </li>
             <li>
                <CheckBoxInfo 
                    labelName = "Living Nature"
                    labelId = "living-nature"
                    checkboxSection = "checkbox-section"
                />
            </li>
        </ul>
    </div>
}

export default BlogFilter;