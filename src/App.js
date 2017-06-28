// import dependencies
import React, { Component } from 'react';
import './App.css';
// custom imports
import data from './data.js';
import FilterableProductTable from './FilterableProductTable';
import Toggle from './Toggle.js';
import MyForm from './MyForm.js';
import Calculator from './Calculator.js';


class App extends Component {
  render() {


    return(
        <Calculator />
    )

    return(
        <MyForm />
    )


      // basic render component
    return(
        <Toggle />
    )

      // actual inventory app (the file is named after)
    return (
        // console.log(data)
      <FilterableProductTable products={data.data} />
    );
  }
}

export default App;
