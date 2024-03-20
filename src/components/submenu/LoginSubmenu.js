import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LoginSubmenu = () => {

    const Loginsub = styled.div`
        .dropdown-login{
            ul{
                .log-out{
                    border-top: 2px solid #DDEDD0;
                    padding-top: 5px;
                    margin-top: 5px;
                }
            }
        }
    `

    return (
        <Loginsub>
            <div className="submenu dropdown-login">
                <ul>
                    <li>
                        <Link to="#">Profile settings</Link>
                    </li>
                    <li>
                        <Link to="#">My landschapes</Link>
                    </li>
                    <li className="log-out">
                        <Link to="#">Log out</Link>
                    </li>
                </ul>
            </div>
        </Loginsub>
    )
}

export default LoginSubmenu;