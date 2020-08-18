import React from 'react';
import './Skills.css';

export default function Skills() {
  return (
    <section className="skills py-5">
      <div className="container">
        <div className="skills-blocks mx-auto pt-5">
          <div className="row">
            <div className="skills-block col-12 col-lg-4 mb-5 mb-3 mb-lg-0">
              <div className="skills-block-inner bg-white shadow-sm py-4 px-5 position-relative">
                <h4 className="skills-cat text-center mb-3 mt-5">Frontend</h4>
                <div className="skills-icon-holder position-absolute d-inline-block rounded-circle text-center">
                  <img
                    className="skills-icon"
                    src={require('./assets/images/frontend-icon.svg')}
                  />
                </div>
                <ul className="skills-list list-unstyled text-secondary">
                  <li className="mb-2">
                    <svg
                      className="svg-inline--fa fa-check fa-w-16 mr-2 text-primary"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="check"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg="">
                      <path
                        fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </svg>{' '}
                    <i className="fas fa-check mr-2 text-primary"></i>{' '}
                    React/Redux/Angular
                  </li>
                  <li className="mb-2">
                    <svg
                      className="svg-inline--fa fa-check fa-w-16 mr-2 text-primary"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="check"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg="">
                      <path
                        fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </svg>{' '}
                    <i className="fas fa-check mr-2 text-primary"></i>{' '}
                    Javascript
                  </li>
                  <li className="mb-2">
                    <svg
                      className="svg-inline--fa fa-check fa-w-16 mr-2 text-primary"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="check"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg="">
                      <path
                        fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </svg>{' '}
                    <i className="fas fa-check mr-2 text-primary"></i> Node.js
                  </li>
                  <li className="mb-2">
                    <svg
                      className="svg-inline--fa fa-check fa-w-16 mr-2 text-primary"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="check"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg="">
                      <path
                        fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </svg>{' '}
                    <i className="fas fa-check mr-2 text-primary"></i>{' '}
                    Webpack/Gulp/Grunt
                  </li>
                  <li className="mb-2">
                    <svg
                      className="svg-inline--fa fa-check fa-w-16 mr-2 text-primary"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="check"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg="">
                      <path
                        fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </svg>{' '}
                    <i className="fas fa-check mr-2 text-primary"></i>{' '}
                    HTML/CSS/SASS/LESS
                  </li>
                </ul>
              </div>
            </div>

            <div className="skills-block col-12 col-lg-4 mb-5 mb-3 mb-lg-0">
              <div className="skills-block-inner bg-white shadow-sm py-4 px-5 position-relative">
                <h4 className="skills-cat text-center mb-3 mt-5">Backend</h4>
                <div className="skills-icon-holder position-absolute d-inline-block rounded-circle text-center">
                  <img
                    className="skills-icon"
                    src={require('./assets/images/backend-icon.svg')}
                  />
                </div>
                <ul className="skills-list list-unstyled text-secondary">
                  <li className="mb-2">
                    <svg
                      className="svg-inline--fa fa-check fa-w-16 mr-2 text-primary"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="check"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg="">
                      <path
                        fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </svg>{' '}
                    <i className="fas fa-check mr-2 text-primary"></i>{' '}
                    Python/Django
                  </li>
                  <li className="mb-2">
                    <svg
                      className="svg-inline--fa fa-check fa-w-16 mr-2 text-primary"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="check"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg="">
                      <path
                        fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </svg>{' '}
                    <i className="fas fa-check mr-2 text-primary"></i>{' '}
                    Ruby/Rails
                  </li>
                  <li className="mb-2">
                    <svg
                      className="svg-inline--fa fa-check fa-w-16 mr-2 text-primary"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="check"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg="">
                      <path
                        fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </svg>{' '}
                    <i className="fas fa-check mr-2 text-primary"></i> PHP
                  </li>
                  <li className="mb-2">
                    <svg
                      className="svg-inline--fa fa-check fa-w-16 mr-2 text-primary"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="check"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg="">
                      <path
                        fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </svg>{' '}
                    <i className="fas fa-check mr-2 text-primary"></i>{' '}
                    PostgresSQL/MySQL
                  </li>
                  <li className="mb-2">
                    <svg
                      className="svg-inline--fa fa-check fa-w-16 mr-2 text-primary"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="check"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg="">
                      <path
                        fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </svg>{' '}
                    <i className="fas fa-check mr-2 text-primary"></i> MongoDB
                  </li>
                </ul>
              </div>
            </div>

            <div className="skills-block col-12 col-lg-4">
              <div className="skills-block-inner bg-white shadow-sm py-4 px-5 position-relative">
                <h4 className="skills-cat text-center mb-3 mt-5">Others</h4>
                <div className="skills-icon-holder position-absolute d-inline-block rounded-circle text-center">
                  <img
                    className="skills-icon"
                    src={require('./assets/images/other-skills-icon.svg')}
                  />
                </div>
                <ul className="skills-list list-unstyled text-secondary">
                  <li className="mb-2">
                    <svg
                      className="svg-inline--fa fa-check fa-w-16 mr-2 text-primary"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="check"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg="">
                      <path
                        fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </svg>
                    <i className="fas fa-check mr-2 text-primary"></i> DevOps
                  </li>
                  <li className="mb-2">
                    <svg
                      className="svg-inline--fa fa-check fa-w-16 mr-2 text-primary"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="check"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg="">
                      <path
                        fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </svg>
                    <i className="fas fa-check mr-2 text-primary"></i> Unit
                    Testing
                  </li>
                  <li className="mb-2">
                    <svg
                      className="svg-inline--fa fa-check fa-w-16 mr-2 text-primary"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="check"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg="">
                      <path
                        fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </svg>
                    <i className="fas fa-check mr-2 text-primary"></i>{' '}
                    UX/Wireframing
                  </li>
                  <li className="mb-2">
                    <svg
                      className="svg-inline--fa fa-check fa-w-16 mr-2 text-primary"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="check"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg="">
                      <path
                        fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </svg>
                    <i className="fas fa-check mr-2 text-primary"></i>{' '}
                    Sketch/Balsamiq
                  </li>
                  <li className="mb-2">
                    <svg
                      className="svg-inline--fa fa-check fa-w-16 mr-2 text-primary"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="check"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg="">
                      <path
                        fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </svg>
                    <i className="fas fa-check mr-2 text-primary"></i>{' '}
                    Wordpress/Shopify
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
