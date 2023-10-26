import Feachers from "../about/feachers"
import P_main from "../product/mainproduct"
import { Link } from 'react-router-dom'
import Big_add from "../banners/bigadd"
import Small_add from "../banners/smalladd"
const Home = () => {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./images/p1.jpg" className="d-block w-100  banner-img" alt="..." />
                        <div className="carousel-caption d-none d-md-block  myheader">
                            <h5>Trade-in-Offers</h5>
                            <h1 className="banner-text" style={{ fontSize: "50px" }}>Super Value deals</h1><br />
                            <h1 className="banner-text">On All Products</h1>
                            <p>Save more with coupons & up to 70% off !</p>
                            <Link to='/shop'><button className="btn btn-info">Shop Now</button></Link>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="/images/p2.jpg" className="d-block w-100  banner-img" alt="..." />
                        <div className="carousel-caption d-none d-md-block  myheader">
                            <h5>New Products are Availabel.</h5><br />
                            <h1 className="banner-text" style={{ marginottom: "10px" }}>Expensive Offers for Today !</h1><br />
                            <Link to='/shop'><button className="btn btn-outline-info">Watch Now</button></Link>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="/images/p3.jpg" className="d-block w-100 banner-img" alt="..." />
                        <div className="carousel-caption d-none d-md-block myheader">
                            <h2 className="banner-text">Our Products Qualitys</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, in?Some representative placeholder
                                content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="container text-center my-5 featcher" id="banner-items">
                <div className="row">
                    <Feachers head1='Free Shopping' head2='Online Order' src1="./images/f1.png" src2="./images/f2.png" />
                    <Feachers head1='Save Money' head2='Promoshions' src1="./images/f3.png" src2="./images/f4.png" />
                    <Feachers head1='Happy sale' head2='24/7 support' src1="./images/f5.png" src2="./images/f6.png" />
                </div>
            </div>
            <P_main op={true} heading='Featured Products' p='Summer Collaction new model design' />
            <div className="container-fluid my-5 d-flex flex-column align-items-center justify-content-center" id="explore" style={{ background: "url(./images/b2.jpg)" }} >
                <span>Repaire serviece</span>
                <h1>Up to<span> 70% off </span>- All t-shirts & Accesories</h1>
                <button className="btn btn-outline-info">Explore More</button>
            </div>
            <P_main op={true} heading='New Arrivals' p='Summer Collaction new model design' />
            <div className="container" id="offers">
                <div className="row d-flex align-items-center justify-content-around">
                    <Big_add h2='Creazy Deals' h1='buy 1 get 1 Free' p='The best classisc dress on sale at core' cname='b1' />
                    <Big_add h2='Spring / Summer' h1='Upcoming Season' p='The best classisc dress on sale at core' cname='b2' />
                    <Small_add h2='T-SHIRTS' h6='winter collaction-50% off' src="url('./images/banner/b4.jpg')" />
                    <Small_add h2='SEASONAL SALE' h6='Spring / Summer - 2022' src="url('./images/banner/b7.jpg')" />
                    <Small_add h2='NEW FOOTWARE COLLACTION' h6='>New Trandy Prinls' src="url('./images/banner/b18.jpg')" />
                </div>
            </div>
        </>
    )
}

export default Home