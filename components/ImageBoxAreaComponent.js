import React,{Component} from 'react'
import ImageBox from './ImageBox'
import VideoInputComponent from './VideoInputComponent'
export default class ImageBoxAreaComponent extends Component {
    constructor(props) {
        super(props)
        console.log('in ibac')
        console.log(this.props)
    }

    getImageBoxFromSent() {
        console.log(this.props.receivedMessages)
        return (this.props.receivedMessages || ['a fine afternoon', 'do dinner']).map((m, index) => <ImageBox key={`key${index}`} sentence={m} messageType='received'/>)
    }
    render() {
        return (<div style={{width:"100%", height:"100%", position:'absolute'}}>
                    <div style={{width:"50%",height: "90%",float:'left',backgroundColor:'#DADADA', overflow:'scroll'}}>
                        {this.getImageBoxFromSent()}
                    </div>
                    <VideoInputComponent/>
                </div>)
    }
}
