
import { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Online from '../Online/Online';

const Courses = () => {
    const [course, setCourse] = useState([]);
    useEffect(() => {
        fetch('./course.json')
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])

    return (
        <div>
            <Container>
                <div className="course-container">
                    {
                        course.map(cr => <Online

                            cr={course}></Online>)
                    }
                    <Link to="/services">
                        <Button variant="outline-primary">view all courses...</Button>{' '}</Link>
                </div>
            </Container>
        </div>
    );
};

export default Courses;