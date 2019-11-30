import React, { Component } from 'react';
import { Row, Col, Card  } from 'antd';
import './nginep.css';

const { Meta } = Card;

class Nginep extends Component {

  render() {
    const judul = `${this.props.homestays.nama} - Rp. ${this.props.homestays.harga}`
    const style = {
      backgroundImage: `url('${this.props.homestays.fotoUrl}')`
    };

    return (
      <React.Fragment>
        <br/>
        <Row>
          <Col span={12}>
            {/* <div className="homestay-foto" style={style}></div>
            <div className="homestay-judul">{judul}</div> */}
            <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
          </Col>
          <Col span={12}>col-12</Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Nginep;
