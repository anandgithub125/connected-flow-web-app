import object from '../assests/img/home/object.svg';
import object1 from '../assests/img/home/object1.svg';

const CTA = () => {
  return (
    <>
      <section className='e-cta'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-7 col-md-7 col-sm-9 col-9 offset-md-2 offset-lg-2 pt-4 mt-5'>
              <h2 className='e-start'>Start securing your domains at ₹999</h2>
            </div>
            <div className='col-lg-3 col-md-3 col-sm-3 col-3 text-end pt-0'>
              <img className='img-fluid e-object1' src={object1} alt='Web app object1' />
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-4 col-sm-3 col-3 p-0'>
              <img className='img-fluid e-object' src={object} alt='Web app object' />
            </div>
            <div className='col-lg-8 col-md-8 col-sm-9 col-9 ps-5 pt-5'>
              <button type='button' className='e-started-btn '>Get Started</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CTA;