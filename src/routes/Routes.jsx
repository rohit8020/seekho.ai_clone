import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '@/pages/Home';
import Navbar from '../components/Navbar/index';
import Sponser from '@/pages/Home/Components/Sponser';
import Footer from '@/components/Footer';

export default function Routes() {
  const [NavbarActive,setNavbarActive] = useState(false);

  return (
    <>
      <div className='sticky top-0 bg-white z-10'>
        <Navbar NavbarActive={NavbarActive} setNavbarActive={setNavbarActive} />
        <Sponser />
      </div>
  
  
  <div className={`bg-white text-center fixed ${NavbarActive ? 'w-screen opacity-100' : 'w-0 opacity-0'} transition-all duration-200 ease-linear`}
      style={{
        zIndex :'20',
        height: '100vh',
      }}
      >
        
        <ul>
          <li className=' pt-5'>
            Lorem, ipsum dolor.
          </li>
          <li className=' pt-5'>
            Lorem, ipsum dolor.
          </li>
          <li className=' pt-5'>
            Lorem, ipsum dolor.
          </li>
          <li className=' pt-5'>
            Lorem, ipsum dolor.
          </li>
        </ul>
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
