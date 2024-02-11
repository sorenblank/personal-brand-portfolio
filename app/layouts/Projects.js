import Img from "@/app/components/Image";
import { IoArrowForward } from "react-icons/io5";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Projects() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768, // this means below 768px viewport width
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    
    return (
        <section className="section project" aria-label="my latest projects" id="project">

            <Slider {...settings}>

                <li className="slider-item">
                    <div className="project-card text-center">

                        <div className="card-banner img-holder has-before" >
                            <Img src="project-1.jpg" width="1000" height="763" loading="lazy"
                                alt="Project poster: Creative & experienced digital design studio" className="img-cover" />

                            <a href="#" className="btn btn:hover">
                                <span className="span">Project Details</span>
                                
                                <IoArrowForward className="ion-icon" aria-hidden="true" />
                            </a>
                        </div>

                        <div className="card-content">
                            <p className="card-subtitle">Web, Product</p>

                            <h3 className="title h3">
                                <a href="#" className="card-title">Creative & experienced digital design studio</a>
                            </h3>
                        </div>

                    </div>
                </li>

                <li className="slider-item">
                    <div className="project-card text-center">

                        <div className="card-banner img-holder has-before" >
                            <Img src="project-2.jpg" width="1000" height="763" loading="lazy"
                                alt="Project poster: Front End Development & Maintenance" className="img-cover" />

                            <a href="#" className="btn btn:hover">
                                <span className="span">Project Details</span>

                                <IoArrowForward className="ion-icon" aria-hidden="true" />
                            </a>
                        </div>

                        <div className="card-content">
                            <p className="card-subtitle">Web, Product</p>

                            <h3 className="title h3">
                                <a href="#" className="card-title">Front End Development & Maintenance</a>
                            </h3>
                        </div>

                    </div>
                </li>

                <li className="slider-item">
                    <div className="project-card text-center">

                        <div className="card-banner img-holder has-before" >
                            <Img src="project-3.jpg" width="1000" height="763" loading="lazy"
                                alt="Project poster: Flutter Framework & Warframe Design" className="img-cover" />

                            <a href="#" className="btn btn:hover">
                                <span className="span">Project Details</span>

                                <IoArrowForward className="ion-icon" aria-hidden="true" />
                            </a>
                        </div>

                        <div className="card-content">
                            <p className="card-subtitle">Web, Product</p>

                            <h3 className="title h3">
                                <a href="#" className="card-title">Flutter Framework & Warframe Design</a>
                            </h3>
                        </div>

                    </div>
                </li>

                <li className="slider-item">
                    <div className="project-card text-center">

                        <div className="card-banner img-holder has-before" >
                            <Img src="project-4.jpg" width="1000" height="763" loading="lazy"
                                alt="Project poster: Full Web Development Project With JavaScript" className="img-cover" />

                            <a href="#" className="btn btn:hover">
                                <span className="span">Project Details</span>

                                <IoArrowForward className="ion-icon" aria-hidden="true" />
                            </a>
                        </div>

                        <div className="card-content">
                            <p className="card-subtitle">Web, Product</p>

                            <h3 className="title h3">
                                <a href="#" className="card-title">Full Web Development Project With JavaScript</a>
                            </h3>
                        </div>

                    </div>
                </li>

                <li className="slider-item">
                    <div className="project-card text-center">

                        <div className="card-banner img-holder has-before" >
                            <Img src="project-5.jpg" width="1000" height="763" loading="lazy"
                                alt="Project poster: Cloud Migration & AWS Services" className="img-cover" />

                            <a href="#" className="btn btn:hover">
                                <span className="span">Project Details</span>

                                <IoArrowForward className="ion-icon" aria-hidden="true" />
                            </a>
                        </div>

                        <div className="card-content">
                            <p className="card-subtitle">Web, Product</p>

                            <h3 className="title h3">
                                <a href="#" className="card-title">Cloud Migration & AWS Services</a>
                            </h3>
                        </div>

                    </div>
                </li>

            </Slider>

        </section>
    )
}