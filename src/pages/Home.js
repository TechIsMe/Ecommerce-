import React ,{useState, useEffect} from 'react';
import Helmet from '../components/Helmet/Helmet';
import '../styles/Home.css';
import { motion } from 'framer-motion';
import products from '../assets/data/products'
import { Link } from 'react-router-dom';
import {Container, Row, Col} from 'reactstrap';
import px from '../assets/images/px.webp';
import counterImg from '../assets/images/counterImg.jpg'
// import hero from '../assets/images/hero.jpg'
// import Services from '../services/Services';
import ProductsList from '../components/UI/ProductsList';
import Clock from '../components/UI/Clock';
import Caris from '../components/UI/Caris'


const Home = () => {

  const [trendingProducts, setTrendingProducts] = useState([])
  const [bestSaleProducts, setBestSaleProducts] = useState([])
  const [shoesProduct, setShoesProducts] = useState([])
  const [jewelry, setJewleryProducts] = useState([])

  // const year = new Date().getFullYear();

  useEffect(()=> {

    const filteredTrendingProducts = products.filter(
      (item)=>item.category === 'bag'
      );

      const filteredBestSaleProducts = products.filter(
        (item)=>item.category === 'accessories'
        );
  
        const filteredShoesProducts = products.filter(
          (item)=>item.category === 'shoes'
          );
  
          const filteredJewleryProducts = products.filter(
            (item)=>item.category === 'jewlery'
            );
      
      setTrendingProducts(filteredTrendingProducts)
      setBestSaleProducts(filteredBestSaleProducts)
      setShoesProducts(filteredShoesProducts)
      setJewleryProducts(filteredJewleryProducts)


  },[])
  return (
    <Helmet title={'Home'}>
      <section className="hero-section">
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className='hero-content'>
                  {/* <p className="hero-subtitle">Trending Product {year}</p> */}
                  <h2>Make Your Bag Destination Here</h2>
                  <p> Come shop our new designer arrivals  bags and shoes</p>

                  <motion.button whileTap={{scale:1.2}} className='buy-btn'><Link to='/shop'>SHOP NOW</Link></motion.button>
              </div>
            </Col>
              <Col lg='6' md='6'>
                <div className="hero-img">
                  {/* <img src={shoess} alt="" /> */}
                  {/* <motion.img whileHover={{scale: 0.9}} src={px} alt="" /> */}
                  <img src={px} alt="" />

                  {/* <img src={hero} alt="" /> */}
                </div>
              </Col>
          </Row>
        </Container>
        <Caris/>
      </section>
      {/* <Caris /> */}
      {/* <Services/> */}
      <section className="trending-products">
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className="section-title">SHOP BY BRAND</h2>
            </Col>
            <ProductsList data={trendingProducts}/>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
        <Row>
            <Col lg='12' className='text-center'>
              <h2 className="section-title">Best Sales</h2>
            </Col>
            <ProductsList data={bestSaleProducts}/>

          </Row>
        </Container>
      </section>

    

      <section className='timer-count'>
        <Container>
        <Row>
            <Col lg='6' md='6'>
              <div className='clock-top-content'>
              <h3  className='text-white fs-6 mb-2'>Limited Offers</h3>

                <h4 className='text-white fs-6 mb-3'>CONSIGN YOUR BAGS WITH DRESS</h4>
              </div>
              <Clock />

              <motion.button whileTap={{scale:1.2}} className='buy-btn store-btn'>
                <Link to='/shop'>Visit Our Store</Link>
              </motion.button>
            </Col>

            <Col lg='6' md='6' className='text-end'>
              <img src={counterImg} alt=''/>
            </Col>
          </Row>
        </Container>

      </section>

      <section>
        <Container>
        <Row>
            <Col lg='12' className='text-center mb-3'>
              <h2 className="section-title">New Arrivals</h2>
            </Col>
            <ProductsList data={shoesProduct}/>
            <ProductsList data={jewelry}/>
          </Row>
        </Container>
      </section>

      <section className='popular-category'>
        <Container>
        <Row>
            <Col lg='12' className='text-center'>
              <h2 className="section-title">Popular Items</h2>
            </Col>
            {/* <ProductsList data={jewelry}/> */}
          </Row>
        </Container>
        <Caris/>

      </section>
    </Helmet>
    
  )
}

export default Home;