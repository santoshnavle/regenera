import React, {useState} from "react";
import styled from "styled-components";

const AccordionSection = ({question, answer}) => {


    const [show, setShow] = useState(false);

    const Accordion = styled.section`
        .accordion-head{
            background-color: white;
            cursor: pointer;
            padding: 20px 32px;
            font-size: 19px;
            border-radius: 25px;
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
            border-radius: 25px 25px 0 0;
        }
        .accordion-content{
            border-radius: 0 0 25px 25px;
            background-color: white;
            padding: 20px 25px 30px;
            box-shadow: 2px 4px 15px rgba(0, 0, 0, 0.05);
        }
        @media (max-width:${({ theme }) => theme.media.tab}){
            
        }
    `
    return (
        <Accordion>
            <div onClick={()=>setShow(!show)} className={show ? "accordion-head show-accordion flex justify-space-between items-center" : "accordion-head flex justify-space-between items-center"}>
                {question}
                <span className="icon">{show ? "-" : "+"}</span>
            </div>
            {show && 
                <div className="accordion-content">
                    {answer}
                </div>
            }
        </Accordion>
    )
}

export default AccordionSection;