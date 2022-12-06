

import React from 'react';
import { Container } from 'react-bootstrap';
import '../../styles/ProductSection.css';


const ProductSection = ({title}) => {
  return (
  
    <section className='common-section'>
        <Container className='text-center'>
            <h1>{title}</h1>

        </Container>
    </section>
  
  );
};

export default ProductSection;