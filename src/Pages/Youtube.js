import React, { Component } from 'react'
import YouTube from '../api/YouTube'
import List from '../components/List'
import Search from '../components/Search'
import VideoPlayer from '../components/VideoPlayer'

const KEY="AIzaSyCc8Ek4f-sZ-JnOUWGz8GVI8yr30h_JvEQ"

class Youtube extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             searchKey : '',
             videoList : [],
             clickedVideoId : '',
             ClickedVideoData : '',
             load : true
        }
        this.getList=this.getList.bind(this)
        this.getVideo=this.getVideo.bind(this)
    }
    
    getList = async(searchKey) => {

        const response = await YouTube.get('search',{
            params : {
                part : 'snippet',
                maxResults : 10,
                key : KEY,
                q : searchKey,
            }
        })

        //console.log(response)
        this.setState({
            videoList : response.data.items,
            clickedVideoId : ''
        })
        //console.log(this.state.videoList)
    }

    getVideo(VideoId,data){
        //console.log(VideoId)
        console.log(data)

        this.setState({
           clickedVideoId : VideoId,
           ClickedVideoData : data
        })
    }

    render() {
        //console.log(this.state)
        if(this.state.clickedVideoId === ''){
            return (
                <div>
                    <Search getValue={this.getList}/>
                    <List data={this.state.videoList} catchEvent={this.getVideo}/>
                </div>
            )
        }
        else{
            return (
                <div>
                    <Search getValue={this.getList}/>
                    <VideoPlayer videoData={this.state.ClickedVideoData} videoId={this.state.clickedVideoId}/>
                </div>
            )
        }
    }
}

export default Youtube
