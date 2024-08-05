import Topbar from "../../utilities/topbar/Topbar";
import './Solutions.css'
function Solutions() {
    return (
        <>
            <Topbar />

            <div className="hero-bg mb-4">
                <div className="hero-map-bg">
                    <div className="container pt-5">
                        <div className="hero-content text-black pt-5">
                            <div className="d-flex gap-2 pt-5 mt-5 align-items-center">
                                <span className="sora">Home</span>
                                <ul className="d-inline mb-2">
                                    <li className="sora text-muted">Solutions</li>
                                </ul>
                            </div>
                        </div>
                        <h2 className="Sectional-heading mt-4 pt-3 ms-2 syne">Internet of Things (IoT) Solutions</h2>
                    </div>
                </div>
                <div className="bg-web-hero-img"></div>
            </div>

            <div className="container mt-5 pt-lg-4 mb-4">
                <h3 className="text-center mb-4">Transforming the Future with <span className="text-orange"> Smart Connectivity</span></h3>
                <div className="row justify-content-center">
                    <div className="col-lg-10 text-muted font-14 mx-auto">
                        At Mitisha Softech Private Limited, we are at the forefront of the Internet of Things (IoT) revolution. Our IoT solutions are designed to seamlessly connect devices, systems, and people, providing smarter, more efficient ways to manage operations, enhance customer experiences, and drive innovation.
                    </div>
                    <div className="divider mt-5 pt-lg-3 mb-4">
                        <div className="small-hr-wrapper">
                            <hr className="small-hr" />
                            <hr className="full-hr" />
                        </div>
                    </div>

                </div>
            </div>
            <div className="container mt-4">
                <h3 className="text-center mb-4">End-to-End <span className="text-orange"> IoT Software</span> Development </h3>

                <div className="row justify-content-between">

                    <div className="col-lg-4 mt-3 text-center  p-3">
                        <div className="border-pricing p-4">
                            <div className="d-flex justify-content-center">
                                <div className="icon-container mt-4 mb-4 ">
                                    <div className="help-icon ms-2 sora">
                                        <span className='service-id'>01</span>
                                    </div>
                                </div>
                            </div>

                            <h5 className="syne text-center mt-3 mb-3">Custom IoT Development </h5>
                            <p className="text-muted">
                                Our skilled developers design and build customized IoT solutions, from smart home systems to industrial automation and healthcare monitoring, ensuring robust, scalable applications tailored to your specific needs.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-4 mt-3 text-center  p-3">
                        <div className="border-pricing p-4">
                            <div className="d-flex justify-content-center">
                                <div className="icon-container mt-4 mb-4 ">
                                    <div className="help-icon ms-2 sora">
                                        <span className='service-id'>02</span>
                                    </div>
                                </div>
                            </div>

                            <h5 className="syne text-center mt-3 mb-3">IoT Cloud & Edge Computing </h5>
                            <p className="text-muted">
                                Our cloud and edge computing services enhance IoT efficiency and scalability by leveraging AWS IoT, and Google Cloud IoT. We provide comprehensive data management, advanced analytics, real-time insights, and reduced latency.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-3 text-center  p-3">
                        <div className="border-pricing p-4">
                            <div className="d-flex justify-content-center">
                                <div className="icon-container mt-4 mb-4 ">
                                    <div className="help-icon ms-2 sora">
                                        <span className='service-id'>03</span>
                                    </div>
                                </div>
                            </div>

                            <h5 className="syne text-center mt-3 mb-3">IoT Security Solutions
                            </h5>
                            <p className="text-muted">
                                Security is crucial in IoT. Our solutions safeguard your ecosystem with robust encryption, secure authentication, and regular firmware updates, protecting data and devices from potential threats and vulnerabilities.
                            </p>
                        </div>
                    </div>

                </div>

            </div>


            <div className="container mt-5 mb-5 pb-lg-5 pt-lg-4">
                {/* ===================contetn - image -================= */}

                <div className="row mt-3 justify-content-bwtween">
                    <div className="col-lg-6 mt-3 col-md-6 d-flex justify-content-center align-items-center">
                        <div className="row">
                            <div className="col-lg-10 mx-auto">
                            <div className="solution-content">
                            <h4 className="syne">Smarthome Technology</h4>
                            <p className="text-muted mt-4 me-lg-5">
                                Smart home technology integrates devices for automated control, enhancing convenience, security, and energy efficiency through seamless connectivity and intelligent systems.
                            </p>
                        </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 mt-3 d-flex justify-content-center align-items-center">
                        <div className="solution-img-container why-choose-us-img">
                            <img src="https://itsulu-react.netlify.app/img/photo/16.jpg" alt="home automation solution" className="solution-img" />
                        </div>
                    </div>

                </div>

                {/* =================== image-contetn  -================= */}

                <div className="row mt-5 justify-content-bwtween">

                    <div className="col-lg-6 col-md-6 mt-3 d-flex justify-content-center align-items-center">
                        <div className="solution-img-container why-choose-us-img-right">
                            <img src="https://prd-webrepository.firabarcelona.com/wp-content/uploads/sites/9/2019/07/08132310/healthcare-iot-734x340.png" alt="home automation solution" className="solution-img" />
                        </div>
                    </div>
                    <div className="col-lg-6 mt-3 col-md-6 d-flex justify-content-center align-items-center">
                       <div className="row">
                        <div className="col-md-10 mx-auto">
                        <div className="solution-content">
                            <h4 className="syne">Medical IoT</h4>
                            <p className="text-muted mt-4 me-lg-5">
                                Medical IoT connects devices for real-time health monitoring, improving patient care, diagnostics, and treatment through continuous data collection and analysis.
                            </p>
                        </div>
                        </div>
                       </div>
                    </div>
                </div>

                {/* ===================contetn - image -================= */}

                <div className="row mt-5 justify-content-bwtween">
                    <div className="col-lg-6 mt-3 col-md-6 d-flex justify-content-center align-items-center">
                        <div className="row">
                            <div className="col-md-10 mx-auto">
                            <div className="solution-content">
                            <h4 className="syne">Apps For Wearables</h4>
                            <p className="text-muted mt-4 me-lg-5">
                                Apps for wearables enhance functionality by tracking fitness, health metrics, and notifications, providing users with actionable insights and personalized experiences directly on their wearable devices.
                            </p>
                        </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 mt-3 d-flex justify-content-center align-items-center">
                        <div className="solution-img-container why-choose-us-img">
                            <img src="https://itsulu-react.netlify.app/img/photo/18.jpg" alt="home automation solution" className="solution-img" />
                        </div>
                    </div>

                </div>
                {/* =================== image-contetn  -================= */}

                <div className="row mt-5 justify-content-bwtween">

                    <div className="col-lg-6 col-md-6 mt-3 d-flex justify-content-center align-items-center">
                        <div className="solution-img-container why-choose-us-img-right">
                            <img src="https://itsulu-react.netlify.app/img/photo/19.jpg" alt="home automation solution" className="solution-img" />
                        </div>
                    </div>
                    <div className="col-lg-6 mt-3 col-md-6 d-flex justify-content-center align-items-center">
                        <div className="row">
                            <div className="col-md-10 mx-auto">
                            <div className="solution-content">
                            <h4 className="syne">Industrial IoT Solutions</h4>
                            <p className="text-muted mt-4 ">

                                Industrial IoT solutions optimize operations through smart sensors and real-time data analytics, enhancing efficiency, predictive maintenance, and automation in manufacturing and industrial environments.
                            </p>
                        </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>




            <div className="container mb-5 mt-4">
                <h3 className="text-center mb-4">Industry  <span className="text-orange"> Specific IoT</span> Development </h3>

                <div className="row justify-content-between">

                    <div className="col-lg-4 mt-3 text-center  p-3">
                        <div className="border-pricing p-4">
                            <div className="d-flex justify-content-center">
                                <div className="icon-container mt-4 mb-4 ">
                                    <div className="help-icon ms-2 sora">
                                        <span className='service-id'>01</span>
                                    </div>
                                </div>
                            </div>

                            <h5 className="syne text-center mt-3 mb-3">IoT Consulting & Strategy </h5>
                            <p className="text-muted">
                                We assist businesses in defining IoT goals, creating strategic roadmaps, and assessing implementation feasibility. Our expert consultants offer insights into the latest trends and technologies, ensuring your IoT strategy aligns with business objectives.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-4 mt-3 text-center  p-3">
                        <div className="border-pricing p-4">
                            <div className="d-flex justify-content-center">
                                <div className="icon-container mt-4 mb-4 ">
                                    <div className="help-icon ms-2 sora">
                                        <span className='service-id'>02</span>
                                    </div>
                                </div>
                            </div>

                            <h5 className="syne text-center mt-3 mb-3">IoT Data Analytics & Visualization </h5>
                            <p className="text-muted">
                                Harness the power of data with our advanced analytics and visualization tools. We transform raw data from IoT devices into actionable insights, enabling informed decisions, optimizing operations, and predicting future trends effectively.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-3 text-center  p-3">
                        <div className="border-pricing p-4">
                            <div className="d-flex justify-content-center">
                                <div className="icon-container mt-4 mb-4 ">
                                    <div className="help-icon ms-2 sora">
                                        <span className='service-id'>03</span>
                                    </div>
                                </div>
                            </div>

                            <h5 className="syne text-center mt-3 mb-3">Device Integration
                            </h5>
                            <p className="text-muted">
                                We integrate IoT devices and develop firmware for  communication and interoperability. Our solutions include sensor integration, actuator control, and real-time data processing, ensuring  device functionality within the IoT ecosystem.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Solutions
