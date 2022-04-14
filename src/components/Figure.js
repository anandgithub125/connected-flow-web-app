import marni1 from '../assests/img/home/marni1.svg'
import ikbal3 from '../assests/img/home/ikbal3.svg'
import badrun from '../assests/img/home/badrun.svg'
import marni2 from '../assests/img/home/marni2.svg'

const Figure = () => {

  return (
    <>
    <section className='e-figure mt-5 pt-5'>
    <div className='container'>
        <div className='row mb-5 pb-3'>
          <div className='col-lg-12'>
            <div className='card mb-3 border-0'>
              <div className='row g-0'>
                <div className='col-md-6 order-sm-first order-md-last order-last'>
                  <img src={marni1} className='img-fluid rounded-start' alt='Web app marni1' />
                </div>
                <div className='col-md-6 '>
                  <div className='card-body pt-3 mt-5'>
                    <h5 className='card-title e-card-title mb-4'>Domain Security</h5>
                    <h3 className='card-text e-card-text'>Unparalleled web security</h3>
                    <p className='card-text e-card-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et quisque sit viverra risus imperdiet dolor blandit leo. Libero nulla tempor.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row mb-5 pb-3'>
          <div className='col-lg-12'>
            <div className='card mb-3 border-0'>
              <div className='row g-0'>
                <div className='col-md-6'>
                  <div className='card-body pt-3 mt-5'>
                    <h5 className='card-title e-card-title mb-4'>Social Media Security</h5>
                    <h3 className='card-text e-card-text'>Don’t worry about social media accounts anymore</h3>
                    <p className='card-text e-card-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et quisque sit viverra risus imperdiet dolor blandit leo. Libero nulla tempor.</p>
                  </div>
                </div>
                <div className='col-md-6 order-sm-first order-last'>
                  <img src={marni2} className='img-fluid rounded-start' alt='Web app marni2' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row mb-5 pb-3'>
          <div className='col-lg-12'>
            <div className='card mb-3 border-0'>
              <div className='row g-0'>
                <div className='col-md-6 order-sm-first order-md-last order-last'>
                  <img src={badrun} className='img-fluid rounded-start' alt='Web app badrun' />
                </div>
                <div className='col-md-6'>
                  <div className='card-body pt-3 mt-5'>
                    <h5 className='card-title e-card-title mb-4'>Auto Monitor & Resolve</h5>
                    <h3 className='card-text e-card-text'>We’ve got your back without even you knowing about it</h3>
                    <p className='card-text e-card-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et quisque sit viverra risus imperdiet dolor blandit leo. Libero nulla tempor.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row mb-5 pb-3'>
          <div className='col-lg-12'>
            <div className='card mb-3 border-0'>
              <div className='row g-0'>
                <div className='col-md-6'>
                  <div className='card-body pt-3 mt-5'>
                    <h5 className='card-title e-card-title mb-4'>Free Bundled Domains</h5>
                    <h3 className='card-text e-card-text'>Get free domains bundled with a security subscription </h3>
                    <p className='card-text e-card-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et quisque sit viverra risus imperdiet dolor blandit leo. Libero nulla tempor.</p>
                  </div>
                </div>
                <div className='col-md-6 order-sm-first order-last'>
                  <img src={ikbal3} className='img-fluid rounded-start' alt='Web app ikbal3' />
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

export default Figure;