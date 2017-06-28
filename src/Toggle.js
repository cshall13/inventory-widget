import React, {Component} from 'react'

class Toggle extends Component{
    // initializes the 'this'
    constructor(props){
        // initializes the component. if you use constructor you must use super
        super(props);
        // #####################only difference between this.state and any variable is that when it is
        // changed, React calls render again
        this.state = {
            toggleOn: true
        }
   // **** the 'this' on handleClick is referring to the "this class(above it)"****
   //      this 'this' does not apply to the function because the function has no state. the class has state
   //      bind makes keyword 'this' work in the callback, (meaning wherever handleClick is run,
   //      it is going to run the 'this' as it exists on line 17)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        // this.state belongs to the class not to the function
        this.setState({
            toggleOn: !this.state.toggleOn
        })
    }

    render(){
        if(this.state.toggleOn){
            var isToggleOn = "On"
        }else{
            var isToggleOn = "Off"
        }

        return(
            // the 'this' is the class. this function gets called when the button is clicked
            // the function is above at handleClick
            <button onClick={this.handleClick}>
                {isToggleOn}
            </button>
        )
    }
}

export default Toggle;
// exporting default toggle is exporting the class toggle, which exports the code inside
// of the class.
// the class MUST return SOMETHING