
import { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Online from '../Online/Online';
import "./Courses.css"

const Courses = () => {
    const [course, setCourse] = useState([]);
    useEffect(() => {
        fetch('./course.json')
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])

    return (
        // All courses 
        <div>

            <Container>
                <div className=" course  ">

                    {
                        course.map(cr => <Online
                            key={cr.name}
                            cr={cr}>

                        </Online>)


                    }

                </div>
                <Link className="d-flex justify-content-center my-5 view-link" to="/services">
                    <Button variant="outline-primary">view all courses...</Button>{' '}</Link>
            </Container>
        </div>
    );
};

export default Courses;