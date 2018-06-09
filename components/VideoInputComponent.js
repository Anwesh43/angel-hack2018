import React,{Component} from 'react'

export default class VideoInputComponent extends Component {
    constructor(props) {
        super(props)
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.vidSrc != this.props.vidSrc) {
            this.refs.v.src = nextProps.vidSrc
            this.refs.v.play()
        }
    }
    componentDidMount() {
        this.refs.v.muted = true
        // if (!this.props.fromSrc) {
        //     console.log(this.props.sendStream)
        //     navigator.webkitGetUserMedia({audio:false, video:true}, (stream) => {
        //         console.log(stream)
        //         this.refs.v.src = window.URL.createObjectURL(stream)
        //         if (this.props.sendStream) {
        //             this.props.sendStream(this.refs.v.src)
        //         }
        //
        //
        //     },() => {
        //         console.log("error")
        //     })
        // }
        // else {
        //     this.refs.v.src = this.props.src
        //     this.refs.v.play()
        // }

    }
    render() {
        return (<div style={{width:"50%", height:"100%", float:'left'}}>
                <video ref="v" width="100%" height="100%" id="video" autoPlay>
                </video>
                </div>)

    }
}
