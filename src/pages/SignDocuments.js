import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { LightGreenBtn, OrangeBtn } from "../components/Button";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { TbBallpen } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";

const SignDocumentUploaded = () => {
    const [image, setImage] = useState("");
    const inputFile = useRef(null);

    const handleFileUpload = e => {
        const { files } = e.target;
        if (files && files.length) {
        const filename = files[0].name;

        var parts = filename.split(".");
        const fileType = parts[parts.length - 1];
        console.log("fileType", fileType); //ex: zip, rar, jpg, svg etc.

        setImage(files[0]);
        }
    };

    const onButtonClick = () => {
        inputFile.current.click();
    };
    const MainForm = styled.section`
        margin: 0 auto;
        display: flex;
        @media (max-width:${({ theme }) => theme.media.tab}) {
            display: block;
        }
    `
    const StepSection = styled.section`
        width: 100%;
        max-width:36%;
        padding: 70px 20px;
        background: ${({ theme }) => theme.colors.title_green};

        .step-each{
            max-width: 258px;
            margin-top: 58px;
            position: relative;
            left: 25px;
            .step-title, .step-text{
                color: white; 
            }
            .step-title{
                color: white;
                font-weight: 600;
                line-height: 28px;
            }
            .step-text{
                line-height: 150%;
            }
            &:first-child{
                margin-top: 0;
            }
            &::before{
                position: absolute;
                content: "•";
                color: white;
                font-size: 77px;
                line-height: 0;
                height: 13px;
                padding: 10px 5px 10px;
                border-radius: 50%;
                border: 1px solid #fff;
                left: -59px;
                background-color: #004D37;
                outline: 8px solid #004D37;
                top: 0;
            }
            &::after{
                position:absolute;
                content: "";
                background: white;
                width:1px;
                height:100px;
                top:40px;
                left: -43px;
            }
            &:last-child{
                &::after{
                    content: none;
                }
            }
        }
        .step-one{
            &::after{
                height:68px;
                top:40px;
            }
        }
        .step-two{
            margin-top: 45px;
        }
        .step-each.start{
            &::before{
                background:white;
                color: #699d49;
            }
        }
        .complete-check{
            &::before{
                background:#fff url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17' height='12' viewBox='0 0 17 12' fill='none'%3E%3Cpath d='M1 5L5.29453 9.72399C5.6786 10.1465 6.33785 10.1621 6.74158 9.75842L15.5 1' stroke='%236EA44C' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E") no-repeat center center;
                content: "";
                width:22px;
                height: 12px;

            }
        }
        @media (max-width:${({ theme }) => theme.media.tab}) {
            display: none;
        }
    `
    const FormSection = styled.section`
        width: 100%;
        padding: 57px 5% 50px;
        @media (max-width:${({ theme }) => theme.media.tab}) {
            margin-top: 66px;
            padding: 20px;
            .breadcrumb{
                margin-bottom: 32px;
                gap: 29px;
                a{
                    position: relative;
                    font-size: 14px;
                    color: #6EA44C;
                    &::after{
                        content: ">";
                        position: absolute;
                        right: -18px;
                    }
                    &:last-child{
                        &::after{
                            content: none;
                        }
                    }
                }
                .active{
                    font-weight: 600;
                    color: #004D37;
                }
            }
            .formnextprev{
                top: -20px;
            }
        }
    `

    const LetterSignSection = styled.section`
        .form-title{
            margin-bottom: 29px;
            font-weight: 600;
            line-height: 29px;
            @media (max-width:${({ theme }) => theme.media.tab}) {
                text-align: center;
            }
        }
        .letter-sign{
            gap: 22px;
            .letter-section{
                max-width: 410px;
                padding: 25px 60px;
                background-color: #EFE7DA;
                box-shadow: inset 4px 4px 14px 0px rgba(0, 0, 0, 0.10);
                .sign-letter{
                    max-width: 288px;
                    background: white;
                    border-radius: 8px;
                    filter: drop-shadow(1.679px 3.359px 12.595px rgba(0, 0, 0, 0.05));
                    padding: 15px;
                    .letter-draft{
                        font-size: 6px
                    }
                    .assignto{
                        font-size: 9.4px;
                        margin-top: 25px;
                    }
                    .signature-box{
                        cursor: pointer;
                        font-weight: 600;
                        line-height: 29px;
                        color: #6EA44C;
                        background-color: #F8FBF6;
                        height: 65px;
                        border-radius: 12px;
                        border: 1px dashed #6EA44C;
                        margin-top: 7px;
                        .signimg{
                            max-height: 55px;
                        }
                        .actionbtn{
                            right: 0;
                            top: -5px;
                            font-weight: 600;
                            padding: 10px;
                            background-color: transparent;
                            color: #6EA44C;
                            line-height: 150%;
                            gap: 4px;
                            z-index: 999;
                            svg{
                                font-size: 20px;
                            }
                        }
                    }
                }
                .group-btn{
                    right: 12px;
                    top: 12px;
                    height: 73px;
                    width: 40px;
                    border-radius: 8px;
                    z-index: 99;
                    button{
                        background-color: white;
                        height: 36px;
                        border-bottom: 1px solid #d1e0c4;
                        font-size: 20px;
                        font-weight: bold;
                        color: #6ea44c;
                        border-radius: 8px 8px 0 0;
                        &:last-child{
                            border-bottom: 0 none;
                            border-radius: 0 0 8px 8px;
                        }
                    }
                }
            }
            .right-sign{
                width: 100%;
                max-width: 301px;
                .sign-add{
                    padding: 12px 16px;
                    border-radius: 8px;
                    box-shadow: 3px 3px 20px 0px rgba(0, 0, 0, 0.07);
                    align-self: flex-start;
                    .signcreate-box{
                        min-height: 122px;
                        border-radius: 12px;
                        border: 1px dashed #6EA44C;
                        margin: 12px 0 4px;
                        .signimg{
                            max-width: 185px;
                        }
                    }
                    .sign-actions{
                        margin: 4px 0 12px;
                        gap: 16px;
                        .actionbtn{
                            font-weight: 600;
                            padding: 10px;
                            background-color: transparent;
                            color: #6EA44C;
                            line-height: 150%;
                            gap: 4px;
                            svg{
                                font-size: 20px;
                            }
                        }
                        .disabled{
                            background-color: transparent;
                            color: #CECECE;
                        }
                    }
                    
                }
                .bottom{
                    align-self: flex-end;
                }
            }
            @media (max-width:${({ theme }) => theme.media.tab}) {
                display: block;
                margin: 0 -20px;
                gap: 0;
                .letter-section{
                    max-width: none;
                    padding: 20px;
                    .sign-letter{
                        max-width: none;
                    }
                }
                .right-sign{
                    max-width: none;
                    padding: 20px;
                }
            }
        }
        
        .cta{
            padding: 0 14px;
            max-width: 305px;
            margin-top: 30px;
            margin-bottom: 7px;
            text-align: center;
            button{
                width: 100%;
            }
            .login-cta{
                line-height: 150%;
                margin-top: 8px;
                a{
                    font-weight: 600;
                }
            }
        }
         @media (max-width:${({ theme }) => theme.media.tab}) {
            .form-title{
                margin: 10px auto;
            }
            
         }
    `
    

    return (
        <MainForm>
            <StepSection>
                <div className="step-one step-each complete-check relative mx-auto">
                    <div className="step-title">Choose a role</div>
                    <div className="step-text small">Please select the role that fits your situation best.</div>
                </div>
                <div className="step-two step-each complete-check relative mx-auto">
                    <div className="step-title">Your details</div>
                    <div className="step-text small">Please provide us with your name, email and location preferences.</div>
                </div>
                <div className="step-three step-each start relative mx-auto">
                    <div className="step-title">Sign Letter</div>
                    <div className="step-text small">Sign the Letter of Intent to confirm your interest.</div>
                </div>
            </StepSection>
            <FormSection>
                <div className="show-flex-tab justify-center breadcrumb mx-auto flex">
                    <Link className="breadbrumb-link" to="#">Choose a role</Link>
                    <Link className="breadbrumb-link">Fill in details</Link>
                    <Link className="breadbrumb-link active" to="#">Sign Letter</Link>
                </div>
                <div className="formnextprev justify-space-between relative w-full flex items-center">
                    <button className="prev-btn absolute flex items-center disable"><IoIosArrowBack /> <small>Previous</small></button>
                    <button className="next-btn absolute flex items-center"><small>Next</small> <IoIosArrowForward /></button>
                </div>
                <LetterSignSection className="mx-auto flex flex-col">
                    <div className="form-title">
                        Letter of Intent
                    </div>
                    <div className="letter-sign flex">
                        <div className="letter-section relative">
                            <div className="group-btn absolute">
                                <button className="w-full flex items-center justify-center"><FiPlus/></button>
                                <button className="w-full flex items-center justify-center"><FiMinus/></button>
                            </div>
                            <div className="sign-letter">
                                <div className="letter-draft">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mattis ante nisl, in consequat tortor tincidunt ac. Morbi in nulla erat. Sed porta vitae massa vel rhoncus. Nunc dapibus metus vel felis ultrices consectetur. 
                                    PARTES
                                    ……………………….., identificado con DNI / RUC Nº …………………………., con domicilio en …………………………….., y en base a Título de Propiedad ……………………..…………, inscrito en la Oficina Registral …………………………… de la Zona Registral …………… en la Partida Electrónica ………………….……...,, en adelante denominado el GUARDIAN, y por otra parte Nature Services Perú S.A., representada por el señor Frank Martin Hajek Cermak, identificado con D.N.I. Nº 06522118, en adelante denominada el COORDINADOR, acuerdan los términos e intenciones siguientes:
                                    ANTECEDENTES
                                    El GUARDIAN es el propietario del predio……………………….…… ubicada en el distrito de…………….., provincia de………………, departamento de………………………., con una extensión de…………... hectáreas. El predio viene siendo dedicado a actividades de ecoturismo, conservación y restauración de la naturaleza, dentro de los cuales está la posibilidad de realizar actividades económicas con terceros, como la gestión de los servicios de la naturaleza, que le permitan generar ingresos sostenibles.
                                    EL COORDINADOR es una empresa socioambiental enfocada en la gestión de ecosistemas y capital natural, con más de 10 años de experiencia en campo, aportando conocimiento y redes nacionales e internacionales para poner en valor los servicios de la naturaleza. Por medio de la red REGENERA (www.regenera.pe), apoya a Guardianes y Aliados locales en la conservación y restauración de ecosistemas, canalizando aportes recibidos de empresas quienes miden, reducen y compensan su huella carbono, fortaleciendo así la sostenibilidad y la competitividad de dichas organizaciones, y creando valor compartido mediante el cuidado de la naturaleza y la lucha contra el cambio climático. EL COORDINADOR trabaja alineado con las políticas públicas aplicables a la materia y es la primera Empresa B Certificada en Perú (https://bcorporation.net/directory/nature- services-peru) .
                                    OBJETO
                                    El objeto de la presente declaración es confirmar el interés del GUARDIAN y el COORDINADOR están avanzando coordinaciones conjuntas para acordar y firmar un Acuerdo Marco de Gestion de Servicios de la Naturaleza que permita comercializar dichos servicios (por ejemplo, el almacenamiento de carbono forestal o la mantención de la biodiversidad) y lograr las condiciones habilitantes que aquí se detallan para poder firmar dicho documento.
                                    CONDICIONES HABILITANTES DEL GUARDIAN
                                    a) Tener un Título de Propiedad sin cargas e inscrito en Registros Públicos.
                                    b) Tener un Plan de Conservación, Reforestación y/o Restauración del predio, y haber seleccionado un ALIADO PAISAJE que lo apoye en su implementación.
                                </div>
                                <div className="assignto">
                                    As signed by <strong>NAME LAST NAME</strong> at <strong>24/06/24 14:02</strong>
                                </div>
                                <input
                                    style={{ display: "none" }}
                                    ref={inputFile}
                                    onChange={handleFileUpload}
                                    type="file"
                                />
                                <div onClick={onButtonClick} className="signature-box relative flex items-center justify-center text-center">
                                    <button className="actionbtn absolute small flex items-center">
                                        <RiDeleteBin6Line/>
                                        <span className="btn-text">Clear</span>
                                    </button>
                                    <img src="../images/sign.png" className="signimg" alt="sign"/>
                                </div>
                            </div>
                        </div>
                        <div className="right-sign flex justify-center flex-wrap">
                            {/* add Sign */}
                            <div className="sign-add w-full hide-tab">
                                <div className="small-title">Please sign here:</div>
                                <div className="signcreate-box flex items-center justify-center">
                                    <img src="../images/sign.png" signimg alt="sign"/>
                                </div>
                                <div className="sign-actions flex items-center">
                                    <button className="actionbtn small flex items-center">
                                        <TbBallpen/>
                                        <span className="btn-text">Generate</span>
                                    </button>
                                    <button className="actionbtn small disabled flex items-center">
                                        <RiDeleteBin6Line/>
                                        <span className="btn-text">Clear</span>
                                    </button>
                                </div>
                                <LightGreenBtn className="w-full">Add</LightGreenBtn>
                            </div>
                            {/* confirm interest */}
                            <OrangeBtn className="bottom disabled">Confirm your interest</OrangeBtn>
                        </div>
                    </div>
                    
                    <div className="step-nav hide-tab flex mx-auto">
                        <div className="bullet"></div>
                        <div className="bullet"></div>
                        <div className="bullet current"></div>
                    </div>
                </LetterSignSection>
            </FormSection>
        </MainForm>
    )
}

export default SignDocumentUploaded;