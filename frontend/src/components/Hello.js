import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Hello extends Component {
  componentDidMount = () => {
    this.props.greeting('hello');
  };

  render() {
    return <div>{this.props.gre}</div>;
  }
}

const mapStateToProps = state => {
  return { gre: state.greeting };
};
export default connect(
  mapStateToProps,
  actions
)(Hello);
