import axios from 'axios'

const KEY="AIzaSyCc8Ek4f-sZ-JnOUWGz8GVI8yr30h_JvEQ"

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3/',
//     params : {
//         part : 'snippet',
//         maxResults : 10,
//         key : KEY
//     }
})