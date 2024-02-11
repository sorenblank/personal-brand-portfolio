import Img from "@/app/components/Image";

export default function Testimonial() {
  return (
    <section className="section testi" aria-label="what our client says" id="review">
    <div className="container">

      <div className="testi-content">

        <blockquote className="title h4 section-text">
          &ldquo; Soren&apos;s Team has created our web app, curated marketing videos, and social media campaign for my non-profit. They were professional, creative, and responsive. I highly recommend them without any hesitation. Period.  &rdquo;
        </blockquote>

        <div className="profile-card">
          <figure className="card-banner img-holder">
            <Img src="client.png" width="70" height="70" loading="lazy" alt="Alexis browni JR."
              className="img-cover" />
          </figure>

          <div>
            <p className="title h5 card-title">Rifa D.</p>

            <p className="card-subtitle">Founder of Kappa Arts</p>
          </div>
        </div>

      </div>

    </div>
  </section>
  )
}