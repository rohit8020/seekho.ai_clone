import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '@/pages/Home';
import Navbar from '@/components/Navbar';
import Sponser from '@/pages/Home/Components/Sponser';
import Footer from '@/components/Footer';

export default function Routes() {
  return (
    <>
      <div className='sticky top-0 bg-white z-10'>
        <Navbar />
        <Sponser />
      </div>

      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}
