import React from 'react';
import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom';
import './App.scss';
import "animate.css/animate.compat.css";
import NavbarSection from './navbar/navbar';
import FooterSection from './footer/footer';
import ContactSection from './contact/ContactSection';
import Home from './pages/home/home';
import WholesalePage from './pages/wholesalepage/wholesalepage';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <div>
      <Router>
      <NavbarSection />
      <ScrollToTop/>
        <Switch>
          <Route exact path="">
            <Home />
          </Route>
          <Route path="/wholesale">
            <WholesalePage />
          </Route>
        </Switch>
        <ContactSection/>
        <FooterSection />
      </Router>
    </div>
  );
}

export default App;
