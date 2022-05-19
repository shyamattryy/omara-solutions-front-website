
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import Image from "next/image";
function SecondSlider(){
    return(
<div>
<Carousel  autoPlay={true} infiniteLoop={true} interval={4000} slidesToScroll={1} className="homeSlider secSlider" >
                    <div className="slider-image" style={{
                    backgroundImage:"url('/images/background/cp-homepage-thumb.png')",
                    width: "100%",backgroundRepeat: "no-repeat",backgroundSize: "cover" }} >
                        {/* <div className="bg"><Image src="/images/background/sec1.png" alt="image1" width={1200} height={500}/></div> */}
                        <div className="container text slider-border">
                            <div className="slider-texto">
                                <h5>Dedicated Teams</h5>
                                <p>Our expertise teams are creating breakthroughs for <br />our clients, and partners.</p>
                                <a href="#">Know More</a>
                            </div>
                        </div>
                    </div>
                  <div className="slider-image" style={{
                   backgroundImage:"url('/images/background/rohit-homepage-thumb.png')",
                    width: "100%",
                    
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                  }}>
                      {/* <div className="bg"><Image src="https://files.techmahindra.com/static/img/smart-blockchain-thumb.jpg" alt="image1" width={1200} height={500}/></div> */}
                      <div className="container text slider-border">
                          <div className="slider-texto">
                              <h5>24/7 communication</h5>
                              <p>We are always there for you. Let’s talk today and <br />see what we can do for you</p>
                              <a href="#">Know More</a>
                          </div>
                      </div>
  
                  </div>
                  <div className="slider-image" style={{
                   backgroundImage:"url('/images/background/sec2.png')",
                    width: "100%",
                    
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                  }}>
                      {/* <div className="bg"><Image src="/images/background/sec3.png" alt="image1" width={1200} height={500}/></div> */}
                      <div className="container text slider-border">
                          <div className="slider-texto">
                              <h5>Brainstorming Ideas</h5>
                              <p>We build & strategize solutions based on your vision<br /> that can be the best ideation</p>
                              <a href="#">Know More</a>
                          </div>
                      </div>
  
                  </div>
                  <div className="slider-image" style={{
                   backgroundImage:"url('/images/background/sec1.png')",
                    width: "100%",
                    
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                  }}>
                      {/* <div className="bg"><Image src="/images/background/jagdish-homepage-thumb.png" alt="image1" width={1200} height={500}/></div> */}
                      <div className="container text slider-border">
                          <div className="slider-texto">
                              <h5>Compliance & Security</h5>
                              <p>ISO Certified 9001:2015 Quality Management Systems<br /> ICI/6885801/21</p>
                              <a href="#">Know More</a>
                          </div>
                      </div>
  
                  </div>
                  
              </Carousel>
</div>
    )
}
export default SecondSlider;