import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Modal } from 'antd';
import { FormattedMessage, injectIntl } from 'react-intl';
import _ from 'lodash';
import UlogGamesExchangesUser from './UlogGamesExchangesUser';
import Loading from '../../components/Icon/Loading';
import steemAPI from '../../steemAPI';
import './InterestingPeople.less';
import './SidebarContentBlock.less';

@withRouter
class UlogGamesExchanges extends React.Component {
  static propTypes = {
    isFetchingFollowingList: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    authenticatedUser: {
      name: '',
    },
  };

  constructor(props) {
    super(props);

    this.state = {
      users: [],
      loading: true,
      noUsers: false,
      allUsers: [],
    };

    this.getCertifiedUloggers = this.getCertifiedUloggers.bind(this);
    this.handleUserAccountClick = this.handleUserAccountClick.bind(this);
  }

  componentDidMount() {
    if (!this.props.isFetchingFollowingList) {
      this.getCertifiedUloggers();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.isFetchingFollowingList) {
      this.getCertifiedUloggers();
    }
  }

  getCertifiedUloggers() {
    steemAPI
      .sendAsync('call', ['follow_api', 'get_following', ['uloggers', '', 'blog', 1000]])
      .then(result => {
        console.log('result', result);
        const users = _.shuffle(result)
          // .slice(0, 5)
          .map(user => {
            let name = _.get(user, 0);

            if (_.isEmpty(name)) {
              name = _.get(user, 'following');
            }
            return {
              name,
            };
          });
        if (users.length > 0) {
          this.setState({
            users,
            allUsers: result,
            loading: false,
            noUsers: false,
          });
        } else {
          this.setState({
            noUsers: true,
          });
        }
      })
      .catch(() => {
        this.setState({
          noUsers: true,
        });
      });
  }

  handleUserAccountClick(event) {
    console.log(this.state);
    event.preventDefault();
    Modal.info({
      content: (
        <div>
          <p>This DM feature is coming soon</p>
        </div>
      ),
      onOk() {},
    });
  }

  render() {
    const { users, loading, noUsers, visible } = this.state;
    const viewRows = [
      {
        title: <FormattedMessage id="ulogs_games" defaultMessage="Ulogs-Games" />,
        users,
        id: 'ulogs_games',
      },
      {
        title: <FormattedMessage id="uloggerstv" defaultMessage="UloggersTV" />,
        users,
        id: 'uloggerstv',
      },
      {
        title: <FormattedMessage id="buy_sell_steem" defaultMessage="Buy/Sell Steem" />,
        users,
        id: 'buy_sell_steem',
      },
    ];
    if (noUsers) {
      return <div />;
    }

    if (loading) {
      return <Loading />;
    }

    return (
      <div className="SidebarContentBlock">
        {viewRows.map(row => (
          <div key={row.id}>
            <h4 className="SidebarContentBlock__title">{row.title}</h4>
            <div
              className="SidebarContentBlock__content"
              style={{ textAlign: 'center', overflowX: 'auto', width: '260px', display: 'flex' }}
            >
              {row.users &&
                users.map(user => (
                  <UlogGamesExchangesUser
                    key={user.name}
                    user={user}
                    handleUserAccountClick={this.handleUserAccountClick}
                  />
                ))}
            </div>
          </div>
        ))}

        <Modal title="Title" visible={visible} onOk={this.handleOk} onCancel={this.handleOk}>
          <p>This DM feature is coming soon</p>
        </Modal>
      </div>
    );
  }
}

export default injectIntl(UlogGamesExchanges);
