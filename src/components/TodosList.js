import AddTodo from "./AddTodo";
import axios from "axios";

const { Component } = require("react");


class TodosList extends Component {
    state = {
        todos: [],
    };

    getAPI = async () => {
        const getTodos = await axios.get('http://localhost:5000/todos');
        this.setState({
          todos: getTodos.data
        });
    };

    componentDidMount = async () => {
        await this.getAPI();
    };

    handleCheck = async (event) => {
        await axios.put(`http://localhost:5000/todos/${event.target.id}`, 
        {
            'title': event.target.name,
            'completed': event.target.checked
        })
        await this.getAPI();
    };

    onClick = async (event) => {
        await axios.delete(`http://localhost:5000/todos/${event.target.id}`);
        await this.getAPI();
    };

    render() {
        return(
            <>
                <div className='navbar'>
                    Todo List
                </div>
                <div>
                    <AddTodo/>
                </div>
                <div>
                    {this.state.todos.map((item) => (
                        <label className='todo-item' key={item._id}>
                            <input type="checkbox" id={item._id} name={item.title} checked={item.completed} onChange={this.handleCheck}>
                            </input>
                            {item.title}
                            <button className='delete-button' id={item._id} onClick={this.onClick}>X</button>
                            <hr className='line'/>
                        </label>
                        )
                    )}
                </div>
            </>
        )
    }
};

export default TodosList;