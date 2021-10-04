
import Button from '@restart/ui/esm/Button';
import React from 'react';
import "./Online.css"



const Online = (props) => {
    // online single courses 
    // console.log(props.cr);
    const { name, image, description, price } = props.cr;
    // console.log(name);
    // console.log(props.cr.name)
    return (
        <div >

            <div className="card w-100 h-100">

                <img className="w-100 h-100 " src={image} alt="" />
                <div className="card-body">
                    <h5 className="card-title">Name:{name}</h5>
                    <p className="card-text">Description:{description}</p>
                    <p className="card-text">Price:{price}</p>
                    <Button className="btn btn-info text-white rounded-3">Read more</Button>
                </div>
            </div>

        </div>
    );
};

export default Online;