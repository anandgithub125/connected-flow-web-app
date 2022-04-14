const Button2 = () => {
  return (
    <>
      <div className='modal show' id='e-get-modal' tabindex='-1' aria-hidden='true'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header border-0 e-modal'>
              <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
            </div>
            <div className='modal-body '>
              <div className='container'>
                <div className='row'>
                  <h3 className='text-center e-choose'>Choose a plan</h3>
                  <div className='col-lg-4'>
                    <div className='card e-card-left text-center mt-3'>
                      <div className='card-body'>
                        <h4 className='e-card-title-h5'>Starter</h4>
                        <p className='e-card-plan'>₹999/year</p>
                        <p className='e-card-text-left'>1 Website</p>
                        <p className='e-card-text-left'>5 GB Hosting</p>
                        <p className='e-card-text-left'>Limited Support</p>
                        <button type='button' className='e-buy-btn' >Buy Now</button>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-4'>
                    <div className='card text-center e-card-middle'>
                      <div className='card-body'>
                        <div className='text-right'><button type='button' className='e-popular-btn' >Popular</button></div>
                        <h4 className='e-card-title-h5'>Premium</h4>
                        <p className='e-card-plan1'>₹1999/year</p>
                        <p className='e-card-text-middle'>1 Website</p>
                        <p className='e-card-text-middle'>5 GB Hosting</p>
                        <p className='e-card-text-middle'>Premium Support</p>
                        <button type='button' className='e-buy-btn' >Buy Now</button>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-4'>
                    <div className='card text-center e-card-left mt-3'>
                      <div className='card-body'>
                        <h4 className='e-card-title-h5'>Enterprise</h4>
                        <p className='e-card-plan'>₹2999/year</p>
                        <p className='e-card-text-left'>1 Website</p>
                        <p className='e-card-text-left'>5 GB Hosting</p>
                        <p className='e-card-text-left'>Limited Support</p>
                        <button type='button' className='e-buy-btn' >Buy Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Button2;