import React,{Component} from 'react'
import ImageBox from './ImageBox'
import VideoInputComponent from './VideoInputComponent'
export default class ImageBoxAreaComponent extends Component {
    constructor(props) {
        super(props)
        console.log('in ibac')
        console.log(this.props)
        this.msgs = Object.assign([], this.props.receivedMessages)
    }

    componentWillReceiveProps(nextProps) {
        console.log("update")
        if (nextProps.receivedMessages.length != this.msgs.length) {
            console.log("scrolling down")
            console.log(this.refs.scrollBar.scrollTop)
            this.refs.scrollBar.scrollTop += 600
            console.log(this.refs.scrollBar.scrollTop)
            this.msgs = Object.assign([], nextProps.receivedMessages)
        }
    }

    getImageBoxFromSent() {
        console.log(this.props.receivedMessages)
        return (this.props.receivedMessages || ['a fine afternoon', 'do dinner']).map((m, index) => <ImageBox key={`key${index}`} sentence={m} messageType='received'/>)
    }
    render() {
        return (<div style={{width:"100%", height:"100%", position:'absolute'}}>
                    <div style={{width:"50%",height: "90%",float:'left',backgroundColor:'#DADADA', overflow:'auto'}} ref="scrollBar">
                        {this.getImageBoxFromSent()}
                    </div>
                    <VideoInputComponent ref="video" sendStream= {this.props.sendStream} vidSrc={this.props.vidSrc}/>
                </div>)
    }
}
