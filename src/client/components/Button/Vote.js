import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { injectIntl } from 'react-intl';
import { Icon } from 'antd';
import './Follow.less';

export class FollowPure extends React.Component {
  static propTypes = {
    intl: PropTypes.shape().isRequired,
    pending: PropTypes.bool,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    isFollowed: false,
    pending: false,
    secondary: false,
    onClick: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
    };
  }


  handleClick = e => {
    e.preventDefault();
    if (this.props.pending) return;
    this.props.onClick(e);
  };

  render() {
    const { intl, pending } = this.props;

    const followingText = intl.formatMessage({ id: 'witness_vote', defaultMessage: 'Vote' });

    return (
      <button
        className={classNames('Follow')}
        onClick={this.handleClick}
      >
        {pending && <Icon type="loading" />}
        {followingText}
      </button>
    );
  }
}

export default injectIntl(FollowPure);
