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
             clickedVideoId : ''
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
                q : searchKey
            }
        })

        //console.log(response)
        this.setState({
            videoList : response.data.items
        })
        //console.log(this.state.videoList)
    }

    getVideo = async(videoId) => {
        console.log(videoId)
    }

    render() {
        if(this.state.clickedVideoId !== ''){
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
                    <VideoPlayer />
                </div>
            )
        }
    }
}

export default Youtube
