import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';

const products = [
    { id: 1, name: 'Shoes', description: 'Running Shoes', price: '$5', image: 'https://images.unsplash.com/photo-1469395446868-fb6a048d5ca3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1633&q=80' },
    { id: 2, name: 'Macbook', description: 'Apple Macbook', price: '$200', image: 'https://images.unsplash.com/photo-1616400619175-5beda3a17896?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80' }
];

const Products = () => {
    return (
        <main>
            <Grid container justify='center' spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />    
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products