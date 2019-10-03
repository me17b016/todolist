import React, {Component} from 'react';
import './App.css';
import {TaskList} from './TaskList';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newitem:"",
      tasks : []
    }
  }
  updateInput(key, value) {
    this.setState({
      [key] : value
    });
  }
  deleteItem(id) {
    const li = [...this.state.tasks];
    const updatedList = li.filter(item => item.id != id);
    this.setState({
      tasks : updatedList
    });
  }
  addItem() {
    // create new item with unique id
    const newItem = {
      id : 1 + Math.random(),
      value: this.state.newitem.slice()
    };
    // copy of current element of tasks
    const list = [...this.state.tasks];

    // adding new element in the list
    list.push(newItem);
    // set our new state
    this.setState({
      newitem: "",
      tasks : list
    });
  }
  render() {
    const {tasks} = this.state;
    return (
      <div className="App">
        <div>
          Add an item..
          <br/>
          <input type = "text"
                placeholder = "type item here.."
                value = {this.state.newitem}
                onChange = {e => this.updateInput("newitem", e.target.value)}
                />
          <button
            onClick = {() => this.addItem()}
          >
            Add
          </button>
          <br/>
          <ul>
            {this.state.tasks.map(items => {
              return(
                  <li key = {items.id}>
                    {items.value}
                  <button
                    onClick = {()=>this.deleteItem(items.id)}
                  > X 
                  </button>
                  </li>
              )
            })}
          </ul>

        </div>
      </div>
    )
  };
}

export default App;
