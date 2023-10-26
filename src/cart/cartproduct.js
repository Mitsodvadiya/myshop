import { removeProduct, addquantity, removequantity } from '../feature/cart/cartSlice';
import { useDispatch, useSelector } from "react-redux";

const Cart_product = (props) => {
    const handelremove = () => {
        dispatch(removeProduct({ index: props.i }))
    }
    const dispatch = useDispatch()
    return (
        <>
            <tr className="tbl_row">
                <td><i className="fa-solid fa-trash" onClick={handelremove}></i></td>
                <td><img src={props.product.product_image} alt="" /></td>
                <td>{props.product.product_name}</td>
                <td>{props.product.product_price}/-</td>
                <td>
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="col-1 p-0 m-0"><button className="btn btn-dark d-inline" onClick={() => dispatch(addquantity({ index: props.i }))}>+</button></div>
                        <div className="col-2 mx-2"><button className="btn btn-dark d-inline">{props.product.q}</button></div>
                        <div className="col-1 p-0 m-0"><button className="btn btn-dark d-inline-block" onClick={() => dispatch(removequantity({ index: props.i }))}>-</button></div>
                    </div>
                </td>
                <td>{props.product.subtotal}/-</td>
            </tr>
        </>
    )
}
export default Cart_product;