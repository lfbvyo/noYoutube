import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import youtube from "../services/youtube";
import { Alert } from "reactstrap";

class VideoSearch extends React.Component {
  state = { errorMessaje: "" };

  componentDidMount() {
    this.props.onVideoSelect(null, this.props.history);
  }

  searchVideos = term => {
    console.log("Searching for: ", term);
    youtube
      .getVideos(term)
      .then(response => {
        this.props.onVideosFound(response.data.items);
      })
      .catch(error => {
        console.error(error);
        this.setState({ errorMessaje: error.message });
      });
  };

  selectVideo = video => {
    this.props.onVideoSelect(video, this.props.history);
  };

  render(props) {
    return (
      <div className="video-search">
        <br />
        <SearchBar searchVideos={this.searchVideos} />
        <hr />
        {this.state.errorMessaje && (
          <Alert color="danger">{this.state.errorMessaje}</Alert>
        )}
        <VideoList
          onVideoSelect={this.selectVideo}
          videos={this.props.videos}
        />
      </div>
    );
  }
}

export default VideoSearch;
