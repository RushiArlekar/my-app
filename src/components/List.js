import React, { Component } from 'react'

class List extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        
    }

    render() {
        //console.log(this.props.data)
        const {data} = this.props
        // console.log(data)
        return (
            <div>
                {data.map(element => <div id= {element.id.videoId} key={element.id.videoId} onClick={() => this.props.catchEvent(element.id.videoId,element.snippet)}>
                    <img src={element.snippet.thumbnails.default.url} className="Video-List"></img>
                    <div >{element.snippet.title}</div>
                    <div>{element.snippet.channelTitle}</div>
                    <div>{element.snippet.description}</div>
                </div>)}
            </div>
        )
    }
}

export default List
