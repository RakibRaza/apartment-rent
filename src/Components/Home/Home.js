import React, { useEffect, useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import './Home.css'
import Data from "../Data/Data.json"
import HouseCard from '../HouseCard/HouseCard';
import { Col, Row, Card } from 'react-bootstrap';
import picOne from "../logos/affordable 1.png"
import picTwo from "../logos/apartment 1.png"
import picThree from "../logos/lessee 1.png"
import Footer from '../Footer/Footer';

const Home = () => {
    const [data, setdata] = useState([]);
    useEffect(() => { setdata(Data) }, [])

    const team1 = data.slice(0, 3);
    const team2 = data.slice(3, 6);
    const team3 = data.slice(6, 9);

    return (
        <div>
            <div className="row backImg">
                <div className="col-md-3"></div>
                <div className="col-md-6 ">
                    <h1 className="serchPlace">find your rent house</h1>
                    <div className="serchPlace">
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="mr-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
            <div className="container gap">
                <div className="textMiddle">
                    <h6>House Hunt</h6>
                    <h1>Discover the latest Rent</h1>
                    <h1>Aviailable Today</h1>
                </div>
                <Row  >
                    <Col sm>
                        {
                            team1.map(team => <HouseCard team={team}></HouseCard>)
                        }
                    </Col>
                    <Col sm>
                        {
                            team2.map(team => <HouseCard team={team}></HouseCard>)
                        }
                    </Col>
                    <Col sm>
                        {
                            team3.map(team => <HouseCard team={team}></HouseCard>)
                        }
                    </Col>
                </Row>

            </div>
            <div className="gap">
                <div className="container">
                    <div className="textMiddle">
                        <h6>Service</h6>
                        <h1>We are an agency tailored to all</h1>
                        <h1>clients needs that always delivers</h1>
                    </div>
                    <Row  >
                        <Col sm>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={picOne} />
                                <Card.Body className="textMiddle">
                                    <Card.Title>Wide Range Of Propartis</Card.Title>
                                    <Card.Text>
                                        With a robust selection of popular properties on hand , as well as leading properties from experts.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={picTwo} />
                                <Card.Body className="textMiddle">
                                    <Card.Title>Financing Made Easy</Card.Title>
                                    <Card.Text>
                                        Our stress-free finance department that can find financial solutions to save you money .
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={picThree} />
                                <Card.Body className="textMiddle">
                                    <Card.Title>Trusted By Thousands</Card.Title>
                                    <Card.Text>
                                        10 new offers every day . 350 offers on site , trusted by community of Thousands of users
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </div>
            </div >
            <Footer></Footer>
        </div>
    );
};

export default Home;