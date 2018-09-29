import React from 'react';
import {Row,Col} from 'antd';
import FollowButton from '../../widgets/FollowButton.js';
import DelegateButton from '../StoryFooter/DelegateButton.js';
import './VerifiedUloggers.css';
import ContactButton from '../StoryFooter/ContactButton.js';
import Avatar from '../Avatar.js';
class VerifiedUloggers extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='VerifiedUloggers'>
                <Row gutter={ {xs: 8, sm: 16, md: 24, lg: 32} }>
                    <Col span={2}>
                        <Avatar username={this.props.username} size={40}/>
                    </Col>
                    <Col span={6}>
                        <p>{'@'+this.props.username}</p>
                    </Col>
                    <Col span={5}>
                        <FollowButton username={this.props.username}/>
                    </Col>
                    <Col span={5}>
                        <DelegateButton/>
                    </Col>
                    <Col span={6}>
                        <ContactButton url={this.props.contactURL}/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default VerifiedUloggers;
