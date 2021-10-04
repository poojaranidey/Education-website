
import React from 'react';
import "./Online.css"



const Online = (props) => {
    console.log(props);
    const { image, name, description, price } = props.cr;
    return (
        <div className="course">

            <div className="card w-100 h-100">
                <img src={image} className="card-img-top" alt="" />

                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{description}</p>
                    <p class="card-text">{price}</p>
                </div>
            </div>

        </div>
    );
};

export default Online;