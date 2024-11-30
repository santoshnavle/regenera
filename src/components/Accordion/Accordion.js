import React, {useState} from "react";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";

const AccordionSection = ({question, answer, arrow}) => {


    const [show, setShow] = useState(false);

    const Accordion = styled.section`
        .accordion-head{
            background-color: white;
            cursor: pointer;
            padding: 20px 32px;
            font-size: 19px;
            border-radius: 36px;
            font-weight: 500;
            box-shadow: 2px 4px 15px rgba(0, 0, 0, 0.05);
            .icon{
                font-size: 32px;
                line-height: 32px;
                font-weight: 500;
                color: #6EA44C;
            }
        }
        .show-accordion{
            border-radius: 36px 36px 0 0;
        }
        .accordion-content{
            border-radius: 0 0 36px 36px;
            background-color: white;
            padding: 20px 25px 30px;
            box-shadow: 2px 10px 15px rgba(0, 0, 0, 0.05);
            top: -3px;
        }
        @media (max-width:${({ theme }) => theme.media.tab}){
            .accordion-head{
                padding: 10px 20px;
                font-size: 17px;
            }
            .accordion-content{
                padding: 10px 15px 20px;
            }
        }
    `
    return (
        <Accordion>
            <div onClick={()=>setShow(!show)} className={show ? "accordion-head show-accordion flex justify-space-between items-center" : "accordion-head flex justify-space-between items-center"}>
                {question}
                <span className="icon smooth"> {arrow} <span className="plus-minus"> {show ? "-" : "+"} </span> </span>
            </div>
            {show && 
                <div className={show? "accordion-content fade-in" : "accordion-content fade-out"}>
                    {answer}
                </div>
            }
        </Accordion>
    )
}

export default AccordionSection;