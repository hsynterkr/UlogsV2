import React from 'react';
import PropTypes from 'prop-types';
import './HeroBanner.less';
import './HeroBannerSlider.less';

const UlogsBanner = ({ category }) => (
  <div className="HeroBanner">
    <div className="HeroBanner__container">
      <div className="HeroBanner__content-container">
        <div className="HeroBanner__content">
          <img
            src={`/${category}-banner.png`}
            className="HeroBanner__content__image"
            alt="Write and publish a ULOG on steem"
          />
        </div>
      </div>
    </div>
  </div>
);
UlogsBanner.propTypes = {
  category: PropTypes.string,
};
UlogsBanner.defaultProps = {
  category: '',
};
export default UlogsBanner;
