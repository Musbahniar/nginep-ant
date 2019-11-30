import React, { Component } from 'react';
import { Row, Col, Card, Skeleton, Switch } from 'antd';
import './nginep.css';

const { Meta } = Card;


class Nginep extends Component {
  state = {
    loading: false,
  };

  onChange = checked => {
    this.setState({ loading: !checked });
  };

  handleClick = () => {
    console.log('click:');
  }
  render() {
    const { loading } = this.state;

    return (
      <React.Fragment>
        <Row gutter={[8, 8]}>
          {this.props.homestays.map((homestays) => {
            const judul = `Rp. ${homestays.harga}/perMalam`
            return (
              <Col span={12} key={homestays.id} >
                <Card hoverable loading={loading} onClick={this.handleClick}>
                  <div className="custom-image">
                    <img alt="example" width="100%" src={homestays.fotoUrl} />
                  </div>
                  <Meta title={homestays.nama} description={judul} />
                </Card>
              </Col>
            )
          })
          }
          {/* this.setState({ loading: false })  */}
        </Row>
      </React.Fragment>
    );
  }
}

export default Nginep;
