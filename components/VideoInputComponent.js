import React,{Component} from 'react'

export default class VideoInputComponent extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.refs.v.muted = true
        if (!this.props.fromSrc) {
            navigator.webkitGetUserMedia({audio:false, video:true}, (stream) => {
                this.refs.v.src = window.URL.createObjectURL(stream)
            },() => {
                console.log("error")
            })
        }
        else {
            this.refs.v.src = this.props.src
            this.refs.v.play()
        }

    }
    render() {
        return (<div style={{width:"50%", height:"100%", float:'left'}}>
                <video ref="v" width="100%" height="100%" autoPlay>
                </video>
                </div>)

    }
}
