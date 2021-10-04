
import React from 'react';
import "./Online.css"



const Online = (props) => {
    // console.log(props.cr);
    const { name, image, description, price } = props.cr;
    // console.log(name);
    // console.log(props.cr.name)
    return (
        <div >

            <div className="card w-100 h-100">

                <img className="w-100 " src={image} alt="" />
                <div class="card-body">
                    <h5 class="card-title">Name:{name}</h5>
                    <p class="card-text">Description:{description}</p>
                    <p class="card-text">Price:{price}</p>
                </div>
            </div>

        </div>
    );
};

export default Online;