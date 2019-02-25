import axios from 'axios';

const KEY = 'AIzaSyCxjx9NL5Yp6dMTp7V5wtMnGrnJXvD3sdc';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 15,
    key: KEY
  }
});
