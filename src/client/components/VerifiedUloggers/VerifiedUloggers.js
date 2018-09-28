import React from 'react';
import {Row,Col} from 'antd';
import FollowButton from '../../widgets/FollowButton.js';
import DelegateButton from '../StoryFooter/DelegateButton.js';
import ContactButton from '../StoryFooter/ContactButton.js';
class VerifiedUloggers extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='VerifiedUloggers'>
                <Row gutter={ {xs: 8, sm: 16, md: 24, lg: 32} }>
                    <Col span={6}>
                        <p>{'@snook'}</p>
                    </Col>
                    <Col span={6}>
                        <FollowButton username='@snook'/>
                    </Col>
                    <Col span={6}>
                        <DelegateButton/>
                    </Col>
                    <Col span={6}>
                        <ContactButton url='https://discord.gg/wTmMt8W'/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default VerifiedUloggers;
