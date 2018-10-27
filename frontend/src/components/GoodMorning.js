import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sayGoodMorning } from '../actions/greeting';

class GoodMorning extends Component {
  componentDidMount = () => {
    this.props.sayGoodMorning();
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
  { sayGoodMorning }
)(GoodMorning);

// nori  chiken x 2 ro-sukatsu curry x 2 nikuyasi
//
//
