import React, {useState} from "react";
import AccordionSection from "./Accordion";

const MyacordionSection = ({accordionClass}) => {

    const questionData = [
        {
            id:1,
            question: 'How much do I get paid?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id:2,
            question: 'When do I get paid?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id:3,
            question: 'What is carbon offsetting?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id:4,
            question: 'How do I “restore Nature”?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id:5,
            question: 'Why do I need all this paperwork to sign up?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id:6,
            question: 'What roles can I choose?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
    ];

    const [data, setData] = useState(questionData);

    return (
        <div className={accordionClass}>
            {
                data.map((curEle)=> {
                    const { id } = curEle;
                    return <AccordionSection key={id} {...curEle}/>
                })
            }
        </div>
    )
}

export default MyacordionSection;