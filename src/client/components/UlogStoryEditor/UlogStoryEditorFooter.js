import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classNames from 'classnames';
import { Icon, Select } from 'antd';
import Action from '../Button/Action';

const Option = Select.Option

const UlogStoryEditorFooter = ({
  currentImages,
  imageUploading,
  postCreationLoading,
  handleCreatePost,
  handleImageChange,
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
    <Select defaultValue="ulog-images" style={{ width: 120 }}>
      <Option value="ulog-images">#ulog-images</Option>
      <Option value="ulography">#ulography</Option>
      <Option value="ulog-graphics">#ulog-graphics</Option>
      <Option value="ulogifs">#ulogifs</Option>
      <Option value="ulog-news">#ulog-news</Option>
      <Option value="ulog-arts">#ulog-arts</Option>
      <Option value="luculog-unfinishedartsy">#ulog-unfinishedarts</Option>
      <Option value="ulog-drafts">#ulog-drafts</Option>
      <Option value="ulog-memes">#ulog-memes</Option>
      <Option value="ulog-resolutions">#ulog-resolutions</Option>
      <Option value="ulog-quotes">#ulog-quotes</Option>
      <Option value="ulog-showerthoughts">#ulog-showerthoughts</Option>
      <Option value="ulog-snookmademedoit">#ulog-snookmademedoit</Option>
    </Select>
    <Action
      primary
      loading={postCreationLoading}
      disabled={postCreationLoading}
      onClick={handleCreatePost}
    >
      {postCreationLoading ? submittingPostText : postText}
    </Action>
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
  onRemoveImage: () => {},
  handleFooterFocus: () => {},
};

export default UlogStoryEditorFooter;
