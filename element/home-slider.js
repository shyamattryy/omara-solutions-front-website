
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";
function HomeSlider() {
    return (
        <div>
            <Carousel className="homeSlidr" autoPlay={true} infiniteLoop={true} interval={5000}>
                <div className="slider-image1"
                    style={{
                        backgroundImage: "url('/images/sliderimages/butterfly.jpg')",
                        width: "100%",

                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover"
                    }}
                >
                    {/* <div className="bg"><Image src="/images/sliderimages/butterfly.jpg" alt="image1" width={1200} height={500}/></div> */}
                    <div className="container text">
                        <div className="row">
                            <div className="col-md-6">
                            <div className="slidertextblock"> 
                                    <h2>Enabling Business Transformation</h2>
                                    <p>To be agile, intuitive, and transparent to stay competitive, through our radical Solutions</p>
                                    {/* <a href="#" ><span>Button</span><i></i></a> */}
                                     <a href="#" ><span>Know More</span><i></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="slider-image1" style={{
                    backgroundImage: "url('/images/sliderimages/3.jpg')",
                    width: "100%",

                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}>
                    {/* <div className="bg"><Image src="/images/sliderimages/3.jpg" alt="image1" width={1200} height={500}/></div> */}
                    <div className="container text">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="slidertextblock">
                                    <h2>Our Partner Eco System</h2>
                                    <p>To Provide our Clients with the best to scale their business with our cutting-edge ideas</p>
                                    <a href="#" ><span>Know More</span><i></i></a>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="slider-image1" style={{
                    backgroundImage: "url('/images/sliderimages/24.jpg')",
                    width: "100%",

                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}>
                    {/* <div className="bg"><Image src="/images/sliderimages/24.jpg" alt="image1" width={1200} height={500}/></div> */}
                    <div className="container text">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="slidertextblock">
                                    <h2>A Global Leader in Outsourced B2B & B2C Sales</h2>
                                    <p>To deliver the best run, in Sales & Marketing programs with our appropriate sales methodologies</p>
                                    <a href="#" ><span>Know More</span><i></i></a>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="slider-image1" style={{
                    backgroundImage: "url('/images/sliderimages/eye.jpg')",
                    width: "100%",

                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}>
                    {/* <div className="bg"><Image src="/images/sliderimages/eye.jpg" alt="image1" width={1200} height={500}/></div> */}
                    <div className="container text">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="slidertextblock">
                                    <h2>Lets Help Technology, to Navigate Your Next</h2>
                                    <p>We can suggest the robust & relevant technology that can bring your business to a supreme level
                                    </p>
                                    <a href="#" ><span>Know More</span><i></i></a>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </Carousel>
        </div>
    )
}
export default HomeSlider;