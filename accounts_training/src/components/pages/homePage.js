import React, { Component } from 'react';
import { Player } from 'video-react';
import video from '../../Assets/videos/intro.mov';

class Homepage extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <Player
          // playsInLine
          src={video}
        />
      </div>
    );
  }
}

export default Homepage;
