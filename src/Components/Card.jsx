import React from "react";



const Card = props => {
    return (
        <div className="card">
            <div className="overflow">
                <img src={props.imgsrc} className="IMG" alt="image 1" />
            </div>
            <div className="card-body">
                <h4 className="card-title">Card Title</h4>
                <p className="card-text text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aperiam culpa iste, 
                eaque perspiciatis doloremque deserunt natus minima vitae, non mollitia tenetur. Tenetur ut accusantium qui, at eos exercitationem architecto!</p>
                <a href="#" className="btn btn-outline success">See Products </a>
            </div>
        </div>
    )
};

export default Card;