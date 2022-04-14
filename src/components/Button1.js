import Domain from '../assests/img/home/Domain.svg';
import facebook from '../assests/img/home/facebook.svg';
import google from '../assests/img/home/google logo.svg';
import Icon from '../assests/img/home/icon.svg';

const Button1 = () => {
  return (
    <>
      <div className='row'>
        <div className='col-lg-5'>
          <div className='e-left'>
            <button type='button' className='pt-5 e-icon2 d-inline'><img src={Icon} alt='Web app Icon' />web23</button>
            <div className='e-screen-domain'><img className='img-fluid' src={Domain} alt='Web app Icon' /></div>
          </div>
        </div>
        <div className='col-lg-7'>
          <div className='e-right'>
            <h2 className='text-center pt-5 mt-5'> Login</h2>
            <div className='card e-form-card'>
              <form>
                <div className='e-email-login'>
                  <label for='email' className='e-phone'>Email / Phone</label>
                  <input type='text' className='e-placeholder' placeholder='sarahjames@gmail.com' name='uname' required />
                  <label for='psw' className='e-phone'>Password</label>
                  <input type='password' className='e-psw' placeholder='Password' name='psw' required />
                </div>
                <div className='d-flex justify-content-between align-items-center mt-4'>
                  <div className='form-check pe-0 mb-0'>
                    <input className='e-check-input' type='checkbox' value='' id='form2Example3' />
                    <label className='e-check-label' for='form2Example3'>
                      Remember me
                    </label>
                  </div>
                  <a href='#!' className='e-forgot-text'>Forgot password?</a>
                </div>
                <button className='e-sign-btn'>Sign In</button>
                <p className='e-or-sign justify-content-center'>Or sign in with</p>
                <div className='social-login d-flex'>
                  <button className='e-google-btn d-flex me-3'>
                    <img className='img-fluid pt-2' src={google} alt='Web app Google' />
                    <p className='e-btn-text'> Google</p>
                  </button>
                  <button className='e-google-btn d-flex ms-3'>
                    <img className='img-fluid pt-2' src={facebook} alt='Web app facebook' />
                    <p className='e-btn-text'> Facebook</p>
                  </button>
                </div>
                <p className='e-or-sign'>New usre ?<span><a href='#'> Create New Account</a></span></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Button1;