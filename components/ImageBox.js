import React,{Component} from 'react'
export default class ImageBox extends Component{
    constructor(props) {
        super(props)
        this.state = {index:0}
    }

    componentDidMount() {
        this.refs.v1.oncanplay = () => {
            console.log('loaded')
            this.refs.v1.muted = true
            console.log(this.refs.v1)
            this.refs.v1.play()
        }
        this.refs.v1.onended = () => {
            if (this.state.index < this.props.sentence.split(" ").length - 1) {
                this.setState({index : this.state.index+1})
                this.refs.v1.play()
            }
        }
    }

    render() {
        const styleObj = {width:"60%", height:"50%", marginRight:'10%', marginBottom:'15%'}
        if (this.props.messageType == 'received') {
            styleObj.marginLeft = '10%'
        }
        return <div style={styleObj}>
            <video ref="v1" autoPlay width="100%" height="80%" src={`http://localhost:9000/common_sent/${this.props.sentence.split(" ")[this.state.index]}.mp4`}>
            </video>
            <div style={{width:'100%', height:'20%', textAlign:'center', backgroundColor:"#212121", fontSize: window.innerHeight * 0.07, color:'white'}}>
                {this.props.sentence.split(" ")[this.state.index]}
            </div>
        </div>
    }
}
