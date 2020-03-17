import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';
export default class Navbar extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    console.log(value.detailProduct);
                }}
            </ProductConsumer>
        )
    }
}