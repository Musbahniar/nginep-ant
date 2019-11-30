import React, { Component } from 'react';
import { Menu, Icon, Row  } from 'antd';

const { SubMenu } = Menu;


class MenuAtas extends Component {
  state = {
    current: 'mail',
  };
  
  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };
  
  render() {
  return (
    <Row justify="center">
    <Menu 
      onClick={this.handleClick} 
      selectedKeys={[this.state.current]} 
      mode="horizontal"
      >
        <Menu.Item key="mail">
          <Icon type="home" />
          Beranda
        </Menu.Item>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Icon type="setting" />
              Navigation Three - Submenu
            </span>
          }
        >
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            Tentang Aplikasi
          </a>
        </Menu.Item>
    </Menu>
    </Row>
    );
  }
}

export default MenuAtas;