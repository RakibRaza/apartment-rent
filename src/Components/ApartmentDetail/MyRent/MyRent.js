import React from 'react';
import './MyRent.css';

const MyRent = () => {
    return (
        <div className="myRent-section">
            <div className="container">
                <div className="my-rent">
                    <h4>My Rent</h4>

                    <div className="rent-table">
                        <div className="rent-heading">
                            <h6>House Name</h6> <h6>Price</h6> <h6>Action</h6>
                        </div>
                        <div className="rent-detail">
                            <p>Lorem ipsum dolor.</p> <p>$65</p> <p><a href="#">View Detail</a></p>
                        </div>
                        <div className="rent-detail">
                            <p>Lorem ipsum dolor.</p> <p>$65</p> <p><a href="#">View Detail</a></p>
                        </div>
                        <div className="rent-detail">
                            <p>Lorem ipsum dolor.</p> <p>$65</p> <p><a href="#">View Detail</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyRent;