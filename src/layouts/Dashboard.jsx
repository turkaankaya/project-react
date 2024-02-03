import React from 'react';
import Categories from "./Categories";
import ProductList from '../pages/ProductList';
import {  Grid, } from 'semantic-ui-react'
import { Route, Routes } from 'react-router-dom';
import ProductDetails from '../pages/ProductDetails';
import CartDetails from '../pages/CartDetails';

export default function Dashboard() {
    return (
        <div>
            <Grid >
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Categories />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Routes>
                      <Route exact path='/' element = {<ProductList/>}/>
                      <Route exact path='products' element = {<ProductList/>}/> 
                      <Route exact path='products/:name' element = {<ProductDetails/>} />
                      <Route path='/Cart' element = {<CartDetails/>} />
                    </Routes>
                    </Grid.Column>
                </Grid.Row>
            </Grid>


        </div>
    )
}
