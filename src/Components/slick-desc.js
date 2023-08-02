import React from "react";
import '../Components/slick-des.css';

const SlickDesc = ({ desc }) => {
    console.log("mine"+desc);
    const points = Object.keys(desc).filter(key => key.startsWith("point")).map(key => desc[key]);
    
    return (
        <>
            {desc.title && (
                <div className="slick-desc">
                    <div className="slick-desc-title">
                        <h1> {desc.title} 
                        {console.log("me"+desc.title)}
                        </h1>
                    </div>
                    <div className="slick-desc-text">
                        {points.map((point, index) => (
                            <p key={index}> {point} </p>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}

export default SlickDesc;
