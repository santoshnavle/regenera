import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ContactSubmenu = () => {
    const Contactsub = styled.div`
        display: flex;
        flex-direction: column;
        gap: 5px;
        .title-link{
            span{
                font-weight: 400;
                padding: 10px 20px;
            }
            a{
                color: ${({ theme }) => theme.colors.title_green};
                padding: 10px 20px;
                display: block;
                &:hover  {
                  background-color: ${({ theme }) => theme.colors.bgnavlink_hover};
                  ${({ theme }) => theme.colors.title_green};
              }
            }
        }
    `
    return <div className="submenu dropdown-contact">
        <Contactsub>
            <div className="title-link">
                <span>Write to:</span>
                <Link to="mailto:community@regenera.com" target="_blank">community@regenera.com</Link>
            </div>
            <div className="title-link">
                <span>Or:</span>
                <Link to="#">Schedule a call</Link>
            </div>
        </Contactsub>
       
    </div>
}

export default ContactSubmenu;