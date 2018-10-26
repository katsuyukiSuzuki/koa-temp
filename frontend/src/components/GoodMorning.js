import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class GoodMorning extends Component {
  componentDidMount = () => {
    this.props.greeting('morning');
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
)(GoodMorning);
