import React, { Component } from 'react';
import '../../components/Button/Butonn.css';
import Select from 'react-select';
import loadUserData from '../../actions/DashBoard/dashboard';
import { connect } from 'react-redux';
import '../../containers/DashBoard/DashBoard.css';

class DashBoard extends Component {

  constructor(props){
    super(props);
    console.log(this.props)
  }

  options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' },
    { value: 'three', label: 'Three' },
    { value: 'foure', label: 'four' },
    { value: 'five', label: 'five' }
  ];

  render() {
    return (
      <div className="App">
        <Select className="select-width" options={this.options}>
        </Select>
        <button
        className="btn btn-default btn-width"
        //TODO remove "mockData" and "pass" query param
        onClick={this.props.loadData}></button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return{
 // todo:appState.initialValue
  }
}
const mapDispatchToProps = {
  loadData:loadUserData
}
export default connect(mapStateToProps,mapDispatchToProps)(DashBoard);
