import { IoArrowForward } from "react-icons/io5";

export default function CTA() {
    return (
        <section className="section cta" aria-label="work with me">
            <div className="container">

                <h2 className="title h2 section-title text-center">
                    {"Let's Work Together On Your Next Project!"}
                </h2>

                <a href="#" className="btn btn:hover">
                    <span className="span">Hire Me Now</span>
                    
                    <IoArrowForward className="ion-icon" aria-hidden="true" />
                </a>

            </div>
        </section>
    )
}