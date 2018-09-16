import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUseBeta } from '../../reducers';

const Redirect = ({ useBeta }) => {
  return <div />;
};

Redirect.propTypes = {
  useBeta: PropTypes.bool.isRequired,
};

export default connect(state => ({
  useBeta: getUseBeta(state),
}))(Redirect);
