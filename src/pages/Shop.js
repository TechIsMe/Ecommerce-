import React ,{useState} from 'react';
import ProductSection from '../components/UI/ProductSection';
import { Container, Row, Col } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import '../styles/Shop.css';
import products from '../assets/data/products';
import ProductsList from '../components/UI/ProductsList'; 


const Shop = () => {

  const [productsData, setProductsData] = useState(products)

  const handleFilter = (e) =>{

    const filterValue = e.target.value;
    if(filterValue === 'bag'){
      const filteredProducts = products.filter(
        (item) => item.category === 'bag');

      setProductsData(filteredProducts)
    }


    if(filterValue === 'shoes'){
      const filteredProducts = products.filter(
        (item) => item.category === 'shoes');

      setProductsData(filteredProducts)
    }

    if(filterValue === 'accessories'){
      const filteredProducts = products.filter(
        (item) => item.category === 'accessories');

      setProductsData(filteredProducts)
    }

    if(filterValue === 'jewlery'){
      const filteredProducts = products.filter(
        (item) => item.category === 'jewlery');

      setProductsData(filteredProducts)
    }

  };


  const handleSearch = e =>{
    const searchTerm = e.target.value

    const searchedProducts = products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))

    setProductsData(searchedProducts)
}

  return (
    <Helmet title='shop'>
      <ProductSection title='products'/>
      {/* <ProductSection title={'products'}/> */}
      <section>
        <Container>
          <Row>
            <Col lg='3'md='6'>
            <div className="filter-section">
              <select onChange={handleFilter}>
                <option >Shope By Category</option>
                <option value="bag">Bags</option>
                <option value="shoes">Shoes</option>
                <option value="jewlery">jewlery</option>
                <option value="accessories">Accessories</option>
              </select>
            </div>
            </Col>
            <Col lg='3' md='6' className='text-end'>
            <div className="filter-section">
              <select>
                <option >Sort By </option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
              
              </select>
            </div>
            </Col>
            <Col lg='6' md='12'>
            <div className="search-section">
              <input type="text" placeholder='Search........' onChange={handleSearch}/>
              <span>
              <i class="ri-search-line"></i>
              </span>
            </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='pt-0'>
        <Container>
          <Row>
            {
              productsData.length === 0? (
              <h1 className='text-center fs-4'>No product are found </h1>
              ):
              (<ProductsList data={productsData}/>
              
              )}         
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Shop;