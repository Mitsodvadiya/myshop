import Banner from "../banners/banner";
import { useState } from "react";
import Testinomial from "./testinomial"
const Contect = () => {
    const [testinomial,settestinomial] = useState([
        {
            src:'./images/pe5.jpg',
            t_name:'Meet Sodvadiya',
            work:'Owner',
            phone:'7778061680',
            email:'meet@gmail.com'
        },
        {
            src:'./images/pe4.avif',
            t_name:'Keyur Mangroliya',
            work:'builder',
            phone:'7328750825',
            email:'keyur@gmail.com'
        },
        {
            src:'./images/pe1.jpg',
            t_name:'Kenil SSodvadiya',
            work:'seller',
            phone:'7247377141',
            email:'kenil@gmail.com'
        }
    ])
    return (
        <>
            <Banner src="url(./images/about/banner.png)" h1="#Let's Talk" p="LEAVE A MESSAGE.We like to hear From You !" op={false} />
            <div className="container my-5" id="contact">
                <div className="row">
                    <div className="col-md-6">
                        <span>GET IN TOUCH</span><br />
                        <h2>Visit one of our agency locationa or contect us today</h2>
                        <h6>Head Office</h6>
                        <div className="c_inner"><i className="fa-solid fa-location-dot"></i>&nbsp;&nbsp;&nbsp;<span>E-20 Matrushakti
                            Soc,Punagam Surat-395010</span></div>
                        <div className="c_inner"><i
                            className="fa-solid fa-envelope"></i>&nbsp;&nbsp;&nbsp;<span>meetsodvadiya004@gmail.com</span></div>
                        <div className="c_inner"><i className="fa-solid fa-phone"></i>&nbsp;&nbsp;&nbsp;<span>+91 8141310185</span>
                        </div>
                        <div className="c_inner"><i className="fa-regular fa-clock"></i>&nbsp;&nbsp;&nbsp;<span>Monday to Saterday :
                            9:00am to 16:00pm</span></div>
                    </div>
                    <div className="col-md-6" id="map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14878.341789413624!2d72.8503134554199!3d21.208620999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fa0a25ce999%3A0xc430636e4cba4ad2!2z4KSu4KS-4KSk4KWD4KS24KSV4KWN4KSk4KS_IOCkuOCli-CkuOCkvuCkh-Ckn-ClgA!5e0!3m2!1shi!2sin!4v1694167312945!5m2!1shi!2sin"
                            width="600" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
            <div className="container" id="c_form">
                <div className="row">
                    <div className="col-md-8">
                        <form action="">
                            <span>LEAVE A MESSAGE</span>
                            <h3>We Love to hear from you</h3>
                            <input type="text" name="" placeholder="Your Name" className="form-control" id="" /><br />
                            <input type="email" name="" placeholder="E-mail" className="form-control" id="" /><br />
                            <input type="text" name="" placeholder="Subject" className="form-control" id="" /><br />
                            <textarea name="" id="" className="form-control" rows="10" placeholder="Your Message"></textarea><br />
                            <button type="submit" className="btn btn-outline-info">Submit</button>
                        </form>
                    </div>
                    <div className="col-md-4" id="pepol">
                        {testinomial.map((value,index)=>{
                                return <Testinomial src={value.src} t_name={value.t_name} work={value.work} phone={value.phone} email={value.email} key={index} />
                            })}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contect;