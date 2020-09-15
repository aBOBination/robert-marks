import React from 'react';
import './Projects.css';

export default function Projects() {
  return (
    <section className="section pt-5">
      <div className="container">
        <div className="text-center">
          <ul id="filters" className="filters mb-5 mx-auto pl-0">
            <li className="type active" data-filter="*">
              All
            </li>
            <li className="type" data-filter=".angular">
              Angular
            </li>
            <li className="type" data-filter=".react">
              React
            </li>
            <li className="type" data-filter=".python-django">
              Python/Django
            </li>
            <li className="type" data-filter=".ruby-rails">
              Ruby/Rails
            </li>
            <li className="type" data-filter=".php">
              PHP
            </li>
          </ul>
        </div>

        <div
          className="project-cards row mb-5 isotope"
          style={{ position: 'relative', height: '1050.61px' }}>
          <div className="isotope-item col-12 col-lg-4 angular python-django">
            <div className="card rounded-0 border-0 shadow-sm mb-5">
              <div className="card-img-container position-relative">
                <img
                  className="card-img-top rounded-0"
                  src={require('./assets/images/me320.png')}
                  alt=""
                />
                <div className="card-img-overlay overlay-logo text-center">
                  <div className="project-logo">
                    <h2>Test</h2>
                    {/* <img
                      className="img-fluid w-50"
                      src="assets/images/logos/logo-1-inverse.svg"
                    /> */}
                  </div>
                </div>
                <a
                  className="card-img-overlay overlay-content text-left p-lg-4"
                  href="project.html">
                  <h5 className="card-title font-weight-bold">
                    Client: Google
                  </h5>
                  <p className="card-text">
                    Project summary goes here. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Quisque vel sapien quis nulla
                    dictum euismod...
                  </p>
                </a>
              </div>
              <div className="card-body pb-0">
                <h4 className="card-title text-truncate text-center mb-0">
                  <a href="project.html">SaaS Product</a>
                </h4>
              </div>

              <div className="card-footer border-0 text-center bg-white pb-4">
                <ul className="list-inline mb-0 mx-auto">
                  <li className="list-inline-item">
                    <span className="badge badge-secondary badge-pill">
                      Angular
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span className="badge badge-secondary badge-pill">
                      Django
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span className="badge badge-secondary badge-pill">
                      MongoDB
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span className="badge badge-secondary badge-pill">
                      HTML/CSS
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="isotope-item col-12 col-lg-4 ruby-rails">
            <div className="card rounded-0 border-0 shadow-sm mb-5">
              <div className="card-img-container position-relative">
                <img
                  className="card-img-top rounded-0"
                  src={require('./assets/images/Marks, Bobby 5mb.jpg')}
                  alt=""
                />
                <div className="card-img-overlay overlay-logo text-center">
                  <div className="project-logo">
                    <img
                      className="img-fluid w-50"
                      src="assets/images/logos/logo-2-inverse.svg"
                    />
                  </div>
                </div>
                <a
                  className="card-img-overlay overlay-content text-left p-lg-4"
                  href="project.html">
                  <h5 className="card-title font-weight-bold">
                    Client: Basecamp
                  </h5>
                  <p className="card-text">
                    Project summary goes here. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Quisque vel sapien quis nulla
                    dictum euismod...
                  </p>
                </a>
              </div>
              <div className="card-body pb-0">
                <h4 className="card-title text-truncate text-center mb-0">
                  <a href="project.html">Webapp Development</a>
                </h4>
              </div>

              <div className="card-footer border-0 text-center bg-white pb-4">
                <ul className="list-inline mb-0 mx-auto">
                  <li className="list-inline-item">
                    <span className="badge badge-secondary badge-pill">
                      Rails
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span className="badge badge-secondary badge-pill">
                      jQuery
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span className="badge badge-secondary badge-pill">
                      PostgresSQL
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span className="badge badge-secondary badge-pill">
                      HTML/LESS
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="isotope-item col-12 col-lg-4 react python-django">
            <div className="card rounded-0 border-0 shadow-sm mb-5">
              <div className="card-img-container position-relative">
                <img
                  className="card-img-top rounded-0"
                  src="assets/images/projects/project-3-thumb.jpg"
                  alt=""
                />
                <div className="card-img-overlay overlay-logo text-center">
                  <div className="project-logo">
                    <img
                      className="img-fluid w-50"
                      src="assets/images/logos/logo-3-inverse.svg"
                    />
                  </div>
                </div>
                <a
                  className="card-img-overlay overlay-content text-left p-lg-4"
                  href="project.html">
                  <h5 className="card-title font-weight-bold">
                    Client: Airbnb
                  </h5>
                  <p className="card-text">
                    Project summary goes here. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Quisque vel sapien quis nulla
                    dictum euismod...
                  </p>
                </a>
              </div>
              <div className="card-body pb-0">
                <h4 className="card-title text-truncate text-center mb-0">
                  <a href="project.html">Mobile app development</a>
                </h4>
              </div>

              <div className="card-footer border-0 text-center bg-white pb-4">
                <ul className="list-inline mb-0 mx-auto">
                  <li className="list-inline-item">
                    <span className="badge badge-secondary badge-pill">
                      React
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span className="badge badge-secondary badge-pill">
                      Python
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span className="badge badge-secondary badge-pill">
                      MySQL
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span className="badge badge-secondary badge-pill">
                      Webpack
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="isotope-item col-12 col-lg-4 react">
            <div className="card rounded-0 border-0 shadow-sm mb-5">
              <div className="card-img-container position-relative">
                <img
                  className="card-img-top rounded-0"
                  src="assets/images/projects/project-4-thumb.jpg"
                  alt=""
                />
                <div className="card-img-overlay overlay-logo text-center">
                  <div className="project-logo">
                    <img
                      className="img-fluid w-50"
                      src="assets/images/logos/logo-4-inverse.svg"
                    />
                  </div>
                </div>
                <a
                  className="card-img-overlay overlay-content text-left p-lg-4"
                  href="project.html">
                  <h5 className="card-title font-weight-bold">
                    Client: Dropbox
                  </h5>
                  <p className="card-text">
                    Project summary goes here. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Quisque vel sapien quis nulla
                    dictum euismod...
                  </p>
                </a>
              </div>
              <div className="card-body pb-0">
                <h4 className="card-title text-truncate text-center mb-0">
                  <a href="project.html">Internal Product</a>
                </h4>
              </div>

              <div className="card-footer border-0 text-center bg-white pb-4">
                <ul className="list-inline mb-0 mx-auto">
                  <li className="list-inline-item">
                    <span className="badge badge-secondary badge-pill">
                      React
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span className="badge badge-secondary badge-pill">
                      Flux
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span className="badge badge-secondary badge-pill">
                      Babel
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span className="badge badge-secondary badge-pill">
                      MongoDB
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="isotope-item col-12 col-lg-4 react php">
            <div className="card rounded-0 border-0 shadow-sm mb-5">
              <div className="card-img-container position-relative">
                <img
                  className="card-img-top rounded-0"
                  src="assets/images/projects/project-5-thumb.jpg"
                  alt=""
                />
                <div className="card-img-overlay overlay-logo text-center">
                  <div className="project-logo">
                    <img
                      className="img-fluid w-50"
                      src="assets/images/logos/logo-5-inverse.svg"
                    />
                  </div>
                </div>
                <a
                  className="card-img-overlay overlay-content text-left p-lg-4"
                  href="project.html">
                  <h5 className="card-title font-weight-bold">
                    Client: Spotify
                  </h5>
                  <p className="card-text">
                    Project summary goes here. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Quisque vel sapien quis nulla
                    dictum euismod...
                  </p>
                </a>
              </div>
              <div className="card-body pb-0">
                <h4 className="card-title text-truncate text-center mb-0">
                  <a href="project.html">Mobile App</a>
                </h4>
              </div>

              <div className="card-footer border-0 text-center bg-white pb-4">
                <ul className="list-inline mb-0 mx-auto">
                  <li className="list-inline-item">
                    <span className="badge badge-secondary badge-pill">
                      React
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span className="badge badge-secondary badge-pill">
                      PHP
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span className="badge badge-secondary badge-pill">
                      MySQL
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="isotope-item col-12 col-lg-4 ruby-rails">
            {' '}
            <div className="card rounded-0 border-0 shadow-sm mb-5">
              <div className="card-img-container position-relative">
                <img
                  className="card-img-top rounded-0"
                  src="assets/images/projects/project-6-thumb.jpg"
                  alt=""
                />
                <div className="card-img-overlay overlay-logo text-center">
                  <div className="project-logo">
                    <img
                      className="img-fluid w-50"
                      src="assets/images/logos/logo-6-inverse.svg"
                    />
                  </div>
                </div>
                <a
                  className="card-img-overlay overlay-content text-left p-lg-4"
                  href="project.html">
                  <h5 className="card-title font-weight-bold">
                    Client: Evernote
                  </h5>
                  <p className="card-text">
                    Project summary goes here. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Quisque vel sapien quis nulla
                    dictum euismod...
                  </p>
                </a>
              </div>
              <div className="card-body pb-0">
                <h4 className="card-title text-truncate text-center mb-0">
                  <a href="project.html">Web App &amp; Chrome Extension</a>
                </h4>
              </div>

              <div className="card-footer border-0 text-center bg-white pb-4">
                <ul className="list-inline mb-0 mx-auto">
                  <li className="list-inline-item">
                    <span className="badge badge-secondary badge-pill">
                      JavaScript
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span className="badge badge-secondary badge-pill">
                      Ruby
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span className="badge badge-secondary badge-pill">
                      HTML/CSS
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="isotope-item col-12 col-lg-4 angular php">
            {' '}
            <div className="card rounded-0 border-0 shadow-sm mb-5">
              <div className="card-img-container position-relative">
                <img
                  className="card-img-top rounded-0"
                  src="assets/images/projects/project-7-thumb.jpg"
                  alt=""
                />
                <div className="card-img-overlay overlay-logo text-center">
                  <div className="project-logo">
                    <img
                      className="img-fluid w-50"
                      src="assets/images/logos/logo-7-inverse.svg"
                    />
                  </div>
                </div>
                <a
                  className="card-img-overlay overlay-content text-left p-lg-4"
                  href="project.html">
                  <h5 className="card-title font-weight-bold">
                    Client: Facebook
                  </h5>
                  <p className="card-text">
                    Project summary goes here. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Quisque vel sapien quis nulla
                    dictum euismod...
                  </p>
                </a>
              </div>
              <div className="card-body pb-0">
                <h4 className="card-title text-truncate text-center mb-0">
                  <a href="project.html">Facebook Ads Manager</a>
                </h4>
              </div>

              <div className="card-footer border-0 text-center bg-white pb-4">
                <ul className="list-inline mb-0 mx-auto">
                  <li className="list-inline-item">
                    <span className="badge badge-secondary badge-pill">
                      Angular
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span className="badge badge-secondary badge-pill">
                      PHP
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span className="badge badge-secondary badge-pill">
                      HTML/SaSS
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="isotope-item col-12 col-lg-4 react python-django">
            {' '}
            <div className="card rounded-0 border-0 shadow-sm mb-5">
              <div className="card-img-container position-relative">
                <img
                  className="card-img-top rounded-0"
                  src="assets/images/projects/project-8-thumb.jpg"
                  alt=""
                />
                <div className="card-img-overlay overlay-logo text-center">
                  <div className="project-logo">
                    <img
                      className="img-fluid w-50"
                      src="assets/images/logos/logo-8-inverse.svg"
                    />
                  </div>
                </div>
                <a
                  className="card-img-overlay overlay-content text-left p-lg-4"
                  href="project.html">
                  <h5 className="card-title font-weight-bold">
                    Client: Zendesk
                  </h5>
                  <p className="card-text">
                    Project summary goes here. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Quisque vel sapien quis nulla
                    dictum euismod...
                  </p>
                </a>
              </div>
              <div className="card-body pb-0">
                <h4 className="card-title text-truncate text-center mb-0">
                  <a href="project.html">Mobile App Development</a>
                </h4>
              </div>

              <div className="card-footer border-0 text-center bg-white pb-4">
                <ul className="list-inline mb-0 mx-auto">
                  <li className="list-inline-item">
                    <span className="badge badge-secondary badge-pill">
                      React
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span className="badge badge-secondary badge-pill">
                      Django
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span className="badge badge-secondary badge-pill">
                      HTML/SaSS
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="isotope-item col-12 col-lg-4 angular python-django">
            {' '}
            <div className="card rounded-0 border-0 shadow-sm mb-5">
              <div className="card-img-container position-relative">
                <img
                  className="card-img-top rounded-0"
                  src="assets/images/projects/project-9-thumb.jpg"
                  alt=""
                />
                <div className="card-img-overlay overlay-logo text-center">
                  <div className="project-logo">
                    <img
                      className="img-fluid w-50"
                      src="assets/images/logos/logo-9-inverse.svg"
                    />
                  </div>
                </div>
                <a
                  className="card-img-overlay overlay-content text-left p-lg-4"
                  href="project.html">
                  <h5 className="card-title font-weight-bold">
                    Client: Coinbase
                  </h5>
                  <p className="card-text">
                    Project summary goes here. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Quisque vel sapien quis nulla
                    dictum euismod...
                  </p>
                </a>
              </div>
              <div className="card-body pb-0">
                <h4 className="card-title text-truncate text-center mb-0">
                  <a href="project.html">App Development</a>
                </h4>
              </div>

              <div className="card-footer border-0 text-center bg-white pb-4">
                <ul className="list-inline mb-0 mx-auto">
                  <li className="list-inline-item">
                    <span className="badge badge-secondary badge-pill">
                      Angular
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span className="badge badge-secondary badge-pill">
                      Python
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span className="badge badge-secondary badge-pill">
                      HTML/SaSS
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
