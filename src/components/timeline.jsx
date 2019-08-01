import React, { Component } from "react";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-briefcase" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          System Developer at Elanders AB <span>2018-2019</span>
                        </h2>
                        <p>
                          2nd line support with case management system. Acted
                          support towards customers and troubleshoot / fix
                          errors in code, environments and databases. Tasks
                          consisted of automatic conversions, create driver
                          manuals, handling image assets, user rights control
                          and workflows. Created HTML5 Media Library to a global
                          home decoration company together with a senior
                          developer. Feedback from client led to a flexible and
                          maintainable solution.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-briefcase" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Systems at Knightec <span>2018</span>
                        </h2>
                        <p>
                          Created mobile certification app & angular app
                          surrounding connect device security and maintained
                          other technical projects. Collaborated to develop SQL
                          databases for a micro-controller and components
                          library.
                        </p>
                      </div>
                    </div>
                  </article>

                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-briefcase" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Test engineer at Volvo Cars <span>2018</span>
                        </h2>
                        <p>
                          Worked on Team Test Support (TSS) with many different
                          parts, but most with verification / testing of vehicle
                          components through VIDA and CAN networks.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          System Development Program, Lexicon University{" "}
                          <span>2017</span>
                        </h2>
                        <p>
                          System Database management Advanced Developer via
                          Blended Learning: Specialization in C# and ASP.NET
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-briefcase" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Consultant at Proffice AB <span>2015-2016</span>
                        </h2>
                        <p>
                          Automotive Assembly. Handling of machines that
                          monitors and controls the quality of the chairs.
                          Stephanie has performed her duties in an excellent way
                          to our client's full satisfaction. She showed great
                          working will, accuracy and professionalism. She was
                          also an appreciated e mployee thanks to her ease of
                          learning, skills and work ethic.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Bachelor's Degree, Systems Science: University of
                          Gothenburg <span>2012-2015</span>
                        </h2>
                        <p>
                          I have completed my higher secondary education with
                          major subjects as Physics,Chemistry & Maths with 91
                          merit. During my time at school, I have developed
                          interest in solving complex problems of the
                          fundamental physics which helped me to improve my
                          understanding of any problem and also my mathematical
                          skills to actually solve the problems.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none" />
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
