import React, {Component} from 'react'
import BoilingVerdict from './BoilingVerdict'
import TemperatureInput from './TemperatureInput'

// Two utility functions to convert c->f, and f->c
function fromFahrenheit(f){
    var c = (f - 32) * 5 / 9;
    var k = (f+459.67)*5/9;
    return [c, k]
}
function fromCelcius(c){
    var k = c + 273.15
    var f = (c * 9 / 5) + 32;
    return [f, k]
}
function fromKelvin(k){
    var c = k - 273.15
    var f = 1.8*(k-273.15)+32
    return [c, f]
}

// Make another utility function that tries the conversion.
// If it can, it returns the conversion rounded.
// If it can't it returns an empty string
function tryConvert(value,tUnit){
    var tryNumber = Number(value);
    if(isNaN(tryNumber)){
        //this is !!!!NOT!!!! a valid number. What is your problem user?
        return '';
    }else{
        //this is a valid number (isNAN returned false) We can convert!
        if(tUnit == 'c'){
            var convertedNumber = fromCelcius(tryNumber);
        }else if (tUnit == 'f'){
            var convertedNumber = fromFahrenheit(tryNumber);
        }else if (tUnit == 'k'){
            var convertedNumber = fromKelvin(tryNumber);
        }
        return convertedNumber;

    }

}

class Calculator extends Component {
    constructor() {
        super();
        this.state = {
            value: 32,
            scale: 'c'
        }
        this.handleCelciusChange = this.handleCelciusChange.bind(this)
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
        this.handleKelvinChange = this.handleKelvinChange.bind(this)

    }

    handleCelciusChange(value) {
        this.setState({
            scale: 'c',
            value: value
        })
    }

    handleFahrenheitChange(value) {
        this.setState({
            scale: 'f',
            value: value
        })
    }

    handleKelvinChange(value) {
        this.setState({
            scale: 'k',
            value: value
        })
    }

    render() {
        var scale = this.state.scale;
        var value = this.state.value;

        if(this.state.scale == 'c'){
            var fTemp = tryConvert(value,'c')[0];
            var cTemp = value;
            var kTemp = tryConvert(value, 'c')[1];

        }else if(this.state.scale == 'f'){
            var cTemp = tryConvert(value,'f')[0];
            var fTemp = value;
            var kTemp = tryConvert(value, 'f')[1]

        }else if(this.state.scale == 'k'){
            var fTemp = tryConvert(value,'k')[1];
            var kTemp = value;
            var cTemp = tryConvert(value,'k')[0];
            // var fTemp = value;
            // var cTemp = tryConvert(value,'f');
        }

        return(
            <div>
                <TemperatureInput
                    tUnits="Celcius"
                    value={cTemp}
                    onChange={this.handleCelciusChange}
                />
                <TemperatureInput
                    tUnits="Fahrenheit"
                    value={fTemp}
                    onChange={this.handleFahrenheitChange} />
                <TemperatureInput
                    tUnits="Kelvin"
                    value={kTemp}
                    onChange={this.handleKelvinChange} />
                {/* <TemperatureInput tUnits="Kelvin" value={kTemp} onChange={this.handleKelvinChange} /> */ }
                <BoilingVerdict temperature={Number(cTemp)} tUnit="c" />
                <BoilingVerdict temperature={Number(fTemp)} tUnit="f" />
                <BoilingVerdict temperature={Number(kTemp)} tUnit="k" />

            </div>
        )
    }
}


export default Calculator