import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Projects.css';
import project1 from '/project-1.jpeg'
import project2 from '/project-2.jpeg'

function Projects() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,  // We will use custom arrows
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const sliderRef = React.useRef(null);

    const next = () => {
        sliderRef.current.slickNext();
    };

    const previous = () => {
        sliderRef.current.slickPrev();
    };

    return (
        <>
            <div className="container  mb-2">
                <div className="small-hr-wrapper">
                    <hr className="small-hr" />
                    <hr className="full-hr" />
                    <hr className="small-hr" />
                </div>
                <div className="help-section">
                    <div className="bg-web-project-img"></div>
                    <div className="container mt-5 pt-3">
                        <div className="mt-3 pt-3 ">
                            <div className="slider-header flex-wrap">
                                <h2 className='Sectional-heading'>Latest Projects</h2>
                                <div className="d-flex gap-5 justify-content-center">
                                    <button className="slider-prev syne" onClick={previous}> <span className="slider-arrow me-2"> &#8592;</span> Previous</button>
                                    <button className="slider-next syne" onClick={next}> Next <span className="slider-arrow ms-2"> &#8594;</span> </button>
                                </div>
                            </div>
                            <div className="container mt-3 pt-3">
                                <div className="car_brand">
                                    <Slider {...settings} ref={sliderRef}>
                                        <div className="project-container">

                                            <img src={project1} alt="car logo" className="project-img" />
                                            <div className="product-container-content d-flex justify-content-between gap-5 mt-4 ">
                                                <div className="product-container-tittle syne">
                                                NextGen Auto Solutions
                                                    <div className="mt-2 by-name">
                                                        by: <span className="text-orange">Ajay</span>
                                                    </div>
                                                </div>
                                                <div className="product-container-text text-muted me-2">Developed a WordPress website for Nextgen Auto Solutions, specializing in comprehensive car service solutions. </div>
                                            </div>
                                        </div>

                                        <div className="project-container">
                                            <img src={project2} alt="car logo" className="project-img" />
                                            <div className="product-container-content d-flex  justify-content-between gap-5 mt-4">
                                                <div className="product-container-tittle syne">
                                                    Ds Graphics
                                                    <div className="mt-2 by-name">
                                                        by: <span className="text-orange">Monu</span>
                                                    </div>
                                                </div>
                                                <div className="product-container-text text-muted me-2">Created an HTML, CSS, and JavaScript website for DS Graphics, offering advanced printing solutions and services. </div>
                                            </div>
                                        </div>
                                        <div className="project-container">
                                            <img src="https://media.licdn.com/dms/image/D5622AQEONcXT0gVA5w/feedshare-shrink_800/0/1720189403396?e=2147483647&v=beta&t=ng87p1d6SOWjbOdIZeDVnZcQlfpSqMW0U_ifmifppls" alt="car logo" className="project-img" />
                                            <div className="product-container-content d-flex justify-content-between gap-5 mt-4">
                                                <div className="product-container-tittle syne">
                                                    Easy & Most Powerful Server Platform
                                                    <div className="mt-2 by-name">
                                                        by: <span className="text-orange">Jane Meldrum</span>
                                                    </div>
                                                </div>
                                                <div className="product-container-text text-muted me-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, voluptates! Lorem ipsum dolor sit amet </div>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;
