import { Link } from 'react-router-dom'
import { gettoken } from '../authentication/tokenstore'
const Nav = () => {
    const { access } = gettoken();
    return (
        <>
            <nav id="mynav" className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark" aria-label="Offcanvas navbar large">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/'>
                        <h3 className="mylogo">My Shop</h3>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2"
                        aria-controls="offcanvasNavbar2" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasNavbar2"
                        aria-labelledby="offcanvasNavbar2Label">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbar2Label">Offcanvas</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <Link to='/' className="nav-link active" aria-current="page">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/shop' className="nav-link" >Shop</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/about' className="nav-link" >About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/blog' className="nav-link">blog</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/contect' className="nav-link">Contect</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link to='/cart' className="nav-link"><i className="fa-solid fa-cart-shopping"></i></Link>
                                </li>
                            </ul>
                            {access ? <Link to='/dashbord'><button className="btn btn-outline-info px-4" style={{ fontFamily: 'dancing', fontWeight: 'bolder' }}
                                type="submit">Dashbord</button></Link>
                                : <Link to='/signup'><button className="btn btn-info px-4" style={{ fontFamily: 'dancing', marginRight: '10px', fontWeight: 'bolder' }}
                                    type="submit">SignUp</button></Link>}
                            {access ? '' : <Link to='/login'><button className="btn btn-outline-info px-4" style={{ fontFamily: 'dancing', fontWeight: 'bolder' }}
                                type="submit">Login</button></Link>}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav