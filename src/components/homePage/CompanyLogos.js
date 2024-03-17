import React, { useState }  from "react";
import styled from "styled-components";
import Slider from "react-slick";

const WorkWith = () => {

     const [data, setData] = useState([
        { id: 1, img: '../images/company-logo/idb.png' },
        { id: 2, img: '../images/company-logo/un-restoration-logo.png' },
        { id: 3, img: '../images/company-logo/certified-b-corp.png' },
        { id: 4, img: '../images/company-logo/natural-capital-coalition.png' },
        { id: 5, img: '../images/company-logo/peru_co.png' },
        { id: 6, img: '../images/company-logo/idb.png' },
        { id: 7, img: '../images/company-logo/un-restoration-logo.png' },
        { id: 8, img: '../images/company-logo/certified-b-corp.png' },
    ]);

    const settings = {
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 8000,
        pauseOnHover: true,
        cssEase: 'linear',
        arrows: false,
        infinite: true,
        centerMode: true,
        variableWidth: true,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
            }
        },
    ]
};

    const Alliances = styled.section`
        background: #F8FBF6;
        padding: 110px 30px 110px;
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
    `

    return(
        <Alliances>
            <div className="company-group flex justify-start flex-col">
                 <div className="title-box">
                    <h2>Proud of our work practices and alliances:</h2>
                </div>
                <div className="company-logo-container">
                    <Slider {...settings}>
                        {data.map((item) => (
                            <div key={item.id} className="co-logo">
                                <img src={item.img} alt="company logos"/>
                            </div>
                        ))}
                    </Slider>
                    
                </div>
            </div>
        </Alliances>
    );    
}

export default WorkWith;