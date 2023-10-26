import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import Nav from './home/navbar';
import Home from './home/home';
import Footer from './home/footer';
import Shop from './product/shop';
import About from './about/about';
import Blog from './blog/blog';
import Cart from './cart/cart';
import Contect from './contect/contect';
import Login from './authentication/login';
import Signup from './authentication/signup';
import Product_detail from './product/productdetail';
import Post_detail from './blog/postdetail';
import Dashbord from './dashbord/dashbord';
import { useSelector } from 'react-redux';
import Resetlink from './authentication/sendresetlink';
import Resetpassword from './authentication/resetpassword';
import Checkout from './checkout/checkout';
function App(props) {
  const { access_token } = useSelector(state => state.auth)
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='postdetail' element={<Post_detail src='./images/blog/b6.jpg' heading='The Cotton-Jersey Zip-Up Hoodie' />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contect' element={<Contect />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={!access_token ? <Login /> : <Navigate to='/dashbord' />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/resetpassword' element={<Resetlink />} />
          <Route path='/user/reset/:id/:token' element={<Resetpassword />} />
          <Route path='/product_detail/:id' element={<Product_detail />} />
          <Route path='/dashbord' element={!access_token ? <Login /> : <Dashbord />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
