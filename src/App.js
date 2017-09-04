import React, { Component } from 'react';

import Nav from './views/nav/nav';
import { Menu,test } from './views/menu/menu';
import { Link } from 'react-router';

class App extends Component {
  constructor(props){
    super(props)
    this.showMenu = this.showMenu.bind(this)
  }
  showMenu(){
    this.refs.menu.show()
  }
  render() {
    return (
      <div className="Container">
        <Menu ref="menu"></Menu>
        <header>
          <p onClick={this.showMenu}>菜单</p>
          <p>
            <span></span>
            <span>译见 | </span>
            <span>新闻媒体</span>
          </p>
          <p>搜索</p>
        </header>
        <Nav></Nav>
        <div className="strip"></div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
