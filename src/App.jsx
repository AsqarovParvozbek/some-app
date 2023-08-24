import React, { Component } from 'react'
import kub from './img/kub.svg'
import line from './img/lines.svg'
import './App.scss';
export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: null
    }
    console.log('constructor');
  }

randomedTodos = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        const random = Math.floor(Math.random() * 200);
        const randomTodo = json[random];
        this.setState({data: randomTodo});
      })
}


  render() {
    const { data } = this.state;
    return (
          <div className="wrapper">
      <div className="wrapper__content">
        <div className="content">
          <span>ADVICE <b># {data?.id}</b></span>
          <p>
           {data?.title}
          </p>
        </div>
        <div className="lines">
          <div className="line"></div>
          <img src={line} alt="lines" />
          <div className="line"></div>
        </div>
      </div>
      <button onClick={this.randomedTodos}>
        <img src={kub} alt="kub" />
      </button>
    </div>
    )
  }
}

