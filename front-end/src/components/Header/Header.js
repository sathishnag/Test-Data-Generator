import React, { Component } from 'react';
import '../../components/Header/Header.css';
class Header extends Component{
constructor(props){
super(props)
}
render()
  {
    return(<div className = "header-style header-label-style">
        <label>Test Data Generator</label>
        </div>);
  }
}
export default Header;