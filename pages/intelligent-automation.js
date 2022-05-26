import { useEffect } from "react";
import Header2 from "./../layout/header-2";
import Footer from "./../layout/footer";
import Link from "next/link";
// import "../css/skin/skin-1.css";

function intelligent_automation() {
    return (
        <>
            <Header2 />

            {/* <!-- Banner  --> */}
            <div className="container-fluid box-full" >
                <img src="/intelligentautomationimages/banner.jpg" alt="banner" />
                <div className="text-block">
    <h2>#UNLOCKEXPERIENCES WITH AI</h2>
    <p>Deliver superior experiences through intelligent automation, with AQT</p>
  </div>
            </div>

            <Link href="#" >sahil  Mishra</Link>


            {/* <!-- Section 1 Starts --> */}
            <section className="section-box">
                <div className="container">
                    <div className="row">
                        <div className="col-7">
                            <h2 > Experiences Begin with Smarter Processes</h2>
                            <p>Automation and AI results in increased business efficiency and smart processes; however, the larger picture here is all about the usage of time saved and the insights gained for crafting craft extraordinary experiences – the ones that not only are personalized, but also distinctive enough to keep customers coming back for more.</p>

                            <p>Our vision for automation is all about enabling these experiences through digital work-force and smarter processes, while unleashing a wave of innovation across your enterprise – all by empowering humans to focus more on meaningful, higher-order work.</p>

                            <p>The result? An enterprise that not only innovates more on the inside, but also delivers impressive experiences on the outside.</p>
                        </div>
                        <div className="col-5 section1" >
                            <img src="/intelligentautomationimages/section1.jpg" alt="section1" />
                        </div>

                    </div>
                </div>
            </section>

            {/* <!-- Section 2 Starts --> */}
            <section className="section-box">
                <div className="container">
                    <div className="row">
                        <div className="col-7">
                            <div className="section-text">
                                <h2> Experiences Begin with Smarter Processes</h2>
                                <p>Automation and AI results in increased business efficiency and smart processes; however, the larger picture here is all about the usage of time saved and the insights gained for crafting craft extraordinary experiences – the ones that not only are personalized, but also distinctive enough to keep customers coming back for more.</p>

                                <p>Our vision for automation is all about enabling these experiences through digital work-force and smarter processes, while unleashing a wave of innovation across your enterprise – all by empowering humans to focus more on meaningful, higher-order work.</p>

                                <p>The result? An enterprise that not only innovates more on the inside, but also delivers impressive experiences on the outside.</p>
                            </div></div>
                        <div className="col-5 section1">
                            <img src="/intelligentautomationimages/section2.jpg" alt="section2" />
                        </div>

                    </div>
                </div>
            </section>

            {/* <!-- Use Cases  --> */}

            <h2 className="section-box-left">Use Cases</h2>
            <p className="section-box-left ">Automate, optimize and make business processes and functions across the board smarter, with AQT.
            </p>
            <div className="container">
                <div className="row">
                    <div className="col-3 ">
                        <div className="section-text strong-text">Automate &amp; Optimize your IT Operations</div>
                        <p>TACTiX platform from AQT enables automation of processes in order to reduce manual effort and accelerate efficiency</p>
                    </div>
                    <div className="col-3">
                        <div className="section-text strong-text">Find the Most Optimum Route to Success with ML</div>
                        <p>Machine Learning modules unleash greater productivity &amp; reduce errors by automatically optimizing business functions</p>
                    </div>
                    <div className="col-3">

                        <div className="section-text strong-text">Delight People with AI Powered Chatbots</div>
                        <p>AI powered chatbots built with AQT allow automation of support operations while ensuring user satisfaction</p>
                    </div>
                    <div className="col-3">
                        <div className="section-text strong-text">Enhance Internal  with NLP &amp; ML</div>
                        <p>Machine Learning and Natural Language Processing enable contextual handling of requests &amp; personalized interactions</p>

                    </div>

                </div>
            </div>

            {/* <!-- Shaping the Intelligent Enterprise  --> */}
            <h2 className="section-box-left">Shaping the Intelligent Enterprise
            </h2>
            <p className="section-box-left">With an extensive assembly of state-of-the-art tools, technologies, and partnerships, AQT is designed for promoting increased automation encompassing all our solutions and service line, together with a firm focus on open-source ensuring minimal total cost of ownership.
            </p>
            <div className="container ">
                <div className="row">
                    <div className="col-4 box-section ">
                        <h4>Lorem</h4>
                        <div className="strong-text">Automate &amp; Optimize your IT Operations</div>
                        <p>Delight People with AI Powered Chatbots
                            AI powered chatbots built with AQT allow automation of support operations while ensuring user satisfaction</p>
                        {/* For Button*/}
                        <div className="slidertextblock">
                            {/* <a href="#" ><span>Button</span><i></i></a> */}
                            <a href="#" ><span>Know More</span><i></i></a>
                        </div>
                    </div>
                    <div className="col-4 box-section">
                        <h4>Lorem</h4>
                        <div className="strong-text">Find the Most Optimum Route to Successi</div>
                        <p>Delight People with AI Powered Chatbots
                            AI powered chatbots built with AQT allow automation of support operations while ensuring user satisfaction</p>
                        {/* For Button*/}
                        <div className="slidertextblock">
                            {/* <a href="#" ><span>Button</span><i></i></a> */}
                            <a href="#" ><span>Know More</span><i></i></a>
                        </div></div>
                    <div className="col-4 box-section">
                        <h4>Lorem</h4>

                        <div className="strong-text">Delight People with AI Powered Chatbots</div>
                        <p>AI powered chatbots built with AQT allow automation of support operations while ensuring user satisfaction</p>
                    </div>
                    <div className="col-4 box-section">
                        <h4>Lorem</h4>
                        <div className="strong-text">Enhance Internal Communication </div>
                        <p>Machine Learning and Natural Language Processing enable contextual handling of requests &amp; personalized interactions</p>
                        {/* For Button*/}
                        <div className="slidertextblock">
                            {/* <a href="#" ><span>Button</span><i></i></a> */}
                            <a href="#" ><span>Know More</span><i></i></a>
                        </div>
                    </div>
                    <div className="col-4 box-section">
                        <h4>Lorem</h4>
                        <div className="strong-text" >Automate &amp; Optimize your IT Operations</div>
                        <p>TACTiX platform from AQT enables automation of processes in order to reduce manual effort and accelerate efficiency</p>
                    </div>
                    <div className="col-4 box-section">
                        <h4>Lorem</h4>
                        <div className="strong-text">Automate &amp; Optimize your IT Operations</div>
                        <p>TACTiX platform from AQT enables automation of processes in order to reduce manual effort and accelerate efficiency</p>
                        {/* For Button*/}
                        <div className="slidertextblock">
                            {/* <a href="#" ><span>Button</span><i></i></a> */}
                            <a href="#" ><span>Know More</span><i></i></a>
                        </div> </div>
                    <div className="col-4 box-section">
                        <h4>Lorem</h4>
                        <div className="strong-text">Automate &amp; Optimize your IT Operations</div>
                        <p>TACTiX platform from AQT enables automation of processes in order to reduce manual effort and accelerate efficiency</p>
                        {/* For Button*/}
                        <div className="slidertextblock">
                            {/* <a href="#" ><span>Button</span><i></i></a> */}
                            <a href="#" ><span>Know More</span><i></i></a>
                        </div>
                    </div>
                    <div className="col-4 box-section">
                        <h4>Lorem</h4>
                        <div className="strong-text">Automate &amp; Optimize your IT Operations</div>
                        <p>TACTiX platform from AQT enables automation of processes in order to reduce manual effort and accelerate efficiency</p>
                    </div>
                </div>
            </div>

            {/* <!-- #UNLOCKEXPERIENCES FOR A CONNECTED FUTURE  Starts --> */}
            <section className="section-box">
                <div className="container">
                    <div className="row">
                        <div className="col-7">
                            <h2 > Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                            <ul className="section-text">
                                <li> Connecting the World with Networks of the Future</li>
                                <li>Designing Experiences with Internet of Things</li>
                                <li>Driving Business Velocity with DevOps</li>
                                <li>Creating Convergent Customer Experiences</li>
                            </ul>

                            {/* For Button*/}
                            <div className="slidertextblock">
                                {/* <a href="#" ><span>Button</span><i></i></a> */}
                                <a href="#" ><span>Know More</span><i></i></a>
                            </div>


                        </div>
                        <div className="col-5 section1">
                            <img src="/intelligentautomationimages/section3.jpg" alt="section3" />
                        </div>


                    </div>
                </div>
            </section>
            {/* <!-- What will the world look like Starts --> */}



            <div className="container">
                <h2 className="section-box">What will the world look like</h2>

                <img src="/intelligentautomationimages/inthefuture-logo.png" alt="inthefuture-logo" />


                <p>Partnership with The Wall Street Journal</p>
                <div className="section-box">
                    {/* For Button*/}
                    <div className="slidertextblock">
                        {/* <a href="#" ><span>Button</span><i></i></a> */}
                        <a href="#" ><span>Know More</span><i></i></a>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
}
export default intelligent_automation;


