import stick from '../assests/img/home/stick.svg'

const Stories = () => {

  return (
    <>
      <section >
              <div id='carouselExampleDark' className='carousel carousel-dark slide' data-bs-ride='carousel'>
                <div className='carousel-indicators'>
                  <button type='button' data-bs-target='#carouselExampleDark' data-bs-slide-to='0' className='active' aria-current='true' aria-label='Slide 1'></button>
                  <button type='button' data-bs-target='#carouselExampleDark' data-bs-slide-to='1' aria-label='Slide 2'></button>
                  <button type='button' data-bs-target='#carouselExampleDark' data-bs-slide-to='2' aria-label='Slide 3'></button>
                </div>
                <div className='carousel-inner'>
                  <div className='carousel-item active' data-bs-interval='10000'>
                    <div className='e-story'>
                      <div className='container'>
                        <div className='row'>
                          <div className='col-lg-7 col-md-8 col-sm-8'>
                            <h5 className='e-customer'>Customer Stories</h5>
                            <p className='e-excellent pt-3'>“Excellent monitoring & security measures. Auto Resolve is the best”</p>
                            <div className='row pt-4'>
                              <div className='col-lg-1'>
                                <img src={stick} className=' img-fluid e-stick ' alt='Web app stick' />
                              </div>
                              <div className='col-lg-11 col-md-8'>
                                <p className='e-sam'>Sam Worthington</p>
                                <p className='e-ceo'>CEO, Techworks</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='carousel-item ' data-bs-interval='1110000'>
                  <div className='e-story'>
                      <div className='container'>
                        <div className='row'>
                          <div className='col-lg-7 col-md-8 col-sm-8'>
                            <h5 className='e-customer'>Customer Stories</h5>
                            <p className='e-excellent pt-3'>“Excellent monitoring & security measures. Auto Resolve is the best”</p>
                            <div className='row pt-4'>
                              <div className='col-lg-1'>
                                <img src={stick} className=' img-fluid e-stick ' alt='Web app stick' />
                              </div>
                              <div className='col-lg-11'>
                                <p className='e-sam'>Sam Worthington</p>
                                <p className='e-ceo'>CEO, Techworks</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='carousel-item ' data-bs-interval='10000'>
                  <div className='e-story'>
                      <div className='container'>
                        <div className='row'>
                          <div className='col-lg-7 col-md-8 col-sm-8 col-9'>
                            <h5 className='e-customer'>Customer Stories</h5>
                            <p className='e-excellent pt-3'>“Excellent monitoring & security measures. Auto Resolve is the best”</p>
                            <div className='row pt-4'>
                              <div className='col-lg-1'>
                                <img src={stick} className=' img-fluid e-stick' alt='Web app stick' />
                              </div>
                              <div className='col-lg-11'>
                                <p className='e-sam'>Sam Worthington</p>
                                <p className='e-ceo'>CEO, Techworks</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
      </section>


    </>
  );
}

export default Stories;