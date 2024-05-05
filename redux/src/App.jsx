// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
//
// function App() {
//   const [count, setCount] = useState(0)
//
//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }
//
// export default App

import { Component } from 'react';
import { connect } from 'react-redux';
import * as toDoAction from './actions/toDoAction';

class App extends Component {

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            name: ''
        }
    }

    handleChange(e){
        this.setState({
            name: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        let todo = {
            name: this.state.name
        }
        this.setState({
            name: ''
        });
        // eslint-disable-next-line react/prop-types
        this.props.createToDo(todo);
    }

    // View ToDo List
    listView(data, index){
        return (
            <div className="row">
                <div className="col-md-10">
                    <li key={index} className="list-group-item clearfix">
                        {data.name}
                    </li>
                </div>
                <div className="col-md-2">
                    <button onClick={(e) => this.deleteToDo(e, index)} className="btn btn-danger">
                        Remove
                    </button>
                </div>
            </div>
        )
    }

    deleteToDo(e, index){
        e.preventDefault();
        // eslint-disable-next-line react/prop-types
        this.props.deleteToDo(index);
    }

    // Render the Form
    render() {
        let name;
        return(
            <div>
                <h1>Simple To-Do Application</h1>
                <hr />
                <div>
                    <h3>Add Task </h3>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" onChange={this.handleChange} className="form-control" value={this.state.name}/><br />
                        <input type="submit" className="btn btn-success" value="ADD"/>
                    </form>
                    <hr />
                    { <ul className="list-group">
                        {/* eslint-disable-next-line react/prop-types */}
                        {this.props.todo.map((todo, i) => this.listView(todo, i))}
                    </ul> }
                </div>
            </div>
        )
    }
}

// Manage Props
const mapStateToProps = (state) => {
    return {
        todo: state.todo
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createToDo: todo => dispatch(toDoAction.createToDo(todo)),
        deleteToDo: index => dispatch(toDoAction.deleteToDo(index))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);