import Camera from '../assests/img/home/Camera.svg'
import Card from '../assests/img/home/Card.svg'
import cardIcon from '../assests/img/home/cardIcon.svg'

const Feature = () => {

  return (
    <>
      <section className='e-feature pb-5 pt-5'>
        <div className='container'>
          <div className='row mb-5 mt-5 '>
            <div className='col-lg-4 col-md-4'>
              <div className='card e-card'>
                <img src={Card} className='card-img-top img-fluid e-card-img' alt='Web app card' />
                <div className='card-body '>
                  <h5 className='card-title e-title '>Secure and fast</h5>
                  <p className='card-text e-text  '>See how you stack up against comparable companies in similar stages.</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-4'>
              <div className='card  e-card'>
                <img src={cardIcon} className='card-img-top img-fluid e-card-img' alt='Web app cardIcon' />
                <div className='card-body'>
                  <h5 className='card-title e-title'>24 X 7 monitoring</h5>
                  <p className='card-text e-text'>Benchmark the health of your monetization and pricing strategy.</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-4'>
              <div className='card e-card'>
                <img src={Camera} className='card-img-top img-fluid e-card-img' alt='Web app camera' />
                <div className='card-body'>
                  <h5 className='card-title e-title'>Flexible pricing</h5>
                  <p className='card-text e-text'>Audit where revenue leakage exists and where you can increase retention.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Feature;