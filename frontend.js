import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import ChatBoxAreaComponent from './components/ChatBoxAreaComponent'
class MainApp extends Component {
    constructor() {
        super()
        this.state = {chatMessagesSent:[], signImagesSent:[], chatMessagesReceived:[], signImagesReceived: []}
    }
    render() {
        return <div style={{width:"100%", heigth : "100%"}}>
            <ChatBoxAreaComponent onClick = {(val) => alert('val')}>
            </ChatBoxAreaComponent>
        </div>
    }
}

ReactDOM.render(<ChatBoxAreaComponent/>, document.getElementById('app'))
