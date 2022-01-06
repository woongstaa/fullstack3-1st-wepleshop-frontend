import './Home.scss';
import React from 'react';
import Nav from '/Users/hyosangpark/Desktop/wecode/fullstack3-1st-wepleshop-frontend/src/components/nav/Nav.js';
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
