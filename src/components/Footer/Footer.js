
import React from 'react';
import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
// import Logo from "../../assets/images/Logo.png"
// import dress from '../../assets/images/dress.png'

import { Link } from 'react-router-dom';

import './Footer.css';

 const Footer = () => {

  const year = new Date().getFullYear()
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='4'>
          <div className='logo'>
                {/* <img src={dress} alt=""/> */}
                <i class="ri-handbag-fill"></i>
                <div>
                  <h1 >Pursuit of Bags </h1>
                </div>
                <p className='footer-text mb-4'>
                  AS NORTH CAROLINA’S LEADING UPSCALE CONSIGNMENT SHOP
  WITH A CENTRAL RALEIGH LOCATION, Our Store OFFERS A BLEND OF
  LUXURY DESIGNER RESALE, BOUTIQUE OVERSTOCK, DESIGNER
  CONSIGNMENT, AND NEW CLOTHING AND ACCESSORIES 
                </p>
              </div>

          </Col>

          <Col lg='3'>
            <div className="footer-quick-links">
              <h4 className="quick-links-title">All Products</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Bags</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Shoes</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Accessories</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Jewlery</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg='2'>

          <div className="footer-quick-links">
              <h4 className="quick-links-title">Shop All</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/shop'>Shop</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/cart'>Cart</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/login'>Login</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/login'>Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg='3'>
          <div className="footer-quick-links">
              <h4 className="quick-links-title">Contact</h4>
              <ListGroup className='footer-contact'>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i class="ri-map-pin-line"></i></span>
                  <p>435 Whyrod, Creek South. NC</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <span><i class="ri-phone-fill"></i></span>
                  <p>+7689540932</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <span><i class="ri-mail-fill"></i></span>
                <p> PursuitofBags@gmail.com </p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg='12'>
          <p className="footer-copyright">Copyright {year} 
          .developed by Bruktawit Wold.
          </p>
          </Col>
        </Row>
      </Container>

    </footer>
  
  )
}
export default Footer