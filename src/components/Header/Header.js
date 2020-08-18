import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <div class="header-intro theme-bg-primary text-grey py-5">
      <div class="container">
        <div class="profile-teaser media flex-column flex-md-row">
          <img
            class="profile-image mb-3 mb-md-0 mr-md-5 ml-md-0 rounded mx-auto"
            src={require('./assets/images/Marks, Bobby 5mb.jpg')}
            alt=""
          />
          <div class="media-body text-center text-md-left">
            <div class="lead">Hello, my name is</div>
            <h2 class="mt-0 display-4 font-weight-bold">Robert Marks</h2>
            <div class="bio mb-3">
              I'm a full-stack developer specialised in frontend and backend
              development for complex scalable web apps. I write about web
              development on{' '}
              <a class="link-on-bg" href="blog.html">
                my blog
              </a>{' '}
              and regularly{' '}
              <a class="link-on-bg" href="talks.html">
                speak
              </a>{' '}
              at various web conferences and meetups. Want to know how I may
              help your project? Check out my project{' '}
              <a class="link-on-bg" href="projects.html">
                case studies
              </a>{' '}
              and{' '}
              <a class="link-on-bg" href="resume.html">
                resume
              </a>
              .
            </div>
            <a
              class="theme-btn-on-bg btn font-weight-bold theme-btn-cta"
              href="contact.html">
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
