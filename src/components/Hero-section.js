import Ikbal1 from '../assests/img/home/ikbal1.svg';
import Ikbal2 from '../assests/img/home/ikbal2.svg';

import Figure from './Figure'
import Feature from './Feature'
import Partners from './Partners'
import Stories from './Customer Stories'
import Footer from './Footer';
import CTA from './CTA';
import Business from './Business Figures Section';
import Header from './Header';

const Hero = () => {
  return (
    <>
      <div className='e-hero-section'>
        <div className='container'>
          <>
            <Header />
          </>
          <div className='row pt-5 mt-5'>
            <div className='col-lg-8 offset-lg-2'>
              <h1>Detect & auto-resolve domain threats with us</h1>
              <h5>Advanced domain security that auto resolves domain encroachments, look alikes & also secures your social media accounts </h5>
            </div>
          </div>
        </div>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-1 col-md-1'>
              <img className='img-fluid e-ikbal1' src={Ikbal1} alt='' />
            </div>
            <div className='col-lg-7 col-md-7'>
              <div className='input-group e-input-form'>
                <input type='search' className=' e-domain' placeholder='Enter your domain' aria-label='Search' aria-describedby='search-addon' />
                <button type='button' className='btn e-verify-btn'>Verify Domain</button>
              </div>
            </div>
            <div className='col-lg-4 col-md-4 text-end pb-0 pe-0'>
              <img className='img-fluid e-ikbal2' src={Ikbal2} alt='' />
            </div>
          </div>
        </div>
      </div>
      <>
        <Figure />
      </>
      <>
        <Business />
      </>
      <>
        <Feature />
      </>
      <>
        <Partners />
      </>
      <>
        <Stories />
      </>
      <>
        <CTA />
      </>
      <>
        <Footer />
      </>
    </>
  );
}

export default Hero;