import Banner from "../banners/banner"
import Feachers from "./feachers"
const About = () => {
    return (
        <>
            <Banner src="url(./images/about/banner.png)" h1='#KnowUs' p='read more about us!' op={false} />
            <div className="container" id="main_about">
                <div className="row">
                    <div className="col-md-6">
                        <img src="./images/about/a6.jpg" alt="" />
                    </div>
                    <div className="col-md-6 d-flex flex-column align-items-start justify-content-center">
                        <h1>Who we are ?</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse quia dicta recusandae pariatur quaerat
                            quis repudiandae hic et molestias deleniti. Modi provident saepe consequuntur commodi praesentium
                            repellendus possimus illum ducimus! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Suscipit molestias non animi consequatur voluptates tempora earum hic! Atque, nemo delectus?</p>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore molestiae hic minima voluptatibus
                            officiis deleniti, quaerat veritatis. Vitae, corporis a.</span><br />
                        <marquee behavior="scroll" direction="left">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
                            ut, maiores nam officia magnam odit sunt repudiandae harum architecto suscipit assumenda!
                            Perferendis sequi impedit rerum eligendi ipsa quibusdam, temporibus non.</marquee>
                    </div>
                </div>
            </div>
            <div className="container mt-5 app-vidio">
                <div className="row text-center mt-5">
                    <span>Download Our <a href="https://play.google.com/store/search?q=ff&c=apps&hl=en-IN">APP</a></span>
                </div>
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <video src="./images/about/1.mp4" autoplay width="100%" className="my-4" id="vidio" loop></video>
                    </div>
                </div>
            </div>
            <div className="container text-center my-5 featcher" id="banner-items">
                <div className="row">
                    <Feachers head1='Free Shopping' head2='Online Order' src1="./images/f1.png" src2="./images/f2.png" />
                    <Feachers head1='Save Money' head2='Promoshions' src1="./images/f3.png" src2="./images/f4.png" />
                    <Feachers head1='Happy sale' head2='24/7 support' src1="./images/f5.png" src2="./images/f6.png" />
                </div>
            </div>
        </>
    )
}
export default About