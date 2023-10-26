const Footer = () => {
    return (
        <>
            <div className="container-fluid pt-5" id="signupbanner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 style={{ classNamfontFamily: "dancing" }}>Sign Up For Newslatters</h1>
                            <p>Get e-mail updates about our latest shop <span>special offer</span></p>
                        </div>
                        <div className="col-md-6">
                            <div className="input-group input-group-lg mb-3">
                                <input type="text" className="form-control" placeholder="Your Email Adress" aria-label="Recipient's username"
                                    aria-describedby="button-addon2" />
                                <button className="btn btn-info" type="button" id="button-addon2"><a href=""
                                    style={{ fontFamily: "'Times New Roman', Times, serif", textDecoration: "none", color: "#fff", fontWeight: "bold" }}>SignUp</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="container">
                    <div className="row footer py-5">
                        <div className="col-md-4">
                            <h3 className="mylogo">My Shop</h3><br />
                            <h6>Contect</h6><br />
                            <span><span className="collan">Address :</span> E-20 Matrushakti soc surat</span><br />
                            <span><span className="collan">Phone :</span> 8141310180</span><br />
                            <span><span className="collan">Hour :</span> 10-20/Monday to saterday</span><br /><br />
                            <h6>Follow Us</h6>
                            <i className="fa-brands fa-facebook" style={{ color: "#005cfa" }}></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-whatsapp"></i>
                        </div>
                        <div className="col-md-2">
                            <h6>About</h6>
                            <span>About Us</span><br />
                            <span>Delivery Information</span><br />
                            <span>Privacy Policy</span><br />
                            <span>Terms and condition</span><br />
                            <span>Contect Us</span><br />
                        </div>
                        <div className="col-md-2">
                            <h6>My Account</h6>
                            <span>Sign in</span><br />
                            <span>View Cart</span><br />
                            <span>My Watchlist</span><br />
                            <span>Track My order</span><br />
                            <span>Help</span><br />
                        </div>
                        <div className="col-md-4">
                            <h6>Install App</h6>
                            <span>from App store or google play</span><br /><br />
                            <img src="./images/pay/app.jpg" alt="" />
                            <img src="./images/pay/play.jpg" alt="" /><br /><br />
                            <span>Secured Payment Getways</span><br /><br />
                            <img src="./images/pay/pay.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <script></script>
        </>
    )
}
export default Footer