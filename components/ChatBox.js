import React,{Component} from 'react'
export default class ChatBox extends Component {
    constructor(props) {
        super(props)
        console.log(this.props)
    }

    render() {
        const styleObj = {display:'inline', padding:"10%", fontSize:window.innerHeight/30, color : 'white', 'borderRadius':'5px'}
        if (this.props.messageType == 'mine') {
            styleObj.backgroundColor = '#94C2ED'
            styleObj.float = 'right'
        } else {
            styleObj.backgroundColor = '#94C2ED'
            styleObj.float = 'left'
        }
        return (<div style={{float:'top', marginBottom:"10%"}}>
            <div style={styleObj}>
                {this.props.message}
            </div>
        </div>)
    }
}
