import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import ChatBoxAreaComponent from './components/ChatBoxAreaComponent'
import ImageBoxAreaComponent from './components/ImageBoxAreaComponent'

class MainApp extends Component {
    constructor(props) {
        super(props)
        this.state = {chatMessagesSent:[], signImagesSent:[], chatMessagesReceived:[], signImagesReceived: ['a fine afternoon', 'do dinner']}
        console.log(this.props)
    }
    sendMessage(value) {
        const chatMesssagesSent = this.state.chatMessagesSent
        chatMesssagesSent.push(value)
        this.setState({chatMesssagesSent})
    }
    render() {
        return <div style={{width:"100%", heigth : "100%"}}>
            <ImageBoxAreaComponent onClick = {(value)=>this.sendMessage(value)} sentMessages = {this.state.signImagesSent}
            receivedMessages = {this.state.signImagesReceived}>
            </ImageBoxAreaComponent>
        </div>
    }
}

ReactDOM.render(<MainApp/>, document.getElementById('app'))
