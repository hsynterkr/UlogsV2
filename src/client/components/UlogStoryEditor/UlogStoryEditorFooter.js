import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classNames from 'classnames';
import { Icon, Select } from 'antd';
import ReactMarkdown from 'react-markdown';
import Action from '../Button/Action';
import { ulogStoriesTags } from '../../helpers/constants';

const Option = Select.Option;

const UlogStoryEditorFooter = ({
  currentImages,
  imageUploading,
  postCreationLoading,
  isCertifiedUlogger,
  handleCreatePost,
  handleImageChange,
  handleCategoryChange,
  postText,
  submittingPostText,
  onRemoveImage,
  handleFooterFocus,
}) => (
  // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
  <div className="UlogStoryEditor__footer" tabIndex="0" onFocus={handleFooterFocus}>
    <div className="UlogStoryEditor__imagebox">
      {_.map(currentImages, image => (
        <div className="UlogStoryEditor__imagebox__preview__image" key={image.id}>
          <div
            className="UlogStoryEditor__imagebox__remove"
            onClick={() => onRemoveImage(image)}
            role="presentation"
          >
            <i className="iconfont icon-delete_fill UlogStoryEditor__imagebox__remove__icon" />
          </div>
          <img src={image.src} width="38" height="38" alt={image.src} />
        </div>
      ))}
      <input
        id="inputfile"
        className="UlogStoryEditor__footer__file"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      <label htmlFor="inputfile">
        {imageUploading ? (
          <div className="UlogStoryEditor__imagebox__loading">
            <Icon type="loading" />
          </div>
        ) : (
          <div
            className={classNames({
              UlogStoryEditor__imagebox__upload: !_.isEmpty(currentImages),
            })}
          >
            <i
              className={classNames('iconfont UlogStoryEditor__imagebox__upload__icon', {
                'icon-picture': _.isEmpty(currentImages),
                'icon-add': !_.isEmpty(currentImages),
              })}
            />
          </div>
        )}
      </label>
    </div>
    <Select
      style={{ flex: "1 0", margin: "5px" }}
      onChange={handleCategoryChange}
    >
      {_.map(ulogStoriesTags, category => (
        <Option value={category} key={category}>#{category}</Option>
      ))}
    </Select>
    <Action
      primary
      loading={postCreationLoading}
      disabled={postCreationLoading}
      onClick={handleCreatePost}
    >
      {postCreationLoading ? submittingPostText : postText}
    </Action>
    {!isCertifiedUlogger && 
      <div>
        <ReactMarkdown source={`Please note that while you will be able to successfully post to steem and of course have your post appear on ulogs.org (as a post), your post will not be displayed on our "Ulog-Stories" display-column as this column is reserved for "certified uloggers" only. However, every(any)one can become "certified". We invite you to contact us!`} />
      </div>
    }
  </div>
);

UlogStoryEditorFooter.propTypes = {
  currentImages: PropTypes.arrayOf(PropTypes.shape()),
  imageUploading: PropTypes.bool,
  postCreationLoading: PropTypes.bool,
  postText: PropTypes.string,
  submittingPostText: PropTypes.string,
  handleCreatePost: PropTypes.func,
  handleImageChange: PropTypes.func,
  handleCategoryChange: PropTypes.func,
  onRemoveImage: PropTypes.func,
  handleFooterFocus: PropTypes.func,
};

UlogStoryEditorFooter.defaultProps = {
  currentImages: [],
  imageUploading: false,
  postCreationLoading: false,
  postText: 'Post',
  submittingPostText: 'Submitting',
  handleCreatePost: () => {},
  handleImageChange: () => {},
  handleCategoryChange: () => {},
  onRemoveImage: () => {},
  handleFooterFocus: () => {},
};

export default UlogStoryEditorFooter;
