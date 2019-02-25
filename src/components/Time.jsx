import React from "react";

class Time extends React.Component {
  state = { currentTime: new Date().toLocaleString(), intervalId: null };

  setCurrentTime() {
    const intervalId = setInterval(() => {
      this.setState({ currentTime: new Date().toLocaleString() });
      this.setCurrentTime();
    }, 1000);
    
    this.setState({ intervalId });
  }

  componentDidMount() {
    this.setCurrentTime();
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    return <span className="navbar-text">{this.state.currentTime}</span>;
  }
}

export default Time;
