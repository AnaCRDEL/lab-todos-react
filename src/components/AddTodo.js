import { Component } from "react";
import axios from "axios";

class AddTodo extends Component {
    state = {
        title: ''
    };

    handleChange = (event) => {
        let value = event.target.value;
        this.setState({
            title: value,
        });
    };      
    
    handleSubmit = () => {
        axios.post('http://localhost:5000/todos', this.state)
    };

    render() {
        return (
            <div className='form-div'>
                <form className='form' onSubmit={this.handleSubmit}>
                <input className='input-form' type="text" name="title" value={this.state.title} onChange={this.handleChange} />
              
                <button className='add-button' type='submit'>Adicionar</button>
                </form>
            </div>
        )
    }
}

export default AddTodo;