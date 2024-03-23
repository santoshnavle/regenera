import styled from "styled-components";
import Slider from "react-slick";

const CompanyLogos = ({settings, settingsTwo, data, datatwo, title}) => {

    const Alliances = styled.section`
        background: #F8FBF6;
        padding: 110px 0 110px;
        text-align:center;
        .company-group{
            max-width: 100%;
            flex: 1;
            gap: 48px 0;
            .company-logo-container{
                .co-logo{
                    max-height: 102px;
                    padding: 0 70px;
                    img{
                        filter: grayscale();
                    }
                }
            }
        }
        @media (max-width:${({ theme }) => theme.media.tab}) {
            padding: 24px 0 20px;
            .company-group{
                .title-box{
                    padding: 0 20px;
                }
            }
        }
    `

    return(
        <Alliances>
            <div className="company-group flex justify-start flex-col">
                {title && (
                    <div className="title-box">
                        <h3>{title}</h3>
                    </div>
                )}
                
                <div className="company-logo-container">
                    <Slider {...settings}>
                        {data.map((item) => (
                            <div key={item.id} className="co-logo">
                                <img src={item.img} alt="company logos"/>
                            </div>
                        ))}
                    </Slider>
                </div>
                {settingsTwo && (
                    <div className="company-logo-container">
                        <Slider {...settingsTwo}>
                            {datatwo.map((item) => (
                                <div key={item.id} className="co-logo">
                                    <img src={item.img} alt="company logos"/>
                                </div>
                            ))}
                        </Slider>
                    </div>
                )}
            </div>
        </Alliances>
    );    
}

export default CompanyLogos;