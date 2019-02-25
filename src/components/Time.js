import React from 'react';

class Time extends React.Component {
  state = { currentTime: new Date().toLocaleString(), timeOutId: null };

  setCurrentTime() {
    const timeOutId = setTimeout(() => {
        this.setState({ currentTime: new Date().toLocaleString() });
        this.setCurrentTime();
    }, 1000);
    this.setState({ timeOutId });
  }

  componentDidMount() {
    this.setCurrentTime()
  }

  componentWillUnmount() {
    clearTimeout(this.state.timeOutId);
  }

  render() {
    return (
     <span className="navbar-text">
         {this.state.currentTime}
     </span>

    );
  }
}

export default Time;
