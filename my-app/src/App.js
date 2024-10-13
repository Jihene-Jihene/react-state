import React, { Component } from "react";
import "./App.css"; // Import the CSS file

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "John Doe",
        bio: "Web Developer",
        imgSrc: "https://picsum.photos/200", // Random photo source
        profession: "Software Engineer",
      },
      shows: false,
      timeInterval: 0,
    };
    this.interval = null;
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timeInterval: prevState.timeInterval + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState((prevState) => ({ shows: !prevState.shows }));
  };

  render() {
    const { person, shows, timeInterval } = this.state;

    return (
      <div className="app-container">
        <h1>Welcome to My Profile</h1>
        <button className="toggle-button" onClick={this.toggleShow}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>

        {shows && (
          <div className="profile-card">
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img
              src={person.imgSrc}
              alt={person.fullName}
              className="profile-image"
            />
            <p>Profession: {person.profession}</p>
          </div>
        )}

        <p className="timer">
          Time since component mounted: {timeInterval} seconds
        </p>
      </div>
    );
  }
}

export default App;
