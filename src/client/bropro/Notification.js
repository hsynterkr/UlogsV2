import React from 'react';
import PropTypes from 'prop-types';

export default class Notification extends React.Component {
  static propTypes = {
    heading: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    actionlink: PropTypes.shape({
      href: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
    showNotification: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    if (this.props.showNotification) {
      this.state = {
        isHidden: false,
      };
    } else {
      this.state = {
        isHidden: true,
      };
    }

    this.hideNotification = this.hideNotification.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const shouldbehidden = !nextProps.showNotification;
    if (shouldbehidden !== this.state.isHidden) {
      this.setState({ isHidden: shouldbehidden });
    }
  }

  hideNotification() {
    this.setState({
      isHidden: true,
    });
    this.props.handleChange();
  }

  render() {
    const { heading, text, actionlink } = this.props;
    document.getElementsByTagName('body')[0].style.overflow = '';
    if (!this.state.isHidden) {
      document.getElementsByTagName('body')[0].style.overflow = 'hidden';
      window.scrollTo(0, 0);
      return (
        <div id="notification">
          <div className="content-wrapper">
            <div className="content">
              <h3>{heading}</h3>
              <p>{text}</p>
            </div>
            <div className="action">
              <a
                role="button"
                tabIndex="0"
                onClick={this.hideNotification}
                id="closeNotification"
                title="Cancel"
              >
                Cancel
              </a>
              <a href={actionlink.href} target="_blank" title={actionlink.title}>
                {actionlink.text}
              </a>
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}
