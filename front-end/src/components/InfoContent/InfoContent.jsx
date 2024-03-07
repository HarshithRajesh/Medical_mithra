import React from 'react'
import { Doctor, Logo, TextBG, Picture1 } from "../../images"
import "./InfoContent.css"

const InfoContent = () => {
    return (
        <section id="info" className="White">
            <div className="Wrapper">
                <div className="content-container">
                    <div className="info-content">
                        <img src={Doctor} alt="Doctor line Art" width={400} />
                    </div>
                    <div className="info-content">
                        <div className="info-content-details">
                            <img src={Logo} alt="Logo" width={200} />
                            <img src={TextBG} alt="Logo" width={1080} />
                            <div className="content-container">
                                <div className="info-content">
                                    <p className="Amount"><strong>13594+</strong> MBBS & BDS Seats!</p>
                                    <p className="Amount"><strong>20,87,462</strong> Aspirants!</p>
                                </div>
                                <div className="info-content">
                                    <p className="Amount"><strong>45110+</strong> MD/MS & MDS Seats!</p>
                                    <p className="Amount"><strong>2,08,898+</strong> Aspirants!</p>
                                </div>
                            </div>
                        </div>
                    </div></div>
                <img src={Picture1} className="Corner-image" width={100} />
            </div></section>
    )
}

export default InfoContent