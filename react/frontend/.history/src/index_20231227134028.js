import React from 'react'
import ReactDOM from 'react-dom'

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
        // console.log(event.target.value);
        }
    handleSubmit(event) {
        alert('A name was submitted: ' + this.input.current.value);
        event.preventDefault();
        console.log(event.target.value);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <label>
                Name:
                <input type='text'
                    value={this.state.value} onChange={this.handleChange}/>
            </label>
            <input type="submit" value="Submit" />
            </form>
        );
        }
}

ReactDOM.render(
    <NameForm/>,
    document.getElementById('root')
    )