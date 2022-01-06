import './Home.scss';
import React from 'react';
import Nav from '../../components/nav/Nav';
import Section from '../../components/section/Section.js';

function Home() {
  return (
    <div className="HomeContainer">
      <Section />
      <Nav />
    </div>
  );
}

export default Home;
