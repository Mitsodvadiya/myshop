import Banner from "../banners/banner";
import Cart_product from "./cartproduct";
import { useSelector } from "react-redux";
const Cart = () => {
    const { product, grandtotal } = useSelector(state => state.cart)
    return (
        <>
            <Banner src="url(./images/about/banner.png)" h1='#Cart' p="Add Your Coupans code and get 70% off !" op={false} />
            <div className="table-responsive" id="table">
                <table className="table table-dark table-hover text-center">
                    <thead>
                        <tr>
                            <th scope="col">REMOVE</th>
                            <th scope="col">IMAGE</th>
                            <th scope="col">PRODUCT</th>
                            <th scope="col">PRICE</th>
                            <th scope="col">QUANTITY</th>
                            <th scope="col">SUBTOTAL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            product?.map((value, index) => {
                                return <Cart_product i={index} product={value} key={index} />
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6 mb-5">
                        <h4>Apply Coupan</h4>
                        <div className="row mt-4">
                            <div className="col-8">
                                <input type="text" className="form-control" placeholder="Enter the Coupan Code" />
                            </div>
                            <div className="col-4"><button type="submit" className="btn btn-outline-info">Apply</button></div>
                        </div>
                    </div>
                    <div className="col-md-6" id="total">
                        <h4>Cart Totals</h4>
                        <div className="container">
                            {
                                product?.map((value, index) => {
                                    return (
                                        <div className="row">
                                            <div className="col-6">{value.product_name}</div>
                                            <div className="col-6">{value.subtotal}</div>
                                        </div>
                                    )
                                })
                            }
                            <div className="row" id="total-theme">
                                <div className="col-6">
                                    <h5>Total</h5>
                                </div>
                                <div className="col-6">{grandtotal}</div>
                            </div>
                        </div><br />
                        <button type="submit" className="btn btn-info">Proceed to checkout</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart;