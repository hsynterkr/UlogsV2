import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, FormattedRelative } from 'react-intl';
import { Link } from 'react-router-dom';
import Loading from '../../components/Icon/Loading';
import { getEditorLocation } from '../../helpers/editors';
import './LastDrafts.less';
import './SidebarContentBlock.less';

const Draft = ({ draft, editorLocation }) => (
  <div className="LastDrafts__draft">
    <Link to={{ pathname: `/${editorLocation}`, search: `?draft=${draft.id}` }}>
      {draft.title ? (
        draft.title
      ) : (
        <FormattedMessage id="draft_untitled" defaultMessage="Untitled draft" />
      )}
    </Link>
    <div className="LastDrafts__draft__date">
      <FormattedRelative value={new Date(draft.lastUpdated)} />
    </div>
  </div>
);
Draft.propTypes = {
  draft: PropTypes.shape().isRequired,
  editorUrl: PropTypes.string.isRequired,
};

const LastDrafts = ({ drafts, loaded }) => {
  if (!loaded) {
    return <Loading />;
  }

  const empty = drafts.length === 0;

  return (
    <div className="LastDrafts SidebarContentBlock">
      <h4 className="SidebarContentBlock__title">
        <i className="iconfont icon-write SidebarContentBlock__icon" />{' '}
        <FormattedMessage id="last_drafts" defaultMessage="Last drafts" />
      </h4>
      <div className="SidebarContentBlock__content">
        {empty && (
          <FormattedMessage id="drafts_empty" defaultMessage="You don't have any draft saved" />
        )}
        {drafts.map(draft => {
          const editorLocation = getEditorLocation(draft.jsonMetadata.tags);
          return <Draft key={draft.id} draft={draft} editorLocation={editorLocation} />;
        })}
        {!empty && (
          <h4 className="LastDrafts__more">
            <Link to={'/drafts'}>
              <FormattedMessage id="show_more" defaultMessage="Show more" />
            </Link>
          </h4>
        )}
      </div>
    </div>
  );
};

LastDrafts.propTypes = {
  drafts: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string, title: PropTypes.string })),
  loaded: PropTypes.bool,
};

LastDrafts.defaultProps = {
  drafts: [],
  loaded: false,
};

export default LastDrafts;
