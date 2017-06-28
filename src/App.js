// import dependencies
import React, { Component } from 'react';
import './App.css';
// custom imports
import data from './data.js';
import FilterableProductTable from './FilterableProductTable';
import Toggle from './Toggle';

class App extends Component {
  render() {


    return(
        <Toggle />
    )

    return (
        // console.log(data)
      <FilterableProductTable products={data.data} />
    );
  }
}

export default App;
