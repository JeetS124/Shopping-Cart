import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../store/cartSlice'
import { getProducts } from '../store/productSlice'
import StatusCode from '../utils/StatusCode'

const Products = () => {
    const dispatch = useDispatch()
    const { data: products, status } = useSelector(state => state.products)


    useEffect(() => {
        dispatch(getProducts(products))
        // fetch('https://fakestoreapi.com/products')
        //     .then(response => response.json())
        //     .then(data => setProducts(data))
    }, [])

    if (status === StatusCode.LOADING) {
        return <p className='text-center'>Loading...</p>
    }
    if (status === StatusCode.ERROR) {
        return <div className='container my-5'>
            < div class="alert alert-danger fw-bold" role="alert" >
                Something went wrong! Try again later
            </div>
        </div>
    }

    const addToCart = (product) => {
        dispatch(addItem(products))
    }
    return (
        <div>
            <h1 className='p-2 fw-bold text-center'>Product Dashboard</h1>
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
                                    <button onClick={() => addToCart(product)} className="btn btn-primary">Add to Cart</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Products
