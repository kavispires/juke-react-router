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
    console.log('props.artist', this.props.artist.albums)
    // can add consts here
    return (

      <div>
        <h3>{this.props.artist.name}</h3>
        <Albums albums={this.props.artist.albums}/>
        <Songs songs={this.props.artist.songs} currentSong={this.props.currentSong}/>
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