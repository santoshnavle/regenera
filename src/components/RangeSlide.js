import React, {useState, useEffect} from "react";
import styled from "styled-components";

const RangeOption = ({RangeClass}) => {

     const [rangeData, setRangeData] =  useState(0);

     const [amt,setAmt] = useState('');
    useEffect(()=>{
        if(rangeData == 0){
            setAmt("0")
        }else if(rangeData <= 10){
            setAmt("12")
        }else if(rangeData <= 20){
            setAmt("24")
        }else if(rangeData <= 30){
            setAmt("36")
        }else if(rangeData <= 40){
            setAmt("48")
        }else if(rangeData <= 50){
            setAmt("60")
        }else if(rangeData <= 60){
            setAmt("72")
        }else if(rangeData <= 70){
            setAmt("84")
        }else if(rangeData <= 80){
            setAmt("96")
        }else if(rangeData <= 90){
            setAmt("108")
        }else if(rangeData <= 100){
            setAmt("120")
        }
    },[rangeData])

    const RangeBox = styled.div`
        max-width: 345px;
        .rangedata{
            font-size: 42px;
            line-height: 52px;
            font-weight: 500;
            margin-bottom: 15px;
        }
        .range-lable{
            font-weight: 600;
            line-height: 150%;
            color: #6EA44C;
            bottom: -35px;
        }
    `

    const InputRange = styled.input.attrs({type: 'range'})`
        -webkit-appearance: none;
        -moz-appearance: none;
        outline: 0;
        height: 9px;
        border-radius: 40px;
        background: ${(props) =>
        `linear-gradient(to right,
            #6EA44C 0%,
            #6EA44C ${props.value}%,
            #DDEDD0 ${props.value}%,
            #DDEDD0 100%);`
        };
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.05);
        ::-webkit-slider-thumb{
            -webkit-appearance: none;
            appearance: none; 
            width: 28px;
            height: 28px;
            background: green;
            border-radius: 50%;
            box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.05);
        }
        
    `

    return (
        <RangeBox className={`flex flex-col relative w-full mx-auto ${RangeClass}`}>
            <div className="rangedata">${amt}<small>/mo</small></div>
            <InputRange className="range" type="range" min="0" max="100" value={rangeData} onChange={(e)=>setRangeData(e.target.value)}/>
            <div className="range-lable absolute small">{rangeData} hectares</div>
        </RangeBox>
    )
}

export default RangeOption;