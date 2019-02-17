import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { Button } from 'antd';
import { FormattedMessage } from 'react-intl';
import _ from 'lodash';
import Story from './Story';
import Loading from '../../components/Icon/Loading';
import steemAPI from '../../steemAPI';
import './InterestingPeople.less';
import './SidebarContentBlock.less';
import { Modal } from 'antd';

@withRouter
class UlogStories extends React.Component {
  static propTypes = {
    authenticatedUser: PropTypes.shape({
      name: PropTypes.string,
    }),
    match: PropTypes.shape().isRequired,
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
      showModalLogin: false
    };

    this.getCertifiedUloggers = this.getCertifiedUloggers.bind(this);
    this.showModal = this.showModal.bind(this);
    this.modalHandleOk = this.modalHandleOk.bind(this);
  }
  showModal(){
    const {showModalLogin} = this.state;
    this.setState({
      showModalLogin: !showModalLogin
    })
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
      .sendAsync('call', ['follow_api', 'get_following', ['uloggers', '', 'blog', 100]])
      .then(result => {
        const users = _.shuffle(result)
          .slice(0, 5)
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
  modalHandleOk(){
    const showModalLogin = this.state;
    this.setState({
      showModalLogin : !showModalLogin
    })
  }

  render() {
    const { users, loading, noUsers, showModalLogin } = this.state;

    if (noUsers) {
      return <div />;
    }

    if (loading) {
      return <Loading />;
    }

    return (
      <div className="SidebarContentBlock">
        <h4 className="SidebarContentBlock__title">
          <i className="iconfont icon-group SidebarContentBlock__icon" />{' '}
          <FormattedMessage id="ulog_stories" defaultMessage="Ulog Stories" />
          <button onClick={this.getCertifiedUloggers} className="InterestingPeople__button-refresh">
            <i className="iconfont icon-refresh" />
          </button>
        </h4>
        <div className="SidebarContentBlock__content" style={{ textAlign: 'center' }} >
        <Button onClick={this.showModal} type="primary" shape="circle" icon="plus-circle" size={'large'} style={{ float: 'left' }} />

          <div style={{ fontWeight: 'bold', paddingTop: 10 }}>Add A Ulog-Story</div>
          <br/>
          <div style={{ textAlign: 'left', padding: 3 }}>
            Share images, ulography, graphics, ulog-news, ulog-arts plain text etc freshly-created by you, today.
          </div>
          {users && users.map(user => <Story key={user.name} user={user} />)}
        </div>
        <Modal title="Title" visible={showModalLogin} onOk={this.modalHandleOk} onCancel={this.modalHandleOk}>
          <p>This features requires login, else sign-up</p>
        </Modal>
      </div>
    );
  }
}

export default UlogStories;
