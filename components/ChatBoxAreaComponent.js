import React,{Component} from 'react'
import ChatBox from './ChatBox'
export default class ChatBoxAreaComponent extends Component {
    constructor(props) {
        super(props)
        console.log('in cbac')
        console.log(this.props)
    }

    getChatBoxForMe() {
        console.log(this.props.sentMessages)
        return (this.props.sentMessages|| ['hello world', 'nano']).map((m, index) => <ChatBox key={`key${index}`}message={m} messageType='mine'/>)
    }
    render() {
        return (<div style={{width:"100%", height:"100%", position:'absolute'}}>
                    <div style={{width:"100%",height: "90%",float:'top',backgroundColor:'#DADADA', overflow:'scroll'}}>
                        {this.getChatBoxForMe()}
                    </div>
                    <input type='text' style={{width:"70%",height: "10%",float:'top', fontSize:window.innerHeight/15}} ref="textBox"/>
                    <button style = {{width:"30%", height:'10%', fontSize:window.innerHeight/15, backgroundColor:'#283593', color : 'white'}} ref="sendButton" onClick={() => {
                        this.props.onClick(this.refs.textBox.value)
                        this.refs.textBox.value = ''
                    }}>
                    Send
                    </button>
                </div>)
    }
}
