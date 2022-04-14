import coinbase from '../assests/img/home/coinbase.svg'
import trust from '../assests/img/home/trust wallet.svg'
import quantstamp from '../assests/img/home/quantstamp.svg'
import founder from '../assests/img/home/founder funds.svg'
import block from '../assests/img/home/block stack.svg'
import metamask from '../assests/img/home/metamask.svg'

const Partners = () => {
  return (
    <>
      <section className='e-partners pt-5 mt-5 pb-4'>
        <div className='container'>
          <h3 className='d-flex justify-content-center pb-4 e-h3'>Partners & Investors</h3>
          <div className='row mb-5 pb-3'>
            <div className='col-lg-2 col-md-4 col-sm-6 col-6'>
              <div className='card e-card2' >
                <img src={coinbase} className='card-img-center img-fluid e-card2-img' alt='Web app coinbase' />
              </div>
            </div>
            <div className='col-lg-2 col-md-4 col-sm-6 col-6'>
              <div className='card e-card2' >
                <img src={trust} className='card-img-center img-fluid e-card2-img' alt='Web app trust' />
              </div>
            </div>
            <div className='col-lg-2 col-md-4 col-sm-6 col-6'>
              <div className='card e-card2' >
                <img src={quantstamp} className='card-img-center img-fluid e-card2-img' alt='Web app quantstamp' />
              </div>
            </div>
            <div className='col-lg-2 col-md-4 col-sm-6 col-6'>
              <div className='card e-card2' >
                <img src={founder} className='card-img-center img-fluid e-card2-img' alt='Web app founder' />
              </div>
            </div>
            <div className='col-lg-2 col-md-4 col-sm-6 col-6'>
              <div className='card e-card2' >
                <img src={block} className='card-img-center img-fluid e-card2-img' alt='Web app block' />
              </div>
            </div>
            <div className='col-lg-2 col-md-4 col-sm-6 col-6'>
              <div className='card e-card2' >
                <img src={metamask} className='card-img-center img-fluid e-metamask-img' alt='Web app metamask' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Partners;