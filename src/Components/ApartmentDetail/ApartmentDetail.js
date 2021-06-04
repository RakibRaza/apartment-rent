import React, { useState } from 'react';
import './ApartmentDetail.css';
// import home1 from '../../../src/home-banner-2020-02-min.jpg'
// import home2 from '../../../src/old-town-by-welcome-apartment.jpg';
// import home3 from '../../../src/im-234627.jpg';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useHistory, useParams } from 'react-router';
import data from "../Data/Data.json"
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/action';
const ApartmentDetail = () => {
    const { id } = useParams();
    const [home, setHome] = useState(data.find(item => item.id === parseInt(id)))
    const dispatch = useDispatch()
    const history = useHistory()
    const handleClick = () => {
        dispatch(addToCart(id))
        history.push(`/rent/${id}`)
    }
    return (
        <div className="aptDetail-Section">
            <div className="container">
                <div className="row">

                    <div className="col-md-8">
                        <div className="apartment-pictures">
                            <div className="apartment_badge">
                                <img src={home.pic1} alt="" />
                            </div>
                            <div className="apartment-inside">
                                <img src={home.pic1} alt="" />
                                <img src={home.pic2} alt="" />
                                <img src={home.pic3} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="booking-form">
                            <form action="">
                                <input type="text" placeholder="Full Name" />
                                <input type="number" placeholder="Phone No." />
                                <input type="email" placeholder="Email Address" />
                                <textarea name="" id="" placeholder="Message"></textarea>
                                <input onClick={handleClick} className="submit" value="Request Booking" />

                            </form>
                        </div>
                    </div>
                </div>

                <div className="apartment-pricing">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="family-apartment">
                                <h4>{home.first_name}</h4>
                                <span className="apt-pricing">-{home.price} {/* {price} */} </span>
                                <p>{home.familyApt} {/* {details} */}</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="price-details">
                                <h6>Price Details-</h6>
                                <p>Rent/Month: $550(negotiable) {/* {price} */}</p>
                                <p>Rent/Charge: 8,000/= Tk per month, subject to change {/* {price} */}</p>
                                <p>Security/Deposit: 3 Month's rent{/* {price} */}</p>
                                <p>Flat Release Policy: Lorem ipsum dolor sit amet. {/* {price} */}</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="property-detail">
                    <h6>Property Details-</h6>
                    <p>{home.propertyDetail}</p>
                </div>

            </div>
        </div>
    );
};

export default ApartmentDetail;