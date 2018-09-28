import React from 'react';
import {Button} from 'antd';
class ContactButton extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Button type={'primary'} href={this.props.url}>
                Contact
            </Button>
        );
    }
}

export default ContactButton;
