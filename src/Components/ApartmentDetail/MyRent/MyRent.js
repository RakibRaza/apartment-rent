import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../../redux/action';
import './MyRent.css';

const MyRent = () => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const handleClick = (id) => {
        dispatch(removeFromCart(id))
    }
    console.log(cart)
    return (
        <div className="myRent-section">
            <div className="container">
                <div className="my-rent">
                    <h4>My Rent</h4>

                    <div className="rent-table">
                        <div className="rent-heading">
                            <h6>House Name</h6> <h6>Price</h6> <h6>Action</h6>
                        </div>
                        {cart.map(item => <div className="rent-detail" key={item.newId}>
                            <p>{item.first_name}</p> <p>{item.price}</p> <p><span onClick={() => handleClick(item.newId)}>Cancle</span></p>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyRent;