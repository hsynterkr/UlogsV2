/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import PropTypes from 'prop-types';
import { Collapse, Button, Icon } from 'antd';
import { injectIntl, FormattedMessage } from 'react-intl';
import ReactMarkdown from 'react-markdown';
import { generic } from '../helpers/ulogCaptions';

@injectIntl
class UlogGenericCaption extends React.Component {
  static propTypes = {
    category: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const category = this.props.category;
    const about = `About #${category}`;

    return (
      <div className="ulog-quotes">
        <Collapse defaultActiveKey={['1']}>
          <Collapse.Panel header={about} key="1">
            <ReactMarkdown source={generic} />
            <div
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '10px',
              }}
            >
              <Button
                type={'primary'}
                href='/main-editor'
              >
                <FormattedMessage id="post_now" defaultMessage="Post now" />
              </Button>
            </div>
          </Collapse.Panel>
        </Collapse>
      </div>
    );
  }
}

export default UlogGenericCaption;
