import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Intro from './Pages/intro';
import Home from './Pages/Home';
import Login from './Pages/login';
import Register from './Pages/register';
import About from './Pages/about';
import Blog from './Pages/blog';
import Careers from './Pages/careers';
import Investment from './Pages/features/investment';
import Wealth from './Pages/features/wealth';
import Retirement from './Pages/features/retirement';
import Tax from './Pages/features/tax';
import PortfolioAllocation from './Pages/features/PortfolioAllocation.js';
import WealthPortfolioAllocation from './Pages/features/wealthPortfolioAllocation.js';
import RetirementPortfolioAllocation from './Pages/features/RetirementPortfolioAllocation.js';
import TaxPortfolioAllocation from './Pages/features/TaxPortfolioAllocation.js';
import Admin from './Pages/admin';
import MyProfile from './Pages/profile';
import Policy from './Pages/policy';
import Paytm from './Components/Paytm'
const Main = ({Profile, setProfile}) => {
  return (
  <Router>
    <div>
     <Route exact path="/">
     <Intro/>
     </Route>
      <Route exact path="/Home">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login Profile={Profile} setProfile={setProfile}/>
      </Route>
      <Route exact path="/register">
        <Register Profile={Profile} setProfile={setProfile} />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/careers">
        <Careers />
      </Route>
      <Route exact path="/blog">
        <Blog />
      </Route>
      <Route exact path="/admin">
        <Admin Profile={Profile} setProfile={setProfile} />
      </Route>
      <Route exact path="/features/investment">
        <Investment Profile={Profile} setProfile={setProfile} />
      </Route>

      <Route exact path="/features/wealth">
      <Wealth Profile={Profile} setProfile={setProfile} />
       </Route>
       
      <Route exact path="/features/retirement">
        <Retirement Profile={Profile} setProfile={setProfile} />

      </Route>

      <Route exact path="/features/tax">
        <Tax Profile={Profile} setProfile={setProfile} />

      </Route>

      <Route exact path="/profile">
        <MyProfile Profile={Profile} setProfile={setProfile} />

      </Route>

      <Route exact path="/features/PortfolioAllocation">
        <PortfolioAllocation Profile={Profile} setProfile={setProfile} />

      </Route>
      <Route exact path="/features/wealthPortfolioAllocation">
        <WealthPortfolioAllocation Profile={Profile} setProfile={setProfile} />

      </Route>
      <Route exact path="/features/RetirementPortfolioAllocation">
        <RetirementPortfolioAllocation Profile={Profile} setProfile={setProfile} />

      </Route>

      <Route exact path="/features/TaxPortfolioAllocation">
        <TaxPortfolioAllocation Profile={Profile} setProfile={setProfile} />

      </Route>

      <Route exact path="/policy">
        <Policy />
      </Route>

      <Route exact path="/paytm">
        <Paytm />
      </Route>

    </div>
  </Router>
  );
}

export default Main;