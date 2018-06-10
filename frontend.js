import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import ChatBoxAreaComponent from './components/ChatBoxAreaComponent'
import {APP_ID, CHANNEL} from './config'
class MainApp extends Component {
    constructor(props) {
        super(props)
        this.state = {chatMessagesSent:[], signImagesSent:[], chatMessagesReceived:[], signImagesReceived: ['a fine afternoon', 'do dinner'], videosrc:'http://192.168.15.219:9000/common_sent/afternoon.mp4', vidSrc:''}
        console.log(this.props)
    }
    sendMessage(value) {
        const chatMesssagesSent = this.state.chatMessagesSent
        chatMesssagesSent.push(value)
        this.setState({chatMesssagesSent})
        if (this.socket) {
            this.socket.emit('chat-message', {msg:value})
        }
    }
    componentDidMount() {
       console.log(lil.uuid())
       this.agaroClient = AgoraRTC.createClient({mode:'interop'})
       this.agaroClient.init(APP_ID, () =>{
          console.log("agaro client initialized")
          this.agaroClient.join(null, CHANNEL, null, (uid) => {
              console.log("joined channel")
              this.agaroClient.on('stream-added', (evt) => {
                  var stream = evt.stream
                  this.agaroClient.subscribe(stream, (err) => {
                      console.log("error in joining stream")
                  })
                  this.agaroClient.on('stream-subscribed', (evt) => {
                      this.setState({vidSrc:window.URL.createObjectURL(evt.stream.stream)})
                  })
              })
          }, () => {

          })
       })

       this.socket = io.connect('https://cowardly-cheetah-39.localtunnel.me/n1')
    }
    render() {
        return <div style={{width:"100%", heigth : "100%"}}>
            <ChatBoxAreaComponent ref="cba" onClick = {(value)=>this.sendMessage(value)} sentMessages = {this.state.chatMessagesSent}
            receivedMessages = {this.state.chatMessagesReceived} videosrc={this.state.vidSrc}>
            </ChatBoxAreaComponent>
        </div>
    }
}

ReactDOM.render(<MainApp/>, document.getElementById('app'))
