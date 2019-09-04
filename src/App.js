import React, { Component } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import resumeData from "./resumeData";
import file2 from "../src/bensound-perception.mp3";
import Sound from "react-sound";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sound
          url={file2}
          autoLoad={true}
          playStatus={Sound.status.PLAYING}
          playFromPosition={300}
          onLoading={this.handleSongLoading}
          onPlaying={this.handleSongPlaying}
          onFinishedPlaying={this.handleSongFinishedPlaying}
        />
        <Header resumeData={resumeData} />

        <About resumeData={resumeData} />
        <Resume resumeData={resumeData} />
        <Portfolio resumeData={resumeData} />
        <Footer resumeData={resumeData} />
      </div>
    );
  }
}

export default App;
