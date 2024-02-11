import { IoArrowForward } from "react-icons/io5";
import Img from "@/app/components/Image";

export default function Contact() {
    return (
        <section className="section contact" aria-label="contact me" id="contact">
            <div className="container">

                <h2 className="title h2 section-title">Get In Touch</h2>

                <div className="contact-content">

                    <form action="./index.html" method="post" className="contact-form">

                        <input type="text" name="name" placeholder="Full name" autoComplete="off" required className="input-field" />

                        <input type="email" name="email_address" placeholder="Email address" autoComplete="off" required
                            className="input-field" />

                        <input type="tel" name="phone" placeholder="Phone" autoComplete="off" className="input-field" />

                        <textarea name="message" placeholder="Enter massges" required className="input-field"></textarea>

                        <button type="submit" className="btn btn:hover">
                            <span className="span">Get A Quote</span>

                            <IoArrowForward className="ion-icon" aria-hidden="true" />
                        </button>

                    </form>

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d898.4329239267093!2d-73.91493787358391!3d40.76299026683699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1671529019371!5m2!1sen!2sbd"
                        width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade" className="map"></iframe>

                    <ul className="contact-list">

                        <li className="contact-item">

                            <div className="item-icon">
                                <Img src="contact-icon-1.png" width="50" height="50" loading="lazy"
                                    alt="contact icon" />
                            </div>

                            <div>
                                <span className="title h6">869. 368. 456. 56</span>

                                <span className="title h6">789 (569) 126 35</span>
                            </div>

                        </li>

                        <li className="contact-item">

                            <div className="item-icon">
                                <Img src="contact-icon-2.png" width="50" height="50" loading="lazy"
                                    alt="contact icon" />
                            </div>

                            <div>
                                <address className="title h6">
                                    123, New Lenox, Chicago, IL, 60606 <br /> USA
                                </address>
                            </div>

                        </li>

                        <li className="contact-item">

                            <div className="item-icon">
                                <Img src="contact-icon-3.png" width="50" height="50" loading="lazy"
                                    alt="contact icon" />
                            </div>

                            <div>
                                <span className="title h6">info@sorendev.com</span>

                                <span className="title h6">hire@sorendev.com</span>
                            </div>

                        </li>

                    </ul>

                </div>

            </div>
        </section>
    )
}