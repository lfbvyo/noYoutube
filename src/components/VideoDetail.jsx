import React from "react";
import youtube from "../services/youtube";
import { Container, Row, Col } from "reactstrap";

class VideoDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { video: this.props.video };
  }

  componentDidMount() {
    const videoId = this.props.match.params.id;
    youtube.getVideoById(videoId).then(response => {
      this.setState({ video: response.data.items[0] });
    });
  }

  render() {
    const video = this.state.video;
    const statistics = (video && video.statistics) || {};
    if (!video) {
      return <div>Loading...</div>;
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId ||
      video.id}`;
    return (
      <Container>
        <br />
        <Row>
          <Col sm="10">
            <div>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  title="video player"
                  src={videoSrc}
                />
              </div>
              <div>
                <h4>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
              </div>
            </div>
          </Col>
          <Col sm="2">
            <h4>Stats</h4>
            <strong>Views</strong>: <br />
            {statistics.viewCount}
            <hr />
            <strong>Likes</strong>: <br />
            {statistics.likeCount}
            <hr />
            <strong>Dislikes</strong>: <br />
            {statistics.dislikeCount}
            <hr />
          </Col>
        </Row>
        <Row>
          <Col />
        </Row>
      </Container>
    );
  }
}

export default VideoDetail;
