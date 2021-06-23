import React from 'react';

const Cart = (props) => {
    const totalAmount = props.cart.reduce((total,course) => total + course.price, 0);
    return (
        <div>
            <h6 className="text-center">Course Enrollment</h6>
            <p className="text-center">Enrolled Courses: {props.cart.length}</p>
            <div className="d-flex justify-content-between">
                <p>Total Price:</p>
                <p>{totalAmount}</p>
            </div>

        </div>
    );
};

export default Cart;
