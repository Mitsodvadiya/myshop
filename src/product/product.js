import {Link} from 'react-router-dom'
const Product = (props) => {
    let purl = '/product_detail/' + props.pd.id
    return (
        <>
            <Link to={purl} style={{textDecoration:'none'}} className="col-md-3 mb-5 bg-dark">
                <img src={props.pd.product_image} alt="" />
                <small>{props.pd.product_name}</small><br />
                <span>{props.pd.product_name}</span><br />
                <i className="fa-solid fa-star" style={{color:"#ffe205"}}></i> <i className="fa-solid fa-star"
                    style={{color:"#ffe205"}}></i> <i className="fa-solid fa-star" style={{color:"#ffe205"}}></i> <i
                        className="fa-solid fa-star" style={{color:"#ffe205"}}></i> <i className="fa-solid fa-star" style={{color:"#ffe205"}}></i>
                <div className="shop"><span>{props.pd.product_price}/-</span><Link to="/cart"zz><i className="fa-solid fa-cart-shopping float-end"></i></Link></div>
            </Link>
        </>
    )
}

export default Product