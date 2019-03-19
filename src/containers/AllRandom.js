import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import { fetchRandom } from '../actions/random';
import { getRandom } from '../selectors/random';
import PropTypes from 'prop-types';
import Random from '../components/Random';

class AllRandom extends PureComponent {
  static propTypes = {
    random: PropTypes.object.isRequired,
    fetch: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return (
      <Random random={this.props.random} onClick={this.props.onClick} />
    );
  }
}

const mapStateToProps = state => ({
  random: getRandom(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchRandom());
  },
  onClick() {
    dispatch(fetchRandom());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AllRandom);
