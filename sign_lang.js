import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import ImageBoxAreaComponent from './components/ImageBoxAreaComponent'
import {APP_ID, CHANNEL_KEY, CHANNEL} from './config'
class MainApp extends Component {
    constructor(props) {
        super(props)
        this.state = {chatMessagesSent:[], signImagesSent:[], chatMessagesReceived:[], signImagesReceived: ['a fine afternoon', 'do dinner'], vidSrc:''}
        console.log(this.props)
    }
    receiveMessage(value) {
        const signImagesReceived = this.state.signImagesReceived
        signImagesReceived.push(value)
        this.setState({signImagesReceived})
    }
    sendStream(stream) {
        console.log(`stream is ${JSON.stringify(stream)}`)
        this.socket.emit('stream', {stream})
    }
    componentDidMount() {
        const uid = lil.uuid()
        this.agaroClient = AgoraRTC.createClient({mode:'interop'})
        this.agaroClient.init(APP_ID, () =>{
           console.log("agaro client initialized")
           var stream = AgoraRTC.createStream({
               streamID: uid,
               audio:false,
               video:true,
               screen:false
           })
           this.agaroClient.join(null, CHANNEL, null, (uid) => {
               console.log("joined channel")
               stream.init(() => {
                  console.log("sstream is")
                  console.log(stream)
                  this.agaroClient.publish(stream, (err) => {
                      if (err == null) {
                          console.log("successfully published")
                      }
                  })
                  this.agaroClient.on('stream-published', (evt) => {
                      console.log("stream publixhed")
                      console.log(evt)
                      this.setState({vidSrc:window.URL.createObjectURL(stream.stream)})
                      // console.log(this.refs.vic.refs.video.refs.v.id)
                      // stream.play(this.refs.vic.refs.video.refs.v.id)
                  })
               })
           }, () => {

           })

        })
        this.socket = io.connect('http://192.168.15.219:9030/n1')
        this.socket.on('chat-msg', (data) => {
            this.receiveMessage(data.msg)
        })

    }
    render() {
        return <div style={{width:"100%", heigth : "100%"}}>
            <ImageBoxAreaComponent ref="vic" sentMessages = {this.state.signImagesSent}
            receivedMessages = {this.state.signImagesReceived} sendStream={this.sendStream.bind(this)} vidSrc={this.state.vidSrc}>
            </ImageBoxAreaComponent>
        </div>
    }
}

ReactDOM.render(<MainApp/>, document.getElementById('app'))
