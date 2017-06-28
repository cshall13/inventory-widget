/**
 */
import React, {Component} from 'react';

class MyForm extends Component{
    constructor(props){
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        //console.dir(event);
        this.setState({value: event.target.value});
        //console.log('user changed input box, added: ' + event.target.value)

    }

    handleSubmit(event) {
        console.log('User submitted form: ');
        event.preventDefault();
    }


    render() {
        console.log(this.state.value)
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}


export default MyForm;