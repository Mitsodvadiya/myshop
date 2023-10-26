import { useNavigate, useParams } from "react-router-dom";
import axios from "axios"
import { setProduct } from '../feature/cart/cartSlice';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../feature/quantity/quantitySlice";

const Product_detail = () => {
    const ai = axios.create({
        baseURL: ' http://127.0.0.1:8000/'
    })
    const count = useSelector(state => state.quantity.value)
    const dispatch = useDispatch()
    const { id } = useParams()
    const navigate = useNavigate()
    const handelchange = e => {
        const main = document.getElementById("main_img");
        main.src = e.target.src;
        console.log(main);
    }
    const [product, setproduct] = useState();
    async function getdata() {
        const response = await ai.get(`product/products/${id}`);
        setproduct(response.data);
    }
    const handelclick = () => {
        let cartproduct = { ...product, q: count, subtotal: product.product_price * count }
        dispatch(setProduct({ product: cartproduct }))

        navigate('/cart')
    }
    useEffect(() => {
        getdata();
    }, []);
    return (
        <>
            <div className="container pt-5">
                <div className="row pt-5" id="product_d">
                    <div className="col-md-5 pt-5 px-0">
                        <img src={product?.product_image} alt="" id="main_img" />
                        <div className="row mt-2 ps-md-3 ps-sm-4 d-flex align-items-center justify-content-between">
                            <div className="col-3 p-0">
                                <img src="./images/products/f1.jpg" onClick={handelchange} alt="" />
                            </div>
                            <div className="col-3 p-0">
                                <img src="./images/products/f2.jpg" alt="" onClick={handelchange} />
                            </div>
                            <div className="col-3 p-0">
                                <img src="./images/products/f3.jpg" alt="" onClick={handelchange} />
                            </div>
                            <div className="col-3 p-0">
                                <img src="./images/products/f4.jpg" alt="" onClick={handelchange} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 pt-5 ps-5">
                        <br />
                        <h6>{product?.product_name}</h6><br />
                        <h4 style={{ classNamfontFamily: "dancing" }}>{product?.product_name}</h4><br />
                        <h1>{product?.product_price}/-</h1>
                        <div className="row">
                            <div className="col-3">
                                <select className="form-select form-select-sm" aria-label="Select Size">
                                    <option value="1">small</option>
                                    <option value="2">midium</option>
                                    <option value="3">large</option>
                                    <option value="3">Extra large</option>
                                    <option value="3">Extra Extra large</option>
                                </select>
                            </div>
                        </div><br />
                        <div className="row">
                            <div className="col-12"><h4>Quantity : </h4></div><br />
                            <div className="col-1"><button className="btn btn-light d-inline" onClick={() => dispatch(increment())}>+</button></div>
                            <div className="col-1"><button className="btn btn-dark d-inline">{count}</button></div>
                            <div className="col-1"><button className="btn btn-light d-inline-block" onClick={() => dispatch(decrement())}>-</button></div>
                            <div className="row mt-3">
                                <div className="col-4 p-0">
                                    <button className="btn btn-outline-info px-5" onClick={handelclick} ><i className="fa-solid fa-cart-shopping"></i></button>
                                </div>
                            </div>
                        </div>
                        <br />
                        <h4>Product Details</h4>
                        <p style={{ fontFamily: "Times New Roman', Times, serif" }}>{product?.product_details}</p>
                    </div>
                </div>
            </div>
            <div class="container mt-5">
                <div class="row product d-flex align-items-center justify-content-around"></div>
            </div>
        </>
    )
}
export default Product_detail;