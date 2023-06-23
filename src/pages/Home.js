import React, { Fragment } from "react";
import { Link } from 'react-router-dom';


function Home() {
  return (

    <Fragment>
      <div>
        {/* Start your project here*/}
        <section className="header">
          <div className="inner-layout">
            <div className="containe">
              <div className="nav-bar">
                <div className="logo">
                  <a href="http://landing.techiematter.com/blog">
                    <img style={{ width: '80% !important' }} src="images/images-main-logo@2x.png" alt="TechieMatter" srcSet="https://www.techiematter.com/site/assets/images/main-logo@2x.png" />
                    <span className="beta">Beta</span>
                  </a>
                </div>
                <div className="actions d-none d-lg-flex">
                  <a href="https://blog.techiematter.com/" className="link">Blog</a>
                  <a href="/form" className="link">Login</a>
                  <a href="/form" className="tafra-btn tafra-default-btn">I Want To Hire</a>
                  <a href="/form" className="tafra-btn tafra-primary-btn">I am A Recruiter</a>
                </div>
                <div id="menu" className="home-mb-actions d-block d-lg-none">
                  <button id="menu-btn" type="button" data-target="#menuid" className="burger-btn">
                    <ul>
                      <li>
                      </li><li>
                      </li><li>
                      </li></ul>
                  </button>
                  <div className="widget" id="menuid">
                    <ul>
                      <li>
                        <a href="login.html" className="link">I am A Recruiter</a>
                      </li>
                      <li>
                        <a href="login.html" className="link">I Want To Hire</a>
                      </li>
                      <li>
                        <a href="https://blog.techiematter.com/" className="link">Blog</a>
                      </li>
                      <li>
                        <a href="login.html" className="link">Login</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="clearfix" />
              </div>
              <div className="content">
                <div className="intro">
                  <ul>
                    <li>
                      <h1>Your Tech Hiring Arm</h1>
                    </li>
                    <li>
                      <p className="font-italic">We Change The Way Of Hiring Tech Talents</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="how-we-can-do">
          <div className="containe">
            <h3>How can we do it?</h3>
            <div className="row how-cards">
              <div className="col-6 col-lg-3">
                <div className="how-card">
                  <ul>
                    <li>
                      <img src="assets/images/images-story.png" alt srcSet="https://www.techiematter.com/site/assets/images/story@2x.png" />
                    </li>
                    <li>
                      <h4>Post A Job</h4>
                    </li>
                    <li>
                      <p>Start by posting a job with all needed requirements.</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-6 col-lg-3">
                <div className="how-card">
                  <ul>
                    <li>
                      <img src="assets/images/images-gdpr.png" alt srcSet="https://www.techiematter.com/site/assets/images/gdpr@2x.png" />
                    </li>
                    <li>
                      <h4>Get An Offer</h4>
                    </li>
                    <li>
                      <p>We will send you in 24hrs -as max- the hiring offer for the job.</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-6 col-lg-3">
                <div className="how-card">
                  <ul>
                    <li>
                      <img src="assets\images\magic-wand (1).png" alt srcSet="https://www.techiematter.com/site/assets/images/magic-wand (1)@2x.png" />
                    </li>
                    <li>
                      <h4>We Do The Magic</h4>
                    </li>
                    <li>
                      <p>We work with Tech Verifiers getting you the most technically validated candidates.</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-6 col-lg-3">
                <div className="how-card">
                  <ul>
                    <li>
                      <img src="assets/images/images-approved.png" alt srcSet="https://www.techiematter.com/site/assets/images/approved@2x.png" />
                    </li>
                    <li>
                      <h4>Hiring is Done!</h4>
                    </li>
                    <li>
                      <p>You check the reports we sent to you, contact them and voilà, Hiring is done!</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <a href="companySignup.html" className="tafra-btn tafra-default-btn">
                  Hire Now              </a>
              </div>
            </div>
          </div>
        </section>
        <section className="higher-less">
          <h3>Happy employers are few, Be one of them</h3>
          <div className="video-container" id="video-container">

            <div id="home-video" width="100%">
              <iframe width="100%" height={500} src="https://www.youtube.com/embed/910niYAKKmg" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>

          </div>
        </section>
        <section className="tech-matter">
          <div className="containe">
            <h3>With TechieMatter, You Can Hire ..</h3>
            <div className="row m-0">
              <div className="col-12">
                {/*Carousel Wrapper*/}
                <div id="carousel-example-1z" className="carousel slide carousel-multi-item" data-ride="carousel">
                  {/*Indicators*/}
                  <ol className="carousel-indicators d-none d-lg-flex">
                    <li data-target="#carousel-example-1z" data-slide-to={0} className="active">
                    </li><li data-target="#carousel-example-1z" data-slide-to={1}>
                    </li></ol>
                  {/*/.Indicators*/}
                  {/*Slides*/}
                  <div className="carousel-inner" role="listbox">
                    {/*First slide*/}
                    <div className="carousel-item active">
                      <div className="row">
                        <div className="col-6 col-lg-12">
                          <div className="row">
                            <div className="col-12 col-lg-4">
                              <ul>
                                <li>
                                  <img src="assets/images/images-coding.png" alt="Mobile Developers" srcSet="https://www.techiematter.com/site/assets/images/coding@2x.png" />
                                </li>
                                <li>
                                  <h5>Mobile Developers</h5>
                                </li>
                              </ul>
                            </div>
                            <div className="col-12 col-lg-4">
                              <ul>
                                <li>
                                  <img src="assets/images/images-web-programming.png" alt="Full Stack Web Developers" srcSet="https://www.techiematter.com/site/assets/images/web-programming@2x.png" />
                                </li>
                                <li>
                                  <h5>Full Stack Web Developers</h5>
                                </li>
                              </ul>
                            </div>
                            <div className="col-12 col-lg-4">
                              <ul>
                                <li>
                                  <img src="assets/images/images-computer.png" alt="Front-End Developers" srcSet="https://www.techiematter.com/site/assets/images/computer@2x.png" />
                                </li>
                                <li>
                                  <h5>Front-End Developers</h5>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-6 col-lg-12">
                          <div className="row">
                            <div className="col-12 col-lg-4">
                              <ul>
                                <li>
                                  <img src="assets/images/images-wireframe.png" alt="UX Designers" srcSet="https://www.techiematter.com/site/assets/images/wireframe@2x.png" />
                                </li>
                                <li>
                                  <h5>UX Designers</h5>
                                </li>
                              </ul>
                            </div>
                            <div className="col-12 col-lg-4">
                              <ul>
                                <li>
                                  <img src="assets/images/images-pencil-case.png" alt="UI Designers" srcSet="https://www.techiematter.com/site/assets/images/pencil-case@2x.png" />
                                </li>
                                <li>
                                  <h5>UI Designers</h5>
                                </li>
                              </ul>
                            </div>
                            <div className="col-12 col-lg-4">
                              <ul>
                                <li>
                                  <img src="\assets\images\1png.png" alt="Software Engineers" srcSet="https://www.techiematter.com/site/assets/images/software (1).png" />
                                </li>
                                <li>
                                  <h5>Software Engineers</h5>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*/First slide*/}
                    {/*Second slide*/}
                    <div className="carousel-item">
                      <div className="row">
                        <div className="col-6 col-lg-12">
                          <div className="row">
                            <div className="col-12 col-lg-4">
                              <ul>
                                <li>
                                  <img src="assets/images/images-noun_Scrum_44251.png" alt="Scrum Masters" srcSet="https://www.techiematter.com/site/assets/images/noun_Scrum_44251@2x.png" />
                                </li>
                                <li>
                                  <h5>Scrum Masters</h5>
                                </li>
                              </ul>
                            </div>
                            <div className="col-12 col-lg-4">
                              <ul>
                                <li>
                                  <img src="assets/images/images-solution@2x.png" alt="Product Owners" srcSet="https://www.techiematter.com/site/assets/images/solution.png" />
                                </li>
                                <li>
                                  <h5>Product Owners</h5>
                                </li>
                              </ul>
                            </div>
                            <div className="col-12 col-lg-4">
                              <ul>
                                <li>
                                  <img src="assets/images/images-questionnaire.png" alt="Software Testing Engineers" srcSet="https://www.techiematter.com/site/assets/images/questionnaire@2x.png" />
                                </li>
                                <li>
                                  <h5>Software Testing Engineers</h5>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-6 col-lg-12">
                          <div className="row">
                            <div className="col-12 col-lg-4">
                              <ul>
                                <li>
                                  <img src="assets/images/images-web-development.png" alt="DevOps Engineers" srcSet="https://www.techiematter.com/site/assets/images/web-development@2x.png" />
                                </li>
                                <li>
                                  <h5>DevOps Engineers</h5>
                                </li>
                              </ul>
                            </div>
                            <div className="col-12 col-lg-4">
                              <ul>
                                <li>
                                  <img src="assets/images/images-borromean-rings@2x.png" alt="Product Managers" srcSet="https://www.techiematter.com/site/assets/images/borromean-rings@2x.png" />
                                </li>
                                <li>
                                  <h5>Product Managers</h5>
                                </li>
                              </ul>
                            </div>
                            <div className="col-12 col-lg-4">
                              <ul>
                                <li>
                                  <img src="assets/images/images-businessman.png" alt="Business Analysts" srcSet="https://www.techiematter.com/site/assets/images/businessman@2x.png" />
                                </li>
                                <li>
                                  <h5>Business Analysts</h5>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*/Second slide*/}
                  </div>
                  {/*/.Slides*/}
                  {/*Controls*/}
                  <a className="carousel-control-prev" href="#carousel-example-1z" role="button" data-slide="prev">
                    <span className="tafra-icon prev-icon" aria-hidden="true" />
                  </a>
                  <a className="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next">
                    <span className="tafra-icon next-icon" aria-hidden="true" />
                  </a>
                  {/*/.Controls*/}
                </div>
                {/*/.Carousel Wrapper*/}
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <a href="www.techiematter.html" className="tafra-btn tafra-primary-btn">Hire You Next Talent Now</a>
              </div>
            </div>
          </div>
        </section>
        <section className="success-story">
          <div className="row">
            <div className="col-12 col-lg-4">
              <h2>Happy Employers</h2>
            </div>
            <div className="col-12 col-lg-8">
              <div className="row">
                <div className="col-12 col-lg-6">
                  <div className="story-card">
                    <img className="quotation" src="assets/images/images-right-quotation-mark.png" />
                    <div className="story-img">
                      <img width="150px" height="150px" style={{ borderRadius: '50%' }} src="\assets\images\images-new_amr.jpg" alt="Amr Fawzi" />
                    </div>
                    <div className="story-content" style={{ position: 'relative', bottom: 60 }}>
                      <p>TechieMatter is a great Technical Hiring Arm for any company. I tried their service in many roles and they never failed to surprise me with the quality, price, and speed in getting the best techies to my company.</p>
                    </div>
                    <div className="story-hero">
                      <h4>Amr Fawzi</h4>
                      <small>CEO &amp; Founder at GoodsMart</small>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="story-card">
                    <img className="quotation" src="assets/images/images-right-quotation-mark.png" />
                    <div className="story-img">
                      <img width="150px" height="150px" style={{ borderRadius: '50%' }} src="\assets\images\images-Ines.jpg" alt="Ines Mena" />
                    </div>
                    <div className="story-content" style={{ position: 'relative', bottom: 60 }}>
                      <p>I would definitely recommend TechieMatter if you don't want to go through the hassle of hiring yourself, let them do the work for you as they are one of the best when it comes to technical recruitment</p>
                    </div>
                    <div className="story-hero">
                      <h4>Ines Mena</h4>
                      <small>COO &amp; Cofounder at Qidz</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <a href="companySignup.html" className="tafra-btn tafra-primary-btn">Hire Now</a>
            </div>
          </div>
        </section>
        <section className="questions">
          <div className="containe">
            <div className="row">
              <div className="col-12">
                <div className="content">
                  <h3>Have Any Questions Or Suggestions?</h3>
                  <p>You can always contact us at info@techiematter.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="for-emp-rec">
          <div className="row">
            <div className="col-12 col-lg-6 p-0">
              <div className="for-card employers-card grid-main-bg">
                <div className="row">
                  <div className="col-12">
                    <img src="\assets\images\2.png" alt="For Employers" srcSet="https://www.techiematter.com/site/assets/images/for employer@2x.png" />
                  </div>
                  <div className="col-12">
                    <h3>For Employers</h3>
                  </div>
                  <div className="col-12">
                    <small>Save time &amp; get qualified candidates with TechieMatter</small>
                  </div>
                  <div className="col-12 mt-4">
                    <a href="companySignup.html" className="tafra-btn recuiter-btn">I Want To Hire</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 p-0">
              <div className="for-card recruiters-card">
                <div className="row">
                  <div className="col-12">
                    <img src="assets/images/images-for-recuiters.png" alt="For Tech Recruiters" srcSet="https://www.techiematter.com/site/assets/images/for-recuiters@2x.png" />
                  </div>
                  <div className="col-12">
                    <h3>For Tech Recruiters</h3>
                  </div>
                  <div className="col-12">
                    <small>Work with us and earn more with TechieMatter</small>
                  </div>
                  <div className="col-12 mt-4">
                    <a href="RecuriterSignup.html" className="tafra-btn recuiter-btn">I Want To Join TechieMatter</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div className="row">
            <div className="col-8 col-lg-4 location">
              <i className="icon-flags" /><span>Giza, Egypt</span>
            </div>
            <div className="col-12 col-lg-4 copy-right">
              <small>© Copyright 2020 TechieMatter. All rights reserved</small>
              <small>|</small>
              <a href="privacy-policy.html"><small>Privacy policy</small></a>
            </div>
            <div className="col-4 links">
              <a href><i className="icon-facebook" /></a>
              <a href><i className="icon-linkedin" /></a>
              <a href><i className="icon-twitter" /></a>
            </div>
          </div>
        </footer>
        {/* End of project*/}
        {/* SCRIPTS */}
        {/* JQuery */}
        {/* Bootstrap tooltips */}
        {/* Bootstrap core JavaScript */}
        {/* MDB core JavaScript */}
        {/* custom script */}
      </div>


    </Fragment>

  )
}

export default Home;