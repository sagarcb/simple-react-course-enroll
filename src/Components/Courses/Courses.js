import React, {useState} from 'react';
import './Courses.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Cart from '../Cart/Cart';

const Courses = (props) => {
    const [cart,setCart] = useState([]);
    function handleCourses(courses) {
        const newCourse = [...cart,courses];
        setCart(newCourse);
    }
    return (
        <Row>
            <Col md={10} className="course-section">
                <Row>
                    {
                        props.courses.map(course =>
                            <Col md={4}>
                                <Card style={{ width: '18rem', display: 'flex' }}>
                                    <Card.Img variant="top" src="https://analyticsinsight.b-cdn.net/wp-content/uploads/2020/06/Python1.png" />
                                    <Card.Body>
                                        <Card.Title>{course.title}</Card.Title>
                                        <Card.Text>
                                            <p>Price: {course.price}</p>
                                        </Card.Text>
                                        <Button variant="primary" onClick={() => handleCourses(course)}>Enroll Now</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    }
                </Row>
            </Col>
            <Col md={2}>
                <Cart cart={cart}></Cart>
            </Col>
        </Row>
    );
};

export default Courses;
