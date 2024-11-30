import React from "react";
import { Link } from "react-router-dom";

const MissionSubmenu = () => {
    return (
        <div className="submenu">
            <ul>
                <li>
                    <Link to="/about">As an organisation</Link>
                </li>
                <li>
                    <Link to="#">As a person</Link>
                </li>
                <li>
                    <Link to="#">As a land manager</Link>
                </li>
            </ul>
        </div>
    )
}

export default MissionSubmenu;