import Icon from '../assests/img/home/icon.svg';
import Menu from '../assests/img/home/menu.svg';
import Button2 from './Button2';
import { Modal } from 'bootstrap';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Offcanvas } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { closeButton } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
const Header = () => {
  const openModal = () => {
    var myModal = new Modal(document.getElementById('e-get-modal'), {});
    myModal.show();
  }
  return (
    <>
      <div className='e-header container-fluid fixed-top d-md-none d-sm-none d-none d-lg-block py-3 px-5'>
        <div className='row'>
          <div className='col-lg-2'>
            <a className='e-icon d-inline' href=''><img src={Icon}
              alt='Web app Icon' />web23</a>
          </div>
          <div className='col-lg-7'>
            <ul className='nav nav-tabs justify-content-between mb-3 col-lg-6 offset-lg-3 ' id='ex1' role='tablist'>
              <li className='nav-item' role='presentation'>
                <a className='nav-link active' id='ex2-tab-1' data-bs-toggle='tab' href='#ex2-tabs-1' role='tab'
                  aria-controls='ex2-tabs-1' aria-selected='true'>Home</a>
              </li>
              <li className='nav-item' role='presentation'>
                <a className='nav-link' id='ex2-tab-2' data-bs-toggle='tab' href='#ex2-tabs-2' role='tab'
                  aria-controls='ex2-tabs-2' aria-selected='false'>About</a>
              </li>
              <li className='nav-item' role='presentation'>
                <a className='nav-link' id='ex2-tab-3' data-bs-toggle='tab' href='#ex2-tabs-3' role='tab'
                  aria-controls='ex2-tabs-3' aria-selected='false'>Pricing</a>
              </li>
              <li className='nav-item' role='presentation'>
                <a className='nav-link' id='ex2-tab-3' data-bs-toggle='tab' href='#ex2-tabs-3' role='tab'
                  aria-controls='ex2-tabs-3' aria-selected='false'>Contact</a>
              </li>
            </ul>
          </div>
          <div className='col-lg-3'>
            <Link to='/login'><button type='button' className='e-login-btn ' >Login</button></Link>
            <button type='button' className='e-get-btn ' data-bs-toggle='modal' data-bs-target='#e-get-modal' onClick={() => openModal()}>Get Started</button>
          </div>
        </div>
      </div>
      <div className='e-header-mobile d-md-block d-lg-none pb-3 pt-4'>
        <Navbar expand={false}>
          <Container fluid>
            <Navbar.Brand variant='light' className='e-icon' href='#'><img className='mr-5 mb-2  img-fluid' src={Icon} alt='Web app logo' />web23</Navbar.Brand>
            <Navbar.Toggle aria-controls='offcanvasNavba' />
            <Navbar.Offcanvas className='w-100'
              id='offcanvasNavbar'
              aria-labelledby='offcanvasNavbarLabel'
              placement='end'
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title className='e-icon' id='offcanvasNavbarLabel'><img className='mr-5 mb-2 ms-3 e-icon img-fluid' src={Icon} alt='Web app logo' />web23</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className='e-mob-menu-wrap'>
                <Nav className='justify-content-end flex-grow-1  ms-4'>
                  <Nav.Link className='e-home' href='#action1'>Home</Nav.Link>
                  <Nav.Link className='e-home' href='#action2'>About</Nav.Link>
                  <Nav.Link className='e-home' href='#action2'>Pricing</Nav.Link>
                  <Nav.Link className='e-home' href='#action2'>Contact</Nav.Link>
                </Nav>
                <Link to='/login'><div><button type='button' className='e-login-btn ' >Login</button></div></Link>
                <div> <button type='button' className='e-get-btn mt-4 ' data-bs-toggle='modal' data-bs-target='#e-get-modal' onClick={() => openModal()}>Get Started</button>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>
      <Button2 />
    </>
  );
}

export default Header;