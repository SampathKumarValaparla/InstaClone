import React from 'react';
import './landingPage.css'

import { Link } from 'react-router-dom';
 
export default function Landingpage() {
  return (<>
         <section className='cont'>
           <section>
              <img src={require('../../images/aeroplane.jpg')} alt="image"/>
           </section>
           <section className='part-2'>
              <h1 className='hd'>10x Team 04</h1>
              <Link to='postview'>
              <button>Enter</button>
              </Link>
            </section>
          </section>  
          
  </>);
}
