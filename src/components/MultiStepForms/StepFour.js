import React from "react";
import { OrangeBtn } from "../Button";
import { Link } from "react-router-dom";
import CheckBoxInfo from "../checkbox";
import styled from "styled-components";
import { IoIosInformationCircle } from "react-icons/io";

const StepFour = ({classname}) => {

    const consentLabel = <div dangerouslySetInnerHTML={{ __html: "<small>Click to agree to <a href='#'>terms and conditions</a></small>"}} />;

    const StepFourSection = styled.section`
        margin-top: 60px;
        width: 100%;
        max-width: 630px;
        .form-n-summary{
            gap: 70px;
            .summary-box{
                border-radius: 8px;
                min-width: 195px;
                padding: 12px 16px;
                box-shadow: 3px 3px 20px 0px rgba(0, 0, 0, 0.07);
                h5{
                    line-height: 180%;
                    font-weight: bold;
                    margin-bottom: 12px;
                }
                .plan-detail{
                    .plan-left{
                        padding-bottom: 12px;
                        border-bottom: 1px solid #DDEDD0;
                        img{
                            width: 100%;
                            max-width: 64px;
                            margin-bottom: 7px;
                        }
                        .plan-title{
                            font-size: 16px;
                            line-height: 29px;
                            font-weight: 600;
                        }
                        .fee-in{
                            .fee{
                                font-weight: 600;
                            }
                        }
                    }
                    .plan-right{
                        padding-top: 12px;
                        .total-due{
                            .due-text{
                                font-weight: 600;
                                line-height: 180%;
                            }
                            .amount{
                                margin-top: 4px;
                                font-size: 32px;
                                line-height: 42px;
                                font-weight: 600;
                            }
                        }
                    }
                    
                }
            }
        }
        .form-section{
            gap: 12px;
            .card-num-box{
                .card-img{
                    height: 20px;
                    margin: 3px 10px 0 0;
                }
                .input-blank{
                    width: 100%;
                    height: 100%;
                    border: 0 none;
                    &:focus{
                        outline: 0;
                    }
                }
            }
            .expiry-box{
                flex: 1 0 65%;
            }
            .contsent-box{
                margin-top: 8px;
            }
        }
        
        .cta{
            padding: 0 14px;
            max-width: 305px;
            margin-top: 40px;
            margin-bottom: 7px;
            text-align: center;
            button{
                width: 100%;
            }
            .powerby{
                box-shadow: none;
                width: 100%;
                top: 0;
                left: 0;
                gap: 2px;
                font-style: italic;
                max-width: none;
                .tooltip-ic{
                    width: 20px;
                    height: 20px;
                }
                .tooltip-box{
                    bottom: 30px;
                    font-style: normal;
                }
            }
        }
        @media (max-width:${({ theme }) => theme.media.tab}) {  
           .form-section{
                gap: 20px;
                padding: 0 14px;
                .two-col{
                    flex-direction: row;
                    justify-content: space-between;
                    gap: 10px;
                    .expiry-box{
                        max-width: none;
                        flex: 1 0 70%;
                    }
                }
            }
            .cta{
                margin-top: 25px;
            }
            .form-n-summary{
                flex-direction: column;
                gap: 0;
                .summary-box{
                    margin: 30px 0;
                    h5{
                        font-size: 19px;
                        line-height: 28px;
                        font-weight: bold;
                        padding-bottom: 8px;
                        border-bottom: 1px solid #DDEDD0;
                    }
                    .plan-detail{
                        display: flex;
                        align-items: flex-start;
                        justify-content: space-between;
                        .plan-left{
                            padding-bottom: 0;
                            border-bottom: 0 none;
                            .plan-title{
                                font-size: 16px;
                                line-height: 29px;
                                font-weight: 600;
                            }
                            .fee{
                                font-weight: 600;
                            }
                        }
                        .plan-right{
                            padding-top: 0;
                            .total-due{
                                .due-text{
                                    font-weight: 400;
                                }
                                .amount{
                                    margin-top: 4px;
                                    font-size: 28px;
                                    line-height: 38px;
                                    font-weight: 600;
                                }
                            }
                        }
                        
                    }
                }
                .right-side{
                    order: -1;
                }
            }
        }
        @media (max-width: 850px) {
            max-width: none;
            width: 100%;
            .form-section{
                .two-col{
                    .cvvbox{
                        max-width: none;
                        flex: 1 1 115px;
                    }
                }
            }
        }
    `

    return(
        <StepFourSection className={`mx-auto flex flex-col ${classname}`}>
            <div className="form-n-summary flex">
                <div className="left-side">
                     <div className="form-title">
                        Add payment details
                        <div className="title-info">
                            <div className="text-left hide-mobile">Your payment will be schedueled automatically every quarter on this card.</div>
                            <div className="show-mobile text-center">Please provide us with your credit card or debit card details. Your payment will be schedueled automatically every month on this card.</div>
                        </div>
                    </div>
                    <div className="summary-box show-tab">
                        <h5 className="small">Summary</h5>
                        <div className="plan-detail">
                            <div className="plan-left">
                                <div className="plan-title">Tree plan</div>
                                <div className="flex flex-col">
                                    <div className="fee small">$120 /mo</div>
                                </div>
                            </div>
                            <div className="plan-right">
                                <div className="total-due">
                                    <div className="due-text small">Total due per quarter</div>
                                    <div className="amount">$360</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form action="">
                        <div className="form-section flex flex-col">
                            <div className="input-box-section">
                                <label for="fname" className="small">Cardholders name</label>
                                {/* for disabled use class disabled */}
                                <input name="fname" aria-describedby="firstnamehelp" placeholder="Name" className="form-control"/>
                            </div>
                            <div className="input-box-section">
                                <label for="cardnum" className="small">Card number</label>
                                 <div className="card-num-box form-control flex">
                                    <img className="card-img" src="data:image/svg+xml;base64,PHN2ZyBmb2N1c2FibGU9ImZhbHNlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAyMSI+ICA8ZyBpZD0iUGFnZS0xIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICA8ZyBpZD0iYW1leCI+ICAgICAgPGcgaWQ9ImNhcmQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xIDIpIj4gICAgICAgIDxwYXRoIGlkPSJzaGFwZSIgZmlsbD0iIzFEOTFDRSIgZD0iTTI3LjU4IDE5SDMuNDJBMi40IDIuNCAwIDAgMSAxIDE2LjYyVjIuMzhBMi40IDIuNCAwIDAgMSAzLjQyIDBoMjQuMTZBMi40IDIuNCAwIDAgMSAzMCAyLjM4djE0LjI1QTIuNCAyLjQgMCAwIDEgMjcuNTggMTl6Ii8+ICAgICAgICA8cG9seWxpbmUgaWQ9InNoYXBlIiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjUuMDYzIDExLjg5NiA0LjU5MSAxMyAuMzYgMTMgMy42OTkgNiAxMS42NzQgNiAxMi40NzkgNy41NDYgMTMuMjMxIDYgMTYuMDY0IDYgMTcuNDkyIDYgMjMuOTgzIDYgMjQuOTAyIDYuOTYxIDI1Ljg4OSA2IDMwLjg4MiA2IDI3LjMzNyA5LjQ5MiAzMC43MjkgMTMgMjUuODk3IDEzIDI0LjgxNiAxMS45NjkgMjMuNzQ0IDEzIDE3LjQ5MiAxMyAxNi4wNjQgMTMgNi40OTYgMTMgNS45NzcgMTEuODk2Ii8+ICAgICAgICA8cGF0aCBpZD0ic2hhcGUiIGZpbGw9IiMxRDkxQ0UiIGQ9Ik01Ljk4IDExLjk3aC0uOTIuOTJ6TTE2LjIgN2gtMi4xbC0xLjU4IDMuMzVMMTAuODIgN2gtMi4xdjQuODVMNi41NSA3SDQuNThsLTIuMzIgNWgxLjQybC40Ny0xLjE0aDIuN0w3LjM5IDEySDEwVjcuOTNMMTEuODUgMTJoMS4yMmwxLjg0LTR2NGgxLjI5Vjd6bTguNjcgMS42MkwyMy4zNyA3aC02LjAydjVIMjMuMTdsMS42NS0xLjY0TDI2LjQ4IDEyaDEuNTVsLTIuMzctMi41M0wyOC4xIDdoLTEuNjJsLTEuNjEgMS42MnpNMjEuNyAxMWgtMy4wNlY5LjloMy4wNlY4LjloLTMuMDZWOGgzLjA2di0uODVsMi4yNyAyLjI3LTIuMjcgMi4yOFYxMXpNNS41MyA3LjgybC44OCAyLjAzSDQuNThsLjk1LTIuMDN6Ii8+ICAgICAgPC9nPiAgICA8L2c+ICA8L2c+PC9zdmc+"  alt="card-img"/>
                                    <input name="cardnum" aria-describedby="cardnumhelp" placeholder="xxxx xxxx xxxx xxxx" className="input-blank"/>
                                </div>
                                
                            </div>
                            <div className="two-col flex space-between">
                                <div className="input-box-section expiry-box">
                                    <label for="expiry-date" className="small">Expiry date</label>
                                    <input name="expiry-date" type="text" aria-describedby="expirydatehelp" placeholder="MM/YY" className="form-control"/>
                                </div>
                                <div className="input-box-section">
                                    <label for="cvc" className="small">CVC</label>
                                    <input name="cvc" value="123" type="password" aria-describedby="cvchelp" placeholder="CVC" className="form-control"/>
                                </div>
                            </div>
                            <div className="one-col">
                                <CheckBoxInfo
                                labelName = {consentLabel} 
                                labelId = "consent" 
                                checkboxSection="contsent-box"
                                />
                            </div>
                        </div>
                        <div className="cta mx-auto">
                            <OrangeBtn>Pay and join</OrangeBtn>
                            <div className="powerby relative flex fee-n-box justify-center items-center small">Powered by Stripe. 
                                <Link className="tooltip-ic"><IoIosInformationCircle/></Link>
                                <div className="tooltip-box">
                                    Your card details are safely secured within Stripe.
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="right-side">
                    <div className="summary-box hide-tab">
                        <h5 className="small">Summary</h5>
                        <div className="plan-detail">
                            <div className="plan-left">
                                <img src="../images/tree-plan.webp" className="hide-tab" alt="plan icon"/>
                                <div className="plan-title">Tree plan</div>
                                <div className="flex fee-in justify-space-between">
                                    <div className="text small">Monthly fee</div>
                                    <div className="fee small">$120</div>
                                </div>
                            </div>
                            <div className="plan-right">
                                <div className="total-due">
                                    <div className="due-text small">Total due per quarter</div>
                                    <div className="amount">$5</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            <div className="step-nav flex mx-auto">
                <div className="bullet"></div>
                <div className="bullet"></div>
                <div className="bullet"></div>
                <div className="bullet current"></div>
            </div>
        </StepFourSection>
    );    
}

export default StepFour;