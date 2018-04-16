import React, { Component } from 'react';

// CLASS-BASED COMPONENT
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "Melton", // this.props.name,
            placeHolder: "nothing",
            hasLoaded: false
        }
    }

    handleInputChange(value) {
        this.setState({
            text: this.state.text,
            placeHolder: this.state.placeHolder,
            newProperty: value
        })
    }

    toggleHasLoaded() {
        this.setState({
            text: this.state.text,
            placeHolder: this.state.placeHolder,
            newProperty: this.state.value,
            hasLoaded: !(this.state.hasLoaded)
        })
    }

    componentDidMount() {
        this.setState({
            text: this.state.text,
            placeHolder: this.state.placeHolder,
            newProperty: this.state.value,
            hasLoaded: true
        })
    }

    render() {
        if (!this.state.hasLoaded) {
            return (
                <React.Fragment>
                    <h1>Loading...</h1>
                    <button onClick={(event) => this.toggleHasLoaded()}> Click Me! </button>
                </React.Fragment>   
            );
        }
        else {
            return (
                <React.Fragment>
                    <h1> {this.props.name} {this.state.text} </h1>
                    <input placeholder={this.state.placeHolder} onChange={(event) => this.handleInputChange(event.target.value)} />
                    <button onClick={(event) => this.toggleHasLoaded()}> Click Me! </button>
                </React.Fragment>
            );
        }
    }
}









//FUNCTIONAL COMPONENT
// const App = (props) => {
//     return (
//         <h1> {props.name} </h1>
//     );
// }

// export default App;