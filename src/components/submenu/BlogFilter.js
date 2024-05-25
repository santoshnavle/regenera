import React from "react";

const BlogFilter = ({labelName, labelId}) => {
    return (
        <div className="submenu">
            <ul>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id={labelId}/>
                    <label class="form-check-label" for={labelId}>
                        {labelName}
                    </label>
                </div>
            </ul>
        </div>
    )
}

export default BlogFilter;