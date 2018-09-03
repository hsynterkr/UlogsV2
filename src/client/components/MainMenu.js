import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { FormattedMessage } from 'react-intl';
import './MainMenu.less';

class MainMenu extends React.Component {
  render() {
    return (
      <div className="MainMenu">
        <div className="container menu-layout">
          <div className="left" />
          <Scrollbars
            universal
            autoHide
            renderView={({ style, ...props }) => (
              <div style={{ ...style, marginBottom: '-20px' }} {...props} />
            )}
            style={{ width: '100%', height: 46 }}
          >
            <ul className="MainMenu__menu center">
              <li role="presentation" className="MainMenu__item">
                <a
                  href="https://www.youtube.com/channel/UCzI3Rjamg7zSe_o0BwSeIQQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FormattedMessage id="uloggerstv" defaultMessage="UloggersTV" />
                </a>
              </li>
              <li role="presentation" className="MainMenu__item">
                <a
                  href="https://www.youtube.com/channel/UCnIJlzMZzfrcE0bXabLpXKw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FormattedMessage id="teardropstv" defaultMessage="TeardropsTV" />
                </a>
              </li>
              <li role="presentation" className="MainMenu__item">
                <a
                  href="https://www.youtube.com/channel/UCq6ylwOaSG9VDYwZkMr3jMw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FormattedMessage id="untalentedtv" defaultMessage="UntalentedTV" />
                </a>
              </li>
            </ul>
          </Scrollbars>
        </div>
      </div>
    );
  }
}

export default MainMenu;
