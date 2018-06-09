import React,{Component} from 'react'
import ReactDOM from 'react-dom'

export default class ChatBoxAreaComponent extends Component {
    constructor() {
        super()
        this.state = {currMessage : ''}
    }

    render() {
        return (<div style={{width:"100%", height:"100%", position:'absolute'}}>
                    <div style={{width:"100%",height: "90%",float:'top',backgroundColor:'#DADADA'}}>
                    </div>
                    <input type='text' value={this.state.currMessage} style={{width:"70%",height: "10%",float:'top', fontSize:window.innerHeight/15}} onKeyUp = {(event) => {
                        this.setState({currMessage:event.target.value})
                    }}/>
                    <button style = {{width:"30%", height:'10%', fontSize:window.innerHeight/15, backgroundColor:'#283593', color : 'white'}} onClick={() => {
                        this.props.onClick(this.state.currMessage)
                        this.setState({currMessage:''})
                    }}>
                    Send
                    </button>
                </div>)
    }
}
