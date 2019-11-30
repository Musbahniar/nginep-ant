import React, { Component } from 'react';
import { Row, Col, Card, Input  } from 'antd';
import GoogleMapReact from 'google-map-react';
import logo from './logo.svg';
import './App.css';
import Nginep from './component/nginep';
import MenuAtas from './component/menu';

const { Search } = Input;
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

  handleCari = (value) => {
    this.setState({
      homestays: this.state.allHomestays.filter((homestays) => 
        new RegExp(value,"i").exec(homestays.nama))
    })
  }

  render() {
    let center = {
      lat: -7.795424,
      lng: 110.371754
    }

  return (
    <React.Fragment>
      <MenuAtas />
      <br />

      <Row>
        <Col span={14}>
        <Row type="flex" justify="center">
          <Col span={22}>
            <Search
              placeholder="input search text"
              // onSearch={value => console.log(value)}
              onSearch={value => this.handleCari(value)}
            />
          </Col>
        </Row>
        <br />
          <Nginep homestays={this.state.homestays}/>
        </Col>
        <Col span={10} style={{backgroundColor:'blue'}}>
        <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDhRn3Bp2cpbSN8xNlz1yagJ-F_S3hqnt4' }}
          defaultCenter={center}
          defaultZoom={15}
        >
        </GoogleMapReact>
        </Col>
      </Row>
    </React.Fragment>
  );
  }
}

export default App;
