import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './product.css'
export default class Product extends Component {
    render() {
        return (
            <Link to="#">
                <div class="card" style={{width: '18rem'}}>
                    <img class="card-img-top" src="http://via.placeholder.com/286x180" alt="Product"/>
                </div>
            </Link>
        )
    }
}
