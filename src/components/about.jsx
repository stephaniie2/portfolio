import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About Us</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p>
                        Stephanie has good experience from the automotive
                        industry in new car projects, interf ace development,
                        quality requirements, automated tests and vehicle
                        components. She is a social girl with appreciation from
                        coworkers and others in the office. Stephanie is trained
                        System Developer in Java / C # ASP.NET with
                        specialization in T - SQL, Test an d Agile methods. She
                        has a bachelor’s in system science and years of
                        experience with control modules, quality systems and
                        interface development. Stephanie is goal oriented and
                        with professional attitude fulfills her duties with
                        great skill.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
