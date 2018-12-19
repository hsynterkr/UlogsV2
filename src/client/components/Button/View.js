import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { injectIntl } from 'react-intl';
import { Icon, message } from 'antd';
import './Follow.less';

export class ViewPure extends React.Component {
  static propTypes = {
    intl: PropTypes.shape().isRequired,
    isFollowed: PropTypes.bool,
    pending: PropTypes.bool,
    onClick: PropTypes.func,
    secondary: PropTypes.bool,
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

  onMouseOver = () => this.setState({ isHovered: true });

  onMouseOut = () => this.setState({ isHovered: false });

  handleClick = e => {
    e.preventDefault();
    message.success('Coming soon!', 3);
  };

  render() {
    const { intl, isFollowed, pending, secondary } = this.props;
    const { isHovered } = this.state;
    const isDangerStyles = isFollowed && (isHovered || pending);

    return (
      <button
        className={classNames('Follow', {
          'Follow--danger': isDangerStyles,
          'Follow--danger--secondary': isDangerStyles && secondary,
          'Follow--secondary': secondary,
        })}
        onClick={this.handleClick}
      >
        {pending && <Icon type="loading" />}
        {'View'}
      </button>
    );
  }
}

export default injectIntl(ViewPure);
