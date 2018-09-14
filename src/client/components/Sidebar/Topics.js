import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Topic from '../Button/Topic';
import Loading from '../Icon/Loading';
import ulogTopics from '../../helpers/ulogTopics';
import './Topics.less';

class Topics extends React.Component {
  static propTypes = {
    favorite: PropTypes.bool,
    topics: PropTypes.arrayOf(PropTypes.string),
    maxItems: PropTypes.number,
    maxUlogTopics: PropTypes.number,
    loading: PropTypes.bool,
  };

  static defaultProps = {
    favorite: false,
    topics: [],
    maxItems: 5,
    maxUlogTopics: 7,
    loading: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      showMore: false,
      showMoreUlogTopics: false,
    };
  }

  changeVisibility(showMore) {
    this.setState({ showMore });
  }

  changeMoreUlogTopicsVisibility(showMoreUlogTopics) {
    this.setState({ showMoreUlogTopics });
  }

  render() {
    const { topics, favorite, maxItems, maxUlogTopics, loading } = this.props;

    const displayedTopics = this.state.showMore ? topics : topics.slice(0, maxItems);
    const displayedUlogTopics = this.state.showMoreUlogTopics ? ulogTopics : ulogTopics.slice(0, maxUlogTopics);

    return (
      <div className="Topics">
        <h4>
          <FormattedMessage
            id={'ulog_and_ulog_subtags'}
            defaultMessage={'Ulog & Ulog sub-tags'}
          />
        </h4>
        {loading && <Loading center={false} />}
        {!loading && (
          <ul className="Topics__list">
            {displayedUlogTopics.map(topic => (
              <li key={topic}>
                <Topic name={topic} favorite={favorite} />
              </li>
            ))}
          </ul>
        )}
        {!loading && ulogTopics.length > maxUlogTopics && !this.state.showMoreUlogTopics ? (
          <a role="button" tabIndex={0} onClick={() => this.changeMoreUlogTopicsVisibility(true)}>
            <FormattedMessage id="show_more" defaultMessage="View more" />
          </a>
        ) : null}
        {!loading && ulogTopics.length > maxUlogTopics && this.state.showMoreUlogTopics ? (
          <a role="button" tabIndex={0} onClick={() => this.changeMoreUlogTopicsVisibility(false)}>
            <FormattedMessage id="show_less" defaultMessage="View less" />
          </a>
        ) : null}
        <h4>
          <FormattedMessage
            id={favorite ? 'favorite_topics' : 'steem_hashtags'}
            defaultMessage={favorite ? 'Favorite topics' : 'Steem Hashtags'}
          />
        </h4>
        {loading && <Loading center={false} />}
        {!loading && (
          <ul className="Topics__list">
            <li key='teardrops'>
              <Topic name='teardrops' favorite={favorite} />
            </li>
            <li key='untalented'>
              <Topic name='untalented' favorite={favorite} />
            </li>
            <li key='surpassinggoogle'>
              <Topic name='surpassinggoogle' favorite={favorite} />
            </li>
            {displayedTopics.map(topic => (
              <li key={topic}>
                <Topic name={topic} favorite={favorite} />
              </li>
            ))}
          </ul>
        )}
        {!loading && topics.length > maxItems && !this.state.showMore ? (
          <a role="button" tabIndex={0} onClick={() => this.changeVisibility(true)}>
            <FormattedMessage id="show_more" defaultMessage="View more" />
          </a>
        ) : null}
        {!loading && topics.length > maxItems && this.state.showMore ? (
          <a role="button" tabIndex={0} onClick={() => this.changeVisibility(false)}>
            <FormattedMessage id="show_less" defaultMessage="View less" />
          </a>
        ) : null}
      </div>
    );
  }
}

export default Topics;
