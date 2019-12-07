import React, { Component } from 'react';
import Chatkit from '@pusher/chatkit-client';

class ChatScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentUser: {}
        }
    }
    
    componentDidMount () {
    const chatManager = new Chatkit.ChatManager({
        instanceLocator: 'v1:us1:3c8a313a-728b-45fd-bd0f-cb20cdef3cce',
        userId: this.props.currentUsername,
        tokenProvider: new Chatkit.TokenProvider({
        url: 'http://localhost:3001/authenticate',
        }),
    })

    chatManager
        .connect()
        .then(currentUser => {
        this.setState({currentUser})
        })
        .catch(error => console.error('error', error))
    }
        
    render() {
        return (
            <div>
                <h1>Chat</h1>
            </div>
        )
    }
}

export default ChatScreen;