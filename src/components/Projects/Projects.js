import React from 'react';
import './Projects.css';

export default function Projects() {
  return (
    <section class="section-featured-projects py-5">
      <div class="container">
        <h3 class="section-title font-weight-bold text-center mb-5">
          Featured Projects
        </h3>

        <div class="project-cards row mb-5">
          <div class="col-12 col-lg-4">
            <div class="card rounded-0 border-0 shadow-sm mb-5 mb-lg-0">
              <div class="card-img-container position-relative">
                <img
                  class="card-img-top rounded-0"
                  src="assets/images/projects/project-1-thumb.jpg"
                  alt=""
                />
                <div class="card-img-overlay overlay-logo text-center">
                  <div class="project-logo">
                    <img
                      class="img-fluid w-50"
                      src="assets/images/logos/logo-1-inverse.svg"
                    />
                  </div>
                </div>
                <a
                  class="card-img-overlay overlay-content text-left p-lg-4"
                  href="project.html">
                  <h5 class="card-title font-weight-bold">Client: Google</h5>
                  <p class="card-text">
                    Project summary goes here. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Quisque vel sapien quis nulla
                    dictum euismod...
                  </p>
                </a>
              </div>
              <div class="card-body pb-0">
                <h4 class="card-title text-truncate text-center mb-0">
                  <a href="project.html">SaaS Product</a>
                </h4>
              </div>

              <div class="card-footer border-0 text-center bg-white pb-4">
                <ul class="list-inline mb-0 mx-auto">
                  <li class="list-inline-item">
                    <span class="badge badge-secondary badge-pill">
                      Angular
                    </span>
                  </li>
                  <li class="list-inline-item">
                    <span class="badge badge-secondary badge-pill">Django</span>
                  </li>
                  <li class="list-inline-item">
                    <span class="badge badge-secondary badge-pill">
                      MongoDB
                    </span>
                  </li>
                  <li class="list-inline-item">
                    <span class="badge badge-secondary badge-pill">
                      HTML/CSS
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="card rounded-0 border-0 shadow-sm mb-5 mb-lg-0">
              <div class="card-img-container position-relative">
                <img
                  class="card-img-top rounded-0"
                  src="assets/images/projects/project-2-thumb.jpg"
                  alt=""
                />
                <div class="card-img-overlay overlay-logo text-center">
                  <div class="project-logo">
                    <img
                      class="img-fluid w-50"
                      src="assets/images/logos/logo-2-inverse.svg"
                    />
                  </div>
                </div>
                <a
                  class="card-img-overlay overlay-content text-left p-lg-4"
                  href="project.html">
                  <h5 class="card-title font-weight-bold">Client: Basecamp</h5>
                  <p class="card-text">
                    Project summary goes here. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Quisque vel sapien quis nulla
                    dictum euismod...
                  </p>
                </a>
              </div>
              <div class="card-body pb-0">
                <h4 class="card-title text-truncate text-center mb-0">
                  <a href="project.html">Webapp Development</a>
                </h4>
              </div>

              <div class="card-footer border-0 text-center bg-white pb-4">
                <ul class="list-inline mb-0 mx-auto">
                  <li class="list-inline-item">
                    <span class="badge badge-secondary badge-pill">Rails</span>
                  </li>
                  <li class="list-inline-item">
                    <span class="badge badge-secondary badge-pill">jQuery</span>
                  </li>
                  <li class="list-inline-item">
                    <span class="badge badge-secondary badge-pill">
                      PostgresSQL
                    </span>
                  </li>
                  <li class="list-inline-item">
                    <span class="badge badge-secondary badge-pill">
                      HTML/LESS
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="card rounded-0 border-0 shadow-sm mb-5 mb-lg-0">
              <div class="card-img-container position-relative">
                <img
                  class="card-img-top rounded-0"
                  src="assets/images/projects/project-3-thumb.jpg"
                  alt=""
                />
                <div class="card-img-overlay overlay-logo text-center">
                  <div class="project-logo">
                    <img
                      class="img-fluid w-50"
                      src="assets/images/logos/logo-3-inverse.svg"
                    />
                  </div>
                </div>
                <a
                  class="card-img-overlay overlay-content text-left p-lg-4"
                  href="project.html">
                  <h5 class="card-title font-weight-bold">Client: Airbnb</h5>
                  <p class="card-text">
                    Project summary goes here. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Quisque vel sapien quis nulla
                    dictum euismod...
                  </p>
                </a>
              </div>
              <div class="card-body pb-0">
                <h4 class="card-title text-truncate text-center mb-0">
                  <a href="project.html">Mobile app development</a>
                </h4>
              </div>

              <div class="card-footer border-0 text-center bg-white pb-4">
                <ul class="list-inline mb-0 mx-auto">
                  <li class="list-inline-item">
                    <span class="badge badge-secondary badge-pill">React</span>
                  </li>
                  <li class="list-inline-item">
                    <span class="badge badge-secondary badge-pill">Python</span>
                  </li>
                  <li class="list-inline-item">
                    <span class="badge badge-secondary badge-pill">MySQL</span>
                  </li>
                  <li class="list-inline-item">
                    <span class="badge badge-secondary badge-pill">
                      Webpack
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center">
          <a class="btn btn-primary" href="projects.html">
            View all projects
          </a>
        </div>
      </div>
    </section>
  );
}
