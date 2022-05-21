import Link from 'next/link';

function Footer() {
  return (
    <>
      {/* <!-- Footer --> */}
    <footer className="site-footer style-1" id="footer" style={{"background":"linear-gradient(to right, #e62222, #e62222, #ef6d35, #ef6d35, #ef6d35)"}}>
		<div className="footer-top">
            <div className="container">
				<div className="footer-info wow fadeIn" data-wow-duration="2s" data-wow-delay="0.8s">
					<div className="row">
						
						<div class="col-md-8">
                        <div class="footer-title1">
                        Lorem Ipsum
                            <br/>Lorem Ipsum
                        </div>
                        <div class="footer-txt-1">
                        OMRASOLUTIONS OMRASOLUTIONS
                        </div>
                        {/* <a href="#" class="linkButtun-white"><span>Know More</span></a> */}
                        <div className="slidertextblock">  <a href="#" ><span>Know More</span><i></i></a>
                                </div>
                    </div>
					<div class="col-md-4 float-r1-c2">
                        <div class="ftt-col2-title">
                        Lorem Ipsum
                        </div>
                        <div class="fttr-img">
                            <div class="enerrg clssSavings">98.89</div>
                            <div class="kwkw">kW</div>
                        </div>
                        <div class="footerr-subtext">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                    </div>
					</div>
					<div className="row align-items-center ftr-logo">
					<a href=""><img src="../../images/cropped-Omra_Branding_logo.png" alt="image1"/></a>
					</div>
					<div className="row">
						
						<div class="col-md-6">
					
                        <div class="footer-txt-1">
						Copyright © 2021 Oara Solutions. All rights reserved.
                        </div>
                     
                    </div>
					<div class="col-md-6">
					<div class="socail">
                        <a target="_blank" class="fa fa-facebook" aria-hidden="true" href="https://www.facebook.com"></a>
                        <a target="_blank" class="fa fa-twitter" aria-hidden="true" href="https://twitter.com"></a>
                        <a target="_blank" class="fa fa-linkedin" aria-hidden="true" href="https://www.linkedin.com"></a>
                        <a target="_blank" class="fa fa-youtube-play" aria-hidden="true" href="https://www.youtube.com"></a>
                        <a target="_blank" class="fa fa-instagram" aria-hidden="true" href="https://www.instagram.com"></a>
                    </div>
					<div class="footer-terms">
                        <a href="#">Terms of Use</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#" target="_blank">Cookie Policy</a>
                    </div>
                       
                       
                    </div>
					</div>
				</div>

            </div>
        </div>
        {/* <!-- footer bottom part --> */}
        {/* <div className="footer-bottom wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center"> 
						<span className="copyright-text">Copyright © 2021 <a href="https://dexignzone.com/" target="_blank">DexignZone</a>. All rights reserved.</span> 
					</div>
                </div>
            </div>
        </div> */}
    </footer>
    {/* <!-- Footer End --> */}
    </>
  )
}

export default Footer;