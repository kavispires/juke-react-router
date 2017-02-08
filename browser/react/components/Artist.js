import React, { Component } from 'react';
import Songs from '../components/Songs';

import Albums from '../components/Albums'


export default class Artist extends Component {

  componentDidMount() {
    const artistId = this.props.routeParams.artistId;
    const selectArtist = this.props.selectArtist;

    selectArtist(artistId);
  }

  render() {
    console.log('props', this.props)
    // can add consts here
    return (

      <div>
        <h3>{this.props.artist.name}</h3>
        <Albums />
        <Songs />
      </div>

    )
  }

}

{/*<div className="album">
        <div>
          <h3>{this.props.album.name}</h3>
          <img src={this.props.album.imageUrl} className="img-thumbnail" />
        </div>
        <Songs
          songs={this.props.album.songs}
          currentSong={this.props.currentSong}
          isPlaying={this.props.isPlaying}
          toggleOne={this.props.toggleOne} />
      </div>*/}