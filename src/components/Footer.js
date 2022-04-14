import logo1 from '../assests/img/home/logo1.svg'
import facebook from '../assests/img/home/facebook.svg'
import twitter from '../assests/img/home/twitter.svg'
import youtube from '../assests/img/home/youtube.svg'
import linkedin from '../assests/img/home/linkedin.svg'

const Footer = () => {
  return (
    <>
      <section className='e-footer'>
        <div className='container'>
          <div className='row '>
            <div className='col-lg-1 col-md-1 col-sm-1 col-1'>
              <a href='#'><img className='e-logo' src={logo1} alt='Web app Logo' /></a>
            </div>
            <div className='col-lg-2 col-md-2 col-sm-2 col-2'>
              <h4>COMPANY</h4>
              <p><a href=''></a>Home</p>
              <p><a href=''></a>About</p>
              <p><a href=''></a>Pricing</p>
            </div>
            <div className='col-lg-2 col-md-2 col-sm-2 col-2'>
              <h4>CONTACT</h4>
              <p><a href=''></a>Contact Us</p>
              <p><a href=''></a>Call: +91 5478145632</p>
              <p><a href=''></a>FAQ</p>
            </div>
            <div className='col-lg-2 col-md-2 col-sm-2 col-2'>
              <h4>LEGAL</h4>
              <p><a href=''></a>Terms & Conditions</p>
              <p><a href=''></a>Privacy Policy</p>
              <p><a href=''></a>UDRP Policy</p>
            </div>
            <div className='col-lg-5 col-md-5 col-sm-5 col-5 text-end pb-0'>
              <div className='e-social-media'>
                <a href='https://www.facebook.com/EvoqueInnovativeLab/'>
                  <i><img className='img-fluid e-media pe-5' src={facebook} alt='Web app Facebook' /></i>
                </a>
                <a href='https://twitter.com/EvoqueInnov'>
                  <i><img className='img-fluid e-media pe-5' src={twitter} alt='Web app Twitter' /></i>
                </a>
                <a href=''>
                  <i><img className='img-fluid e-media pe-5' src={youtube} alt='Web app YouTube' /></i>
                </a>
                <a href='https://www.linkedin.com/company/team-evoque'>
                  <i><img className='img-fluid e-media' src={linkedin} alt='Web app Linkedin' /></i>
                </a>
              </div>
            </div>
          </div>
          <hr />
          <div className='row pt-3 pb-5'>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <span>© 2021 CollectSwap. All rights reserved.</span>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 text-end e-evoque-link'>
              <span>Powered by <a className='link-secondary' href='#'>Evoque Innovative Lab</a></span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;