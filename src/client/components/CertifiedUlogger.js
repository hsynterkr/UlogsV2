import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import BTooltip from './BTooltip';
import './Story/Story.less';

function CertifiedUlogger({ intl }) {
  return (
    <BTooltip
      title={intl.formatMessage(
        { id: 'certified_ulogger', defaultMessage: 'Certified Ulogger' },
      )}
    >
      <img
        src="/images/certified_44.png"
        className="Story__header__certified"
      />
    </BTooltip>
  );
}

CertifiedUlogger.propTypes = {
  intl: PropTypes.shape().isRequired,
};

export default injectIntl(CertifiedUlogger);
