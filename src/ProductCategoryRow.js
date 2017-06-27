// Required Dependencies
import React, { Component } from 'react';

class ProductCategoryRow extends Component{
    render(){
        // console.log(this.props.products)
        return(
            <tr>
                <th>{this.props.category}</th>
            </tr>
        )
    }
}

export default ProductCategoryRow