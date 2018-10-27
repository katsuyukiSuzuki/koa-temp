import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sayHello } from '../actions/greeting';

class Hello extends Component {
  componentDidMount = () => {
    this.props.sayHello();
  };

  render() {
    return <div>{this.props.greet}</div>;
  }
}

const mapStateToProps = state => {
  return { greet: state.greeting };
};
export default connect(
  mapStateToProps,
  { sayHello }
)(Hello);
