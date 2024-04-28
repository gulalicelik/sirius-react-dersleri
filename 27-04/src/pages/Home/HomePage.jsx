import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

import {Container, Row, Col,Button} from 'react-bootstrap';




const HomePage = () => {
    return (
        <div>
            {/*<Navbar tempName="Home nav"/>*/}
            <h1>Home</h1>
            <Container>
                <Row>
                    <Col sm={8} md={6} lg={4}>sm=8-md=6-lg=4</Col>
                    <Col sm={8} md={6} lg={4}>
                        <Button variant="danger">Primary</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HomePage