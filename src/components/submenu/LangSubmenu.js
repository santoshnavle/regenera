import React from "react";
import { Link } from "react-router-dom";

const LangSubmenu = () => {
    return <div className="submenu">
        <ul>
            <li>
                <Link to="#">English</Link>
            </li>
            <li>
                <Link to="#">Spanish</Link>
            </li>
            <li>
                <Link to="#">Portuguese</Link>
            </li>
        </ul>
    </div>
}

export default LangSubmenu;