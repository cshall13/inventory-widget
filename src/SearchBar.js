// Required Dependencies
import React, { Component } from 'react';

class SearchBar extends Component{
    render(){
        // console.log(this.props.products)
        return(
            <form className="search-bar">
                <input type="text" placeholder="Search..." />
                <div>
                    <input type="checkbox" />&nbsp;Only show products in stock
                </div>
            </form>
        )
    }
}

export default SearchBar