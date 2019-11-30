import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nginep from './component/nginep';
import MenuAtas from './component/menu';
import Header from './component/header';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      homestays: [],
      allHomestays: [],
      selectedHomestay: null,
      search: ""
    };
  }

  componentDidMount() {
    fetch("https://raw.githubusercontent.com/algosigma/js-reactjs/master/homestays.json")
      .then(response => response.json())
      .then((data) => {
        this.setState({
          homestays: data,
          allHomestays: data
        });
      })
  }


  render() {
    
  return (
    <React.Fragment>
      <Header />
      <MenuAtas />
      {
        this.state.homestays.map((homestays) => {
          return <Nginep
                  key={homestays.id}
                  homestays={homestays}
                  />
        })
      }
    </React.Fragment>
  );
  }
}

export default App;
