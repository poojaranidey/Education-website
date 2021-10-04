import React from 'react';

import "./Service.css";

const Service = (props) => {
    console.log(props);
    const { image, name, description, price } = props.course;
    return (
        <div className="courses">

            <div className="card w-100 h-100">
                <img src={image} className="card-img-top" alt="" />

                <div class="card-body">
                    <h5 class="card-title">Name:{name}</h5>
                    <p class="card-text">Deascription:{description}</p>
                    <p class="card-text">Price:{price}</p>
                </div>
            </div>



        </div>
    );
};

export default Service;