import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Button, Collapse, Modal } from 'antd';
import ReactMarkdown from 'react-markdown';
import _ from 'lodash';
import UlogOverseer from './UlogOverseer';
import Loading from '../../components/Icon/Loading';
import steemAPI from '../../steemAPI';
import './InterestingPeople.less';
import './SidebarContentBlock.less';

@withRouter
class OverseeingUloggers extends React.Component {
  static defaultProps = {
    authenticatedUser: {
      name: '',
    },
  };

  constructor(props) {
    super(props);

    this.state = {
      users: [],
      userNames: [],
      loading: true,
      noUsers: false,
    };

    this.getUlogOverseers = this.getUlogOverseers.bind(this);
    this.handleUserAccountClick = this.handleUserAccountClick.bind(this);
  }

  componentDidMount() {
    this.getUlogOverseers();
  }

  getUlogOverseers() {
    steemAPI.sendAsync('get_accounts', [["ulogs"]])
      .then(users =>
        this.setState({
          users,
          loading: false,
          noUsers: false,
        })
      )
     .catch(() => {
        this.setState({
          noUsers: true,
        });
      });
  }

  handleUserAccountClick(event) {
    event.preventDefault();
    const alertText = `This feature is coming soon.`
    Modal.info({
      content: (
        <div>
          <p>
            <ReactMarkdown source={alertText} />
          </p>
        </div>
      ),
      onOk() {},
    });
  };

  render() {
    const { users, loading, noUsers } = this.state;

    if (noUsers) {
      return <div />;
    }

    if (loading) {
      return <Loading />;
    }

    return (
      <Collapse defaultActiveKey={['1']}>
        <Collapse.Panel
          header={
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <i className="iconfont icon-group SidebarContentBlock__icon" />{' '}
              <FormattedMessage id="overseeing_uloggers" defaultMessage="Overseeing Uloggers" />
              <button
                onClick={this.getUlogOverseers}
                className="InterestingPeople__button-refresh"
              >
                <i
                  className="iconfont icon-refresh"
                  style={{
                    marginRight: 15,
                  }}
                />
              </button>
            </div>
          }
          key="1"
        >
          <div
            className="SidebarContentBlock__content"
            style={{ textAlign: 'center', overflowY: 'auto', height: 'auto', paddingLeft: 0 }}
          >
            {users && users.map(user => <UlogOverseer key={user.name} user={user} />)}
            <Button type="primary" onClick={this.handleUserAccountClick}>Join The Community</Button>
          </div>
        </Collapse.Panel>
      </Collapse>
    );
  }
}

export default OverseeingUloggers;
