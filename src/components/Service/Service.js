import Button from '@restart/ui/esm/Button';
import React from 'react';

import "./Service.css";

const Service = (props) => {
    console.log(props);
    const { image, name, description, price } = props.course;
    return (
        // All services section 
        <div className="courses">

            <div className="card w-100 h-100">
                <img src={image} className="card-img-top w-100 h-100" alt="" />

                <div className="card-body">
                    <h5 className="card-title">Name:{name}</h5>
                    <p className="card-text">Deascription:{description}</p>
                    <p className="card-text">Price:{price}</p>
                    <Button className="btn btn-info rounded-3">Read more</Button>
                </div>
            </div>



        </div>
    );
};

export default Service;