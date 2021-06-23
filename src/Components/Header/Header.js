import React from 'react';
import './Header.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Header = () => {
    return (
            <Row>
                <Col md={12}>
                    <h1 className="text-center">Coursera Clone</h1>
                    <hr/>
                </Col>
            </Row>
    );
};

export default Header;
