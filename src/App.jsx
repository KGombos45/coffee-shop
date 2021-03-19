import React from 'react';
import {
  HashRouter as Router,
  Switch, Route
} from 'react-router-dom';
import './App.scss';
import "animate.css/animate.compat.css";
import NavbarSection from './navbar/navbar';
import FooterSection from './footer/footer';
import ContactSection from './contact/ContactSection';
import Home from './pages/home/Home';
import WholesalePage from './pages/wholesalepage/WholeSalePage';
import ScrollToTop from './components/ScrollToTop';
import AboutPage from './pages/about/AboutPage';
import VisitPage from './pages/visit/VisitPage';
import LearnPage from './pages/learn/LearnPage';


function App() {
  return (
    <div>
      <Router>
      <NavbarSection />
      <ScrollToTop/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/wholesale">
            <WholesalePage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/visit">
            <VisitPage />
          </Route>
          <Route path="/learn">
            <LearnPage />
          </Route>
        </Switch>
        <ContactSection/>
        <FooterSection />
      </Router>
    </div>
  );
}

export default App;
