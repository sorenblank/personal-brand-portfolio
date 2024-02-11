import Img from "@/app/components/Image";
import Link from "next/link";

export default function Service() {

  return (
    <section className="service text-center" aria-label="my services" id="service">
      <div className="container">

        <ul className="service-list">

          <li className="service-item">
            <div className="service-card">

              <div className="card-icon">
                <Img src="service-icon-1.svg" width="80" height="80" loading="lazy"
                  alt="service icon" />
              </div>

              <h3 className="card-title">
                <Link href="#">
                  Web <br />
                  Development
                </Link>
              </h3>

            </div>
          </li>

          <li className="service-item">
            <div className="service-card">

              <div className="card-icon">
                <Img src="service-icon-2.svg" width="80" height="80" loading="lazy"
                  alt="service icon" />
              </div>

              <h3 className="card-title">
                <Link href="#">
                  Digital <br />
                  Marketing
                </Link>
              </h3>

            </div>
          </li>

          <li className="service-item">
            <div className="service-card">

              <div className="card-icon">
                <Img src="service-icon-3.svg" width="80" height="80" loading="lazy"
                  alt="service icon" />
              </div>

              <h3 className="card-title">
                <Link href="#">
                  Graphics <br />
                  Design
                </Link>
              </h3>

            </div>
          </li>

          <li className="service-item">
            <div className="service-card">

              <div className="card-icon">
                <Img src="service-icon-4.svg" width="80" height="80" loading="lazy"
                  alt="service icon" />
              </div>

              <h3 className="card-title">
                <Link href="#">
                  Mobile <br />
                  Application
                </Link>
              </h3>

            </div>
          </li>

        </ul>

      </div>
    </section>
  )
}