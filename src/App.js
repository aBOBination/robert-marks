import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export default class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <Header />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </>
    );
  }
}
