import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Service from '../Service/Service';
import "./Services.css"

const Services = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (

        <Container>
            <div className="course-container">
                {
                    courses.map(course => <Service
                        key={course.name}
                        course={course}></Service>)
                }
            </div>
        </Container>



    );
};

export default Services;