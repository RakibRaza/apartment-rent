import React from 'react';
import {  ListGroup , ListGroupItem , Card} from 'react-bootstrap';
import './HomeCard.css'
import logo1 from "../logos/map-marker-alt-solid 1.png"
import logo2 from "../logos/bed 1.png"
import logo3 from "../logos/bath 1.png"

const HouseCard = (props) => {
    const{pic1 , first_name , detailone, detailtwo,location,price}=props.team;
    return (
        <Card className="cardHight" style={{ width: '18rem' }}>
        <Card.Img variant="top" className="imgSize" src={pic1} />
        <Card.Body>
          <Card.Title>{first_name}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem><img className="logosize" src={logo1} alt="" /> {location}</ListGroupItem>
          <ListGroupItem><img className="logosize" src={logo2} alt="" /> {detailone}</ListGroupItem>
          <ListGroupItem><img className="logosize" src={logo3} alt="" /> {detailtwo}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">{price}</Card.Link>
          <Card.Link className="btn btn-primary" href="#">Details</Card.Link>
        </Card.Body>
      </Card>
    );
};

export default HouseCard;