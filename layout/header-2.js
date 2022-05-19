import Link from 'next/link';
import { useState } from 'react';
import Image  from 'next/image';
function Header2() {
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState("home");
    return (
        <>
            <header className="site-header mo-left header-transparent">
                {/* <div className="container">
                    <div className="top-bar">
                        <div className="row d-flex justify-content-between align-items-center">
                            <div className="dlab-topbar-left">
                                <ul>
                                    <li>
                                        <i className="la la-envelope"></i>{" "}
                                        info@example.com
                                    </li>
                                    <li>
                                        <i className="la la-phone-volume"></i> +91
                                        987-654-3210
                                    </li>
                                </ul>
                            </div>
                            <div className="dlab-topbar-right">
                                <ul className="dlab-social-icon">
                                    <li>
                                        <a
                                            className="fa fa-facebook"
                                            href="#"
                                        ></a>
                                    </li>
                                    <li>
                                        <a
                                            className="fa fa-instagram"
                                            href="#"
                                        ></a>
                                    </li>
                                    <li>
                                        <a
                                            className="fa fa-twitter"
                                            href="#"
                                        ></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <!-- Main Header --> */}
                <div className="sticky-header main-bar-wraper navbar-expand-lg">
                    <div className="main-bar clearfix ">
                        <div className="container clearfix">
                            {/* <!-- Website Logo --> */}
                            <div className="logo-header mostion logo-dark">
                                <Link href="/">
                                    <a>
                                        <Image width={70} height={70} className="custom-logo-white" src="/images/cropped-Omra_Branding_logo.png" alt="" />
                                        
                                        {/* <Image width={50} height={50} className="custom-logo" src="/images/cropped-Omra_Branding_logo.png" alt="" /> */}
                                    </a>
                                </Link>
                            </div>
                            {/* <!-- Nav Toggle Button --> */}
                            <button
                                className={`navbar-toggler collapsed navicon justify-content-end ${
                                    show ? "open" : ""
                                }`}
                                onClick={() => setShow(!show)}
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            {/* <!-- Extra Nav --> */}
                            <div className="extra-nav">
                                <div className="extra-cell">
                                <Link href="/contact-us-2">
                                        <a className="btn btn-primary rounded-xl gradient shadow">Get A Quote</a>
                                    </Link>
                                </div>
                            </div>
                            <div
                                className={`header-nav navbar-collapse collapse justify-content-end ${
                                    show ? "show" : ""
                                }`}
                                id="navbarNavDropdown"
                            >
                                <div className="logo-header">
                                    <Link href="/">
                                        <a>
                                            <img src="images/logo-2.png" alt="" />
                                        </a>
                                    </Link>
                                </div>

                                <ul className="nav navbar-nav navbar">
                                   
									<li><Link href="/"><a>Services</a></Link><i className="fa fa-chevron-down"></i>
                                    <ul className="sub-menu">
											<li><Link href="/about-us-2"><a>It Development</a></Link></li>
											<li><Link href="/faq-2"><a>Voice Blend Process</a></Link></li>
											<li><Link href="/pricing-table-2"><a>Hire Developers</a></Link></li>
											<li><Link href="/team-2"><a>Resource Management</a></Link></li>
                                            <li><Link href="/coming-soon"><a>E-Commerce Product Uploading</a></Link></li>
                                            <li><Link href="/error-404"><a>Digital Marketing</a></Link></li>
                                            
                                        </ul>
                                    </li>
                                    <li
                                        className={`${
                                            open === "about" ? "open" : ""
                                        }`}
                                    >
                                        <a onClick={() => setOpen("about")}>
                                            <span>Our Products</span>
                                            <i className="fa fa-chevron-down"></i>
                                        </a>
                                        <ul className="sub-menu">
											<li><Link href="/about-us-2"><a>E-Laundry</a></Link></li>
											<li><Link href="/faq-2"><a>Faq</a></Link></li>
											<li><Link href="/pricing-table-2"><a>Pricing Table</a></Link></li>
											<li><Link href="/team-2"><a>Team</a></Link></li>
                                            <li><Link href="/coming-soon"><a>Coming Soon</a></Link></li>
                                            <li><Link href="/error-404"><a>Error 404</a></Link></li>
                                            <li><Link href="/sitedown"><a>Site Down</a></Link></li>
                                        </ul>
                                    </li>
                                    <li><Link href="/about-us-2"><a>About Us</a></Link></li>
									<li className={`${open === "blog" ? "open" : ""}`}><a onClick={() => setOpen("blog")}><span>Blog</span><i className="fa fa-chevron-down"></i></a>
										<ul className="sub-menu">
											<li><Link href="/blog-grid-2"><a>Blog Grid</a></Link></li>
											<li><Link href="/blog-details-2"><a>Blog Details</a></Link></li>
										</ul>
									</li>
									<li><Link href="/contact-us-2"><a>Contact Us</a></Link></li>
									
                                </ul>
                                <div className="dlab-social-icon">
                                    <ul>
                                        <Link href="https://en-gb.facebook.com/">
                                            <a className="fa fa-facebook"></a>
                                        </Link>
                                        <Link href="https://twitter.com/login?lang=en">
                                            <a className="fa fa-twitter"></a>
                                        </Link>
                                        <Link href="https://www.linkedin.com/login">
                                            <a className="fa fa-linkedin"></a>
                                        </Link>
                                        <Link href="https://www.instagram.com/">
                                            <a className="fa fa-instagram"></a>
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Main Header End --> */}
            </header>
        </>
    );
}

export default Header2;
