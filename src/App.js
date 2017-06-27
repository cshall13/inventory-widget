import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import data from './data.js';
import FilterableProductTable from './FilterableProductTable';

class App extends Component {
  render() {
    return (
        // console.log(data)
      <FilterableProductTable products={data.data} />
    );
  }
}

export default App;
