import axios from 'axios';

const KEY = 'AIzaSyCxjx9NL5Yp6dMTp7V5wtMnGrnJXvD3sdc';

const youtubeBase = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: KEY
  }
});

const getVideos = q => youtubeBase.get('/search', {
  params: {
    part: 'snippet',
    q,
    type: 'video',
    maxResults: 15
  }
});

const getVideoById = id => youtubeBase.get('/videos', {
  params: {
    part: 'snippet,contentDetails,statistics',
    id
  }
});


export default {
  getVideos,
  getVideoById
};