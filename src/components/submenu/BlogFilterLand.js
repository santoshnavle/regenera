import React from "react";
import CheckBoxInfo from "../checkbox";

const BlogFilter = () => {

    return <div className="submenu">
        <ul>
            <li>
                <CheckBoxInfo 
                    labelName = "Machu Picchu"
                    labelId = "machu"
                    checkboxSection = "checkbox-section"
                />
            </li>
             <li>
                <CheckBoxInfo 
                    labelName = "Manu"
                    labelId = "manu"
                    checkboxSection = "checkbox-section"
                />
            </li>
             <li>
                <CheckBoxInfo 
                    labelName = "Requena"
                    labelId = "requena"
                    checkboxSection = "checkbox-section"
                />
            </li>
             <li>
                <CheckBoxInfo 
                    labelName = "Abancay"
                    labelId = "abancay"
                    checkboxSection = "checkbox-section"
                />
            </li>
        </ul>
    </div>
}

export default BlogFilter;