import React, { useState } from 'react';
import Img from "@/app/components/Image";
import { IoCheckboxOutline, IoCheckboxSharp, IoCheckmarkCircle, IoCheckmarkCircleSharp, IoCheckmarkDoneCircleSharp, IoChevronBackCircle, IoImageOutline, IoLogoSoundcloud, IoLogoYoutube } from "react-icons/io5";

export default function About() {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <>
      <section className="section about" aria-label="about-me" id="about">
        <div className="container">

          <div className="tab-container">

            <ul className="tab-btn-list">
              <li className="tab-btn-item">
                <button className={`tab-btn title h6 ${activeTab === 'about' ? 'active' : ''}`} onClick={() => setActiveTab('about')}>About Me</button>
              </li>
              <li className="tab-btn-item">
                <button className={`tab-btn title h6 ${activeTab === 'skillset' ? 'active' : ''}`} onClick={() => setActiveTab('skillset')}>Skillset</button>
              </li>
              {/* <li className="tab-btn-item">
                <button className={`tab-btn title h6 ${activeTab === 'interview' ? 'active' : ''}`} onClick={() => setActiveTab('interview')}>Interview</button>
              </li> */}
              <li className="tab-btn-item">
                <button className={`tab-btn title h6 ${activeTab === 'awward' ? 'active' : ''}`} onClick={() => setActiveTab('awward')}>Awwards</button>
              </li>
              <li className="tab-btn-item">
                <button className={`tab-btn title h6 ${activeTab === 'exhibition' ? 'active' : ''}`} onClick={() => setActiveTab('exhibition')}>Exhibition</button>
              </li>
            </ul>

            {activeTab === 'about' && (
              <div className="tab-content active" data-tab-content="about">
                <div className="grid-list">

                  <figure className="about-banner img-holder" data-tilt>
                    <Img src="about-banner.jpg" width="570" height="420" loading="lazy" alt="about banner"
                      className="img-cover" />
                  </figure>

                  <div className="about-content">

                    <h2 className="h4 title section-title">
                      I&apos;m Soren D. Blank & <br /> I have the best team ever to help your business grow.
                    </h2>

                    <p className="section-text">
                      
                    </p>

                    <ul className="about-list">

                      <li className="about-item">
                        <p className="list-title">Name</p>

                        <span className="span title h5">Soren D. Blank</span>
                      </li>

                      <li className="about-item">
                        <p className="list-title">Phone Number</p>

                        <span className="span title h5">123. 456. 789. 01</span>
                      </li>

                      <li className="about-item">
                        <p className="list-title">Email Address</p>

                        <span className="span title h5">contact@sorendev.com</span>
                      </li>

                      <li className="about-item">
                        <p className="list-title">Social Network</p>

                        <div className="social-list">

                          <a href="https://facebook.com/soren.blank.0" className="social-link h6" title="Facebook">Fb.</a>
                          <a href="https://instagram.com/soren_blank" className="social-link h6" title="Instagram">Ig.</a>
                          <a href="https://www.linkedin.com/in/siyam-afroz/" className="social-link h6" title="Linkedin">Ln.</a>
                          <a href="https://www.github.com/sorenblank" className="social-link h6" title="Github">Gh.</a>

                        </div>
                      </li>

                    </ul>

                  </div>

                </div>
              </div>
            )}

            {activeTab === 'skillset' && (
              <div className="tab-content active" data-tab-content="skillset">
                <div className="grid-list">

                  <div className="skill-content">

                    <h3 className="h4 title section-title">
                      We&apos;ve everything you need for your business to grow
                    </h3>

                    <p className="section-text">
                    We are a team of creatives who are excited about unique ideas and help IT-tech companies to create amazing identity by crafting top-notch UI/UX and website development alongside with digital marketing.
                    </p>

                    <ul className="skill-list">

                      <li>
                        <div className="skill-wrapper">
                          <span className="span">Website Development</span>

                          <IoCheckboxSharp className="ion-icon" aria-hidden="true" />
                        </div>

                        <div className="progress-bar">
                          <div className="progress-fill" style={{ width: "100%" }}></div> 
                          {/* <div className="progress-fill" style={{ width: "95%" }}></div> */}
                        </div>
                      </li>

                      <li>
                        <div className="skill-wrapper">
                          <span className="span">Design UI & UX</span>

                          <IoCheckboxSharp className="ion-icon" aria-hidden="true" />
                        </div>

                        <div className="progress-bar">
                          <div className="progress-fill" style={{ width: "100%" }}></div> 
                          {/* <div className="progress-fill" style={{ width: "85%" }}></div> */}
                        </div>
                      </li>

                      <li>
                        <div className="skill-wrapper">
                          <span className="span">Digital Marketing</span>

                          <IoCheckboxSharp className="ion-icon" aria-hidden="true" />
                        </div>

                        <div className="progress-bar">
                          <div className="progress-fill" style={{ width: "100%" }}></div> 
                          {/* <div className="progress-fill" style={{ width: "85%" }}></div> */}
                        </div>
                      </li>

                    </ul>

                  </div>

                  <figure className="skill-banner img-holder" data-tilt>
                    <Img src="skill-banner.jpg" width="570" height="420" loading="lazy" alt="skill banner"
                      className="img-cover" />
                  </figure>

                </div>
              </div>

            )}

            {/* {activeTab === 'interview' && (
              <div className="tab-content active" data-tab-content="interview">
                <div className="grid-list">

                  <div className="interview-card img-holder" data-tilt>
                    <Img src="interview-1.jpg" width="376" height="420" loading="lazy" alt="interview 1"
                      className="img-cover" />

                    <button className="btn btn:hover">Play</button>
                  </div>

                  <div className="interview-card img-holder" data-tilt>
                    <Img src="interview-2.jpg" width="376" height="420" loading="lazy" alt="interview 2"
                      className="img-cover" />

                    <button className="btn btn:hover">Play</button>
                  </div>

                  <div className="interview-card img-holder" data-tilt>
                    <Img src="interview-3.jpg" width="376" height="420" loading="lazy" alt="interview 3"
                      className="img-cover" />

                    <button className="btn btn:hover">Play</button>
                  </div>

                </div>
              </div>
            )} */}

            {activeTab === 'awward' && (
              <div className="tab-content active" data-tab-content="awward">

                <h3 className="h4 title section-title">
                  We’re a team of creatives who are excited about unique ideas and help IT-tech companies to make identity
                  by crafting UI/UX.
                </h3>

                <ul className="grid-list">

                  <li>
                    <div className="award-card">
                      <figure className="card-banner img-holder" data-tilt>
                        <Img src="awward-1.jpg" width="534" height="383" loading="lazy" alt="certificate"
                          className="img-cover" />
                      </figure>
                    </div>
                  </li>

                  <li>
                    <div className="award-card">
                      <figure className="card-banner img-holder" data-tilt>
                        <Img src="awward-2.jpg" width="534" height="383" loading="lazy" alt="certificate"
                          className="img-cover" />
                      </figure>
                    </div>
                  </li>

                  <li>
                    <div className="award-card">
                      <figure className="card-banner img-holder" data-tilt>
                        <Img src="awward-3.jpg" width="534" height="383" loading="lazy" alt="certificate"
                          className="img-cover" />
                      </figure>
                    </div>
                  </li>

                </ul>

              </div>
            )}


            {activeTab === 'exhibition' && (
              <div className="tab-content active" data-tab-content="exhibition">
                <ul className="grid-list">

                  <li>
                    <div className="exhibition-card">

                      <figure className="card-banner img-holder" data-tilt>
                        <Img src="exhibition-1.jpg" width="376" height="200" loading="lazy" alt="image"
                          className="img-cover" />
                      </figure>

                      {/* <div className="card-icon">
                        <IoImageOutline className="ion-icon" aria-hidden="true" />

                      </div> */}

                    </div>
                  </li>

                  <li>
                    <div className="exhibition-card">

                      <figure className="card-banner img-holder" data-tilt>
                        <Img src="exhibition-2.jpg" width="376" height="200" loading="lazy" alt="video"
                          className="img-cover" />
                      </figure>

                      {/* <div className="card-icon">
                        <IoLogoYoutube className="ion-icon" aria-hidden="true" />
                      </div> */}

                    </div>
                  </li>

                  <li>
                    <div className="exhibition-card">

                      <figure className="card-banner img-holder" data-tilt>
                        <Img src="exhibition-3.jpg" width="376" height="200" loading="lazy" alt="music"
                          className="img-cover" />
                      </figure>

                      {/* <div className="card-icon">
                        <IoLogoSoundcloud className="ion-icon" aria-hidden="true" />
                      </div> */}

                    </div>
                  </li>

                  <li>
                    <div className="exhibition-card">

                      <figure className="card-banner img-holder" data-tilt>
                        <Img src="exhibition-4.jpg" width="376" height="200" loading="lazy" alt="image"
                          className="img-cover" />
                      </figure>
{/* 
                      <div className="card-icon">
                        <IoImageOutline className="ion-icon" aria-hidden="true" />
                      </div> */}

                    </div>
                  </li>

                  <li>
                    <div className="exhibition-card">

                      <figure className="card-banner img-holder" data-tilt>
                        <Img src="exhibition-5.jpg" width="376" height="200" loading="lazy" alt="image"
                          className="img-cover" />
                      </figure>

                      {/* <div className="card-icon">
                        <IoImageOutline className="ion-icon" aria-hidden="true" />
                      </div> */}

                    </div>
                  </li>

                  <li>
                    <div className="exhibition-card">

                      <figure className="card-banner img-holder" data-tilt>
                        <Img src="exhibition-6.jpg" width="376" height="200" loading="lazy" alt="image"
                          className="img-cover" />
                      </figure>

                      {/* <div className="card-icon">
                        <IoImageOutline className="ion-icon" aria-hidden="true" />
                      </div> */}

                    </div>
                  </li>

                </ul>
              </div>
            )}

          </div>
        </div>
      </section>
    </>
  )
}