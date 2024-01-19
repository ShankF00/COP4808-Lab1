import React from "react";


const Card = (props) => {
  
    const cardStyle = {
        background: props.cardBack,
        width: '27%',
        paddingBottom: '1px',
        margin: '1px',
        borderRadius: '10px',
        color: props.textColor
    };

    return (
        <div className="Card" style = {cardStyle}>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                <img src={props.img} alt="Card Image" style={{ width: '100%', borderRadius: '10px' }} />
            </a>
            <h3>{props.title}</h3>
            <h4>{props.dev}</h4>
        </div>
    )
}

export default Card;