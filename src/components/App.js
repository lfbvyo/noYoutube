import React from 'react';
import { BrowserRouter as Router, Switch, NavLink as RRNavLink, Route } from "react-router-dom";
import VideoSearch from './VideoSearch';
import VideoDetail from './VideoDetail';
import Time from './Time';
import {
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';


class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onVideosFound = videos => this.setState({ videos });

  onVideoSelect = (video , history) => {
    this.setState({ selectedVideo: video });
    if (video) {
      history.push(`/video/${video.id.videoId}`);
    }
  }

  render() {
    return (
      <Router>
        <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>No YouTubbe</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
            <Nav className="ml-auto" navbar>
              {
                this.state.selectedVideo && 
                <NavItem>
                  <NavLink tag={RRNavLink} exact to="/">Back</NavLink>
                </NavItem>
              }
              <NavItem>
                  <Time />
              </NavItem>
            </Nav>
        </Navbar>
        <Container >  
        <Switch>
          <Route
            exact
            path="/"
            render={props => <VideoSearch {...props} onVideoSelect={this.onVideoSelect} onVideosFound={this.onVideosFound} videos={this.state.videos} />}
          />
          <Route
            path="/video/:id"
            render={props => <VideoDetail {...props} video={this.state.selectedVideo} />}
          />
        </Switch>
      </Container >
      </div>

      </Router>
    );
  }
}

export default App;
