import React from 'react';
import './ApartmentDetail.css';
import home1 from '../../../src/home-banner-2020-02-min.jpg'
import home2 from '../../../src/old-town-by-welcome-apartment.jpg';
import home3 from '../../../src/im-234627.jpg';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const ApartmentDetail = () => {
    // const TeamDetail = (props) => {
    //     const {strBanner, strBadge, strLeague, intFormedYear, strCountry, strSport, strGender,strDescriptionEN, strDescriptionFR, strFacebook, strTwitter,strYoutube} = props.team.team;
    return (
        <div className="aptDetail-Section">
            <div className="container">
                <div className="row">

                    <div className="col-md-8">
                        <div className="apartment-pictures">
                            <div className="apartment_badge">
                                {/* <img src={strBadge} alt=""/> */}
                                <img src={home1} alt="" />
                            </div>
                            <div className="apartment-inside">
                                <img src={home1} alt="" />
                                <img src={home2} alt="" />
                                <img src={home3} alt="" />
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
                                <input className="submit" type="submit" Value="Request Booking" />
                            </form>
                        </div>
                    </div>
                    </div>

                    <div className="apartment-pricing">
                        <div className="row">
                            <div className="col-md-6">
                               <div className="family-apartment">
                                   <h4>Family Apartment Three</h4>
                                   <span className="apt-pricing">-$256 {/* {price} */} </span>
                                   <p>300 sq-ft Bedroom, semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha, Meiboune {/* {details} */}</p>
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
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sit, quo, pariatur libero voluptatum perferendis laboriosam unde iste animi perspiciatis itaque quidem quaerat esse odit, maxime ex laudantium architecto quos eos rerum magni excepturi maiores. Veritatis officiis sunt labore quos tempore voluptates, accusantium dolores minus consectetur ducimus repudiandae esse ipsa.</p>
                    </div>
                
            </div>
        </div>
    );
};

export default ApartmentDetail;