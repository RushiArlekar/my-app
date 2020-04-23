import React, { Component } from 'react'

class VideoPlayer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        this.Video=this.Video.bind(this)
    }

    Video(){
        console.log(this.props.videoData)
        const {} = this.props.videoData
        const source =`https://www.youtube.com/embed/${this.props.videoId}?autoplay=1`
        return(
            <div>
                <iframe src={source}/>
                <h3>{}</h3>
            </div>
        )
    }
    
    render() {

        return (
            <div>
                <this.Video/>
            </div>
        )
    }
}

export default VideoPlayer
