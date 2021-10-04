import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Service from '../Service/Service';
import "./Services.css"

const Services = () => {
    // All online course service section 
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (

        <Container>
            <div className="mb-5 py-5" >
                <h1>Our latest courses- 2021</h1>
                <div className="course-container my-5">

                    {
                        courses.map(course => <Service
                            key={course.id}
                            course={course}></Service>)
                    }
                </div>
            </div>

        </Container>



    );
};

export default Services;