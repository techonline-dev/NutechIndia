import React from "react";
import Nav from "../components/Nav";
import FooterComponent from "./FooterComponent";

class GalleryComponent extends React.Component {
  componentDidMount() {
    window.updateUIAfterReact();
  }
  render() {
    return (
      <div>
        <Nav />
        <div className="breadcrumbs"  style={{
            background:
              "url(https://www.exosomedx.com/sites/default/files/2019-12/EoxosomeDkBlue72.jpg)",
          }}>
          {/* Slide 2 */}
          <div className="slide">
            <div className="container">
              <div className="slide-captions text-left text-light">
                {/* Captions */}
                               <h1>Fight Prostate Cancer... With New Hope!</h1>

              </div>
            </div>
          </div>
          {/* end: Slide 2 */}
        </div>

        {/* Our Work */}
        <section id="gallery" className="background-grey">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-title text-center">
                  <h2>NUTECH Gallery</h2>
                  <p className="lead">
                    Happy moments and some useful information.
                  </p>
                </div>
              </div>
            </div>
            {/* Portfolio */}
            {/* portfolio item */}
            <div className="row">
              <div className="col-md-4">
                <div className="portfolio-item img-zoom pf-illustrations pf-uielements pf-media">
                  <div className="portfolio-item-wrap">
                    <div className="portfolio-image">
                      <img src="/images/portfolio/1.jpg" alt="" />
                    </div>
                    <div className="portfolio-description">
                      <a
                        title="NUTECH moments"
                        data-lightbox="image"
                        href="/images/portfolio/1.jpg"
                      >
                        <i className="fa fa-expand" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* end: portfolio item */}
              {/* portfolio item */}
              <div className="col-md-4">
                <div className="portfolio-item img-zoom pf-illustrations pf-uielements pf-media">
                  <div className="portfolio-item-wrap">
                    <div className="portfolio-image">
                      <img src="/images/portfolio/2.jpg" alt="" />
                    </div>
                    <div className="portfolio-description">
                      <a
                        title="NUTECH moments"
                        data-lightbox="image"
                        href="/images/portfolio/2.jpg"
                      >
                        <i className="fa fa-expand" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="portfolio-item img-zoom pf-illustrations pf-uielements pf-media">
                  <div className="portfolio-item-wrap">
                    <div className="portfolio-image">
                      <img src="/images/portfolio/3.jpg" alt="" />
                    </div>
                    <div className="portfolio-description">
                      <a
                        title="NUTECH moments"
                        data-lightbox="image"
                        href="/images/portfolio/3.jpg"
                      >
                        <i className="fa fa-expand" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end: portfolio item */}
            <div className="row">
              {/* portfolio item */}
              <div className="col-md-4">
                <div className="portfolio-item img-zoom pf-illustrations pf-uielements pf-media">
                  <div className="portfolio-item-wrap">
                    <div className="portfolio-image">
                      <img src="/images/portfolio/4.jpg" alt="" />
                    </div>
                    <div className="portfolio-description">
                      <a
                        title="NUTECH moments"
                        data-lightbox="image"
                        href="/images/portfolio/4.jpg"
                      >
                        <i className="fa fa-expand" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="portfolio-item overlay-light img-zoom pf-illustrations pf-media pf-icons pf-Media pf-graphics">
                  <div className="portfolio-item-wrap">
                    <div className="portfolio-slider">
                      <div
                        className="carousel dots-inside arrows-dark dots-dark"
                        data-items={1}
                        data-loop="true"
                        data-autoplay="true"
                        data-autoplay-timeout={1800}
                      >
                        <a
                          title="NUTECH moments"
                          data-lightbox="image"
                          href="/images/portfolio/about.jpg"
                        >
                          <img src="/images/portfolio/about.jpg" alt="" />
                        </a>
                        <a
                          title="NUTECH moments"
                          data-lightbox="image"
                          href="/images/portfolio/about3.jpg"
                        >
                          <img src="/images/portfolio/about3.jpg" alt="" />
                        </a>
                      </div>
                    </div>
                    <div
                      className="portfolio-description"
                      data-lightbox="gallery"
                    >
                      <a
                        title="NUTECH moments"
                        data-lightbox="gallery-item"
                        href="/images/portfolio/about.jpg"
                      >
                        <h3>NUTECH Promotions</h3>
                        <span>know more</span>
                      </a>
                      <a
                        title="NUTECH moments"
                        data-lightbox="gallery-item"
                        href="/images/portfolio/about3.jpg"
                        className="hidden"
                      >
                        .
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="portfolio-item overlay-light img-zoom pf-illustrations pf-media pf-icons pf-Media pf-graphics">
                  <div className="portfolio-item-wrap">
                    <div className="portfolio-slider">
                      <div
                        className="carousel dots-inside arrows-dark dots-dark"
                        data-items={1}
                        data-loop="true"
                        data-autoplay="true"
                        data-autoplay-timeout={1800}
                      >
                        <a
                          title="NUTECH moments"
                          data-lightbox="image"
                          href="/images/portfolio/information.jpg"
                        >
                          <img src="/images/portfolio/information.jpg" alt="" />
                        </a>
                        <a
                          title="NUTECH moments"
                          data-lightbox="image"
                          href="/images/portfolio/information1.jpg"
                        >
                          <img
                            src="/images/portfolio/information1.jpg"
                            alt=""
                          />
                        </a>
                        <a
                          title="NUTECH moments"
                          data-lightbox="image"
                          href="/images/portfolio/information2.jpg"
                        >
                          <img
                            src="/images/portfolio/information2.jpg"
                            alt=""
                          />
                        </a>
                        <a
                          title="NUTECH moments"
                          data-lightbox="image"
                          href="/images/portfolio/information2.jpg"
                        >
                          <img
                            src="/images/portfolio/information3.jpg"
                            alt=""
                          />
                        </a>
                        <a
                          title="NUTECH moments"
                          data-lightbox="image"
                          href="/images/portfolio/information2.jpg"
                        >
                          <img
                            src="/images/portfolio/information4.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <div
                      className="portfolio-description"
                      data-lightbox="gallery"
                    >
                      <a
                        title="NUTECH moments"
                        data-lightbox="gallery-item"
                        href="/images/portfolio/information.jpg"
                      >
                        <h3>Useful Information</h3>
                        <span>about prostate cancer</span>
                      </a>
                      <a
                        title="NUTECH moments"
                        data-lightbox="gallery-item"
                        href="/images/portfolio/information1.jpg"
                        className="hidden"
                      >
                        .
                      </a>
                      <a
                        title="NUTECH moments"
                        data-lightbox="gallery-item"
                        href="/images/portfolio/information2.jpg"
                        className="hidden"
                      >
                        .
                      </a>
                      <a
                        title="NUTECH moments"
                        data-lightbox="gallery-item"
                        href="/images/portfolio/information3.jpg"
                        className="hidden"
                      >
                        .
                      </a>
                      <a
                        title="NUTECH moments"
                        data-lightbox="gallery-item"
                        href="/images/portfolio/information4.jpg"
                        className="hidden"
                      >
                        .
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end: Our Work */}

        {/* end: Know more */}

        {/* Footer */}
        <FooterComponent />
        {/* end: Footer */}
        {/* end: Wrapper */}
        {/* Go to top button */}
        <a href="#home" id="goToTop">
          <i className="fa fa-angle-up top-icon" />
          <i className="fa fa-angle-up" />
        </a>
      </div>
    );
  }
}

export default GalleryComponent;
