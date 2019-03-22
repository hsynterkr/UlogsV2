import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Alert } from 'antd';
import * as announcement from '../announcements/announcement'

const AnnouncementBanner = ({ displayTwoLiner }) => {
  return (displayTwoLiner ? (
      <Alert
        style={{ backgroundColor: 'blue', color: 'white', textAlign: 'center'}}
        showIcon={false} type="info" banner closable 
        message={
          <span>
            <p>
              <span style={{marginRight: '5px'}}>{announcement.message1}</span>
              <Link 
                style={{color: '#F0E68C'}}
                to={announcement.link1}
              >
                {announcement.linkMessage1}
              </Link>
            </p>
            <p>
              <span style={{margin: '0px 5px'}}>{announcement.message2}</span>
              <Link 
                style={{color: '#F0E68C'}}
                to={announcement.link2}
              >
                {announcement.linkMessage2}
              </Link>
            </p>
          </span>
        }
      />
    ) : (
      <Alert
        style={{ backgroundColor: 'blue', color: 'white', textAlign: 'center'}}
        showIcon={false} type="info" banner closable 
        message={
          <span>
            <p>
              <span style={{marginRight: '5px'}}>{announcement.message1 || announcement.message2}</span>
              <Link 
                style={{color: '#F0E68C'}}
                to={announcement.link1 || announcement.link2}
              >
                {announcement.linkMessage1 || announcement.linkMessage2}
              </Link>
            </p>
          </span>
        }
      />
    )
  );
};

AnnouncementBanner.propTypes = {
  displayTwoLiner: PropTypes.bool.isRequired,
};

AnnouncementBanner.defaultProps = {
  displayTwoLiner: true,
};

export default AnnouncementBanner;
