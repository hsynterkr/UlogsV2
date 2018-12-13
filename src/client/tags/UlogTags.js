import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, FormattedNumber, FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import topics from '../helpers/ulogTopics';
import { getTrendingTags } from '../helpers/apiHelpers';
import Loading from '../components/Icon/Loading';
import './UlogTags.less'

@injectIntl
export default class UlogTags extends React.Component {
  state = {
    order: 'name',
    tags: {},
  }

  constructor(props) {
    super(props);
    this.onChangeSort = this.onChangeSort.bind(this);
  }

  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve)
    });
  }

  async componentDidMount() {
    await this.renderTags();
  }

  shouldComponentUpdate(nextProps, nextState) {
    const res = this.state !== nextState;
    return res;
  }

  onChangeSort = (e, order) => {
    e.preventDefault();
    this.setState({ order: order });
  }

  compareTags = (a, b, type) => {
    switch (type) {
      case 'name':
        return a.get('name').localeCompare(b.get('name'));
      case 'posts':
        return parseInt(a.get('top_posts')) <=
          parseInt(b.get('top_posts'))
          ? 1
          : 1;
      case 'comments':
        return parseInt(a.get('comments')) <=
          parseInt(b.get('comments'))
          ? 1
          : 1;
      case 'payouts':
        return parseInt(a.get('total_payouts')) <=
          parseInt(b.get('total_payouts'))
          ? 1
          : -1;
    }
  };

  renderTags = async() => {
    try {
      var reqNum = 0;
      var arr = await getTrendingTags();
      var catarr = arr.filter(function(el) {
          return topics.includes(el.name);
        });
      var last = arr[arr.length - 1].name;
      while (catarr.length < topics.length && reqNum < 10)
      {
        arr = await getTrendingTags(last);
        last = arr[arr.length - 1].name;
        var arrtwo = arr.filter(function(el) {
            return topics.includes(el.name);
          });
        catarr = catarr.concat(arrtwo);
        reqNum++;
      }

      await this.setStateAsync({tags: catarr});
    } catch (err) {
      console.log(err.message);
    }
  }

  render() {
    const { order } = this.state.order;
    const tags = this.state.tags;
    if(!Array.isArray(tags) || !tags.length )
    {
      return (
        <div style={{marginTop: '25px'}}><Loading/></div>
      )
    } else {
      const rows = tags
        .sort((a, b) => {
          return this.compareTags(a, b, order);
        })
        .map(tag => {
          const name = tag.name;
          const link = `/trending/${name}`;
          return (
            <tr key={name}>
              <td>
                <Link to={link}>
                  {name}
                </Link>
              </td>
              <td>
                <FormattedNumber value={tag.top_posts.toString()}/>
              </td>
              <td>
                <FormattedNumber value={tag.comments.toString()}/>
              </td>
              <td>
                <FormattedNumber value={tag.total_payouts.toString().slice(0, -4)}/> SBD
              </td>
            </tr>
          );
        });

      const cols = [
        ['name', <FormattedMessage id='tag_col' defaultMessage='Tags'/>],
        ['posts', <FormattedMessage id='posts_col' defaultMessage='Posts'/>],
        ['comments', <FormattedMessage id='comments_col' defaultMessage='Comments'/>],
        ['payouts', <FormattedMessage id='payouts_col' defaultMessage='Total Payouts'/>],
      ].map(col => {
        return (
          <th key={col[0]}>
            {order === col[0] ? (
              <strong>{col[1]}</strong>
            ) : (
              <Link to="#" onClick={e => this.onChangeSort(e, col[0])}>
                {col[1]}
              </Link>
            )}
          </th>
        );
      });

      return (
        <div className="ulogTags row">
          <div className="column">
            <br/>
            <h3 className="ulogheader">Trending Ulog Subtags and Communities</h3>
            <table>
              <thead>
                <tr>{cols}</tr>
              </thead>
              <tbody>{rows}</tbody>
            </table>
          </div>
        </div>
      );
    }
    }
}
