import { useEffect } from "react";
import Header2 from "./../layout/header-2";
import Footer from "./../layout/footer";
import Link from "next/link";
//import Styles from "../scss/abstract/thought-leadership.css";

// import "../css/skin/skin-1.css";

function hire_developers() {
    return (
        <>
            <Header2 />

{/* <!-- Banner  --> 
<div className="container-fluid box-full" >
    <img src="/intelligentautomationimages/banner.jpg" alt="banner" />

    <div className="bannertextbox">
        <p className="text-block1">#UNLOCKEXPERIENCES WITH AI</p>
        <p className="text-block">Deliver superior experiences through intelligent automation, with AQT</p>
    </div>
</div>



<h2 className="text-center  padding-section">OUR APPROACH</h2>*/}

<section>
    <div className="image-section1">
        <div className="container">
            <h1 className="banner-title">#UNLOCKEXPERIENCES WITH AI </h1>
            <p>Deliver superior experiences through intelligent automation, with AQT</p>
        </div>
    </div>
</section>
{/* <!-- Section 1 Starts --> */}
<section className="section-box section44">
    <div className="container">
        <div className="row">
            <div className="col-6">
                <h4 className="section-box-top"> Experiences Begin with Smarter Processes</h4>
                <p className="paragraph-section">Hire dedicated developers & programmers team, passionate about taking your business ideas to the next level exceeding the quality benchmark. We Are An Expert Software Development Company And Use The Best Technologies And Platforms To Deliver High-Quality Products. A reliable and robust backend forms the backbone of any website or application. Our developers have extensive knowledge and experience to develop strong and highly secure backend support for your business solution. Our dedicated developers can effortlessly manage any size of user’s data or the number of users without an error. Our expert backend developers can ensure a safe, trustworthy, and sound backend for your mobile app or website. </p>
                {/* For Button*/}
                <div className="slidertextblock">
                    {/* <a href="#" ><span>Button</span><i></i></a> */}
                    <a href="#" ><span>Know More</span><i></i></a>
                </div>

            </div>
            <div className="col-6 section1" >
                <img src="/intelligentautomationimages/section1.jpg" alt="section1" />
            </div>

        </div>
    </div>
</section>

{/* <!-- Section 2 Starts --> */}
<section className="section-box section45">
    <div className="container">
        <div className="row">
            <div className="col-6 section2-img ">
                <img src="/intelligentautomationimages/section2.jpg" alt="section2" />
            </div>
            <div className="col-6">
                <div className="section-text">
                    <h4> Experiences Begin with Smarter Processes</h4>
                    <p className="paragraph-section">The backend developers are well-versed in writing accurate, high-quality, and complicated codes to ensure smooth functioning. Hire our backend developers with flexible engagement models, pricing models, and work with them at your time zones. Bring your website or mobile app to life with a robust backend developed by our backend developers using the latest technologies and ensuring security. We, OMRA Solutions are one of the best companies to hire developers in Delhi/NCR. We are working globally and are excited to shake hands with you!</p>
                    {/* For Button*/}
                    <div className="slidertextblock">
                        {/* <a href="#" ><span>Button</span><i></i></a> */}
                        <a href="#" ><span>Know More</span><i></i></a>
                    </div>
                </div>
            </div>


        </div>
    </div>
</section>

{/* <!-- OUR INSIGHT Starts --> */}
<h2 className="text-center">OUR INSIGHT</h2>


<div className="container section46">
    <div className="row">
        <div className="col-3">
            <img src="/intelligentautomationimages/demo.png" alt="demo" className="image-section-box" />
            <div className="section-text strong-text">Automate &amp; Optimize your IT Operations</div>
            <p className="paragraph-section">TACTiX platform from AQT enables automation of processes in order to reduce manual effort and accelerate efficiency</p>
        </div>
        <div className="col-3 ">
            <img src="/intelligentautomationimages/demo.png" alt="demo" className="image-section-box" />
            <div className="section-text strong-text">Automate &amp; Optimize your IT Operations</div>
            <p className="paragraph-section">TACTiX platform from AQT enables automation of processes in order to reduce manual effort and accelerate efficiency</p>
        </div>
        <div className="col-3 ">
            <img src="/intelligentautomationimages/demo.png" alt="demo" className="image-section-box" />
            <div className="section-text strong-text">Automate &amp; Optimize your IT Operations</div>
            <p className="paragraph-section">TACTiX platform from AQT enables automation of processes in order to reduce manual effort and accelerate efficiency</p>
        </div>
        <div className="col-3 ">
            <img src="/intelligentautomationimages/demo.png" alt="demo" className="image-section-box" />
            <div className="section-text strong-text">Automate &amp; Optimize your IT Operations</div>
            <p className="paragraph-section">TACTiX platform from AQT enables automation of processes in order to reduce manual effort and accelerate efficiency</p>
        </div>

    </div>
</div>


{/* <!-- #UNLOCKEXPERIENCES FOR A CONNECTED FUTURE  Starts --> */}
<section className="section-box section47">
    <div className="container">
        <div className="row">
            <div className="col-6">
                <h3 > Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
                <p className="paragraph-section"> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>


                {/* For Button*/}
                <div className="slidertextblock">
                    {/* <a href="#" ><span>Button</span><i></i></a> */}
                    <a href="#" ><span>Know More</span><i></i></a>
                </div>


            </div>
            <div className="col-6 section1">

                <img src="/intelligentautomationimages/section3.jpg" alt="section3" />
            </div>


        </div>
    </div>
</section>



<Footer />
        </>
    );
}
export default hire_developers;


