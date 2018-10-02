import React from 'react';
import {Row,Col} from 'antd';
import FollowButton from '../../widgets/FollowButton.js';
import DelegateButton from '../StoryFooter/DelegateButton.js';
import './VerifiedUloggers.css';
import Avatar from '../Avatar.js';
import ContactButton from '../Sidebar/WalletSidebar.js'
class VerifiedUloggers extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            post:{
                author:this.props.username
            }
        }
    }
    render(){
    const topStyle = {
      marginBottom:'5%'
    };
        return(
            <div className='VerifiedUloggers'>
                <Row style={topStyle} gutter={ {xs: 8, sm: 16, md: 24, lg: 32} }>
                    <div className='topVerified' >
                        <Col span={8}>
                            <Avatar username={this.props.username} size={40}/>
                        </Col>
                        <Col span={8}>
                            <h2>{'@'+this.props.username}</h2>
                        </Col>
                    </div>
                </Row>
                <Row gutter={ {xs: 8, sm: 16, md: 24, lg: 32} }>
                    <Col span={8}>
                                  <FollowButton username={this.props.username}/>
                    </Col>
                    <Col span={8}>
                        <DelegateButton post={this.state.post}/>
                    </Col>
                    <Col span={8}>
                        <ContactButton username={this.props.username} verified={true} />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default VerifiedUloggers;
                                     

