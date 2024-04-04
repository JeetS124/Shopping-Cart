import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../store/cartSlice'

const Cart = () => {
    const products = useSelector(state => state.cart)

    const dispatch = useDispatch();

    const removeCart = (id) => {
        dispatch(removeItem(id))
    }

    return (
        <div>
            <h1 className='p-2 fw-bold text-center'>Cart Dashboard</h1>
            <div className='d-flex flex-wrap justify-content-center mx-auto col-lg-10 gap-3'>
                {
                    products.map((product) => {
                        return (
                            <div key={product.id} className="card" style={{ width: "18rem" }}>
                                <img src={product.image} height={250} width={200} className="card-img-top p-5" alt="no-image" />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text text-center fw-semibold">INR: {product.price}</p>
                                </div>
                                <div className="card-footer text-center">
                                    <button className="btn btn-primary" onClick={() => { removeCart(product.id) }}>Remove</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Cart
