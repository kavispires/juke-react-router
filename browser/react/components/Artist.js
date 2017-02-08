import React, { Component } from 'react';
import { Router, Route, Link} from 'react-router';

import Songs from '../components/Songs';
import Albums from '../components/Albums';

export default class Artist extends Component {

  componentDidMount() {
    const artistId = this.props.routeParams.artistId;
    const selectArtist = this.props.selectArtist;

    selectArtist(artistId);
  }

  render() {
    console.log('props', this.props)
    const selectedArtist = this.props.artist;
    const children = this.props.children;
    const propsToPassToChildren = {
      albums: this.props.artist.albums,
      songs: this.props.artist.songs,
      currentSong: this.props.currentSong
      /**todo: make sure to include all the props that the child components need! **/
    }

    return (
      <div>
        <h3>{ selectedArtist.name }</h3>
        <ul className="nav nav-tabs">
          <li><Link to={`/artists/${selectedArtist.id}/albums`}>ALBUMS</Link></li>
          <li><Link to={`/artists/${selectedArtist.id}/songs`}>SONGS</Link></li>
        </ul>
        { children && React.cloneElement(children, propsToPassToChildren) }
      </div>
    )
  }

  /*render() {

    // can add consts here
    return (

      <div>
        <h3>{this.props.artist.name}</h3>
        <Albums albums={this.props.artist.albums}/>
        <Songs songs={this.props.artist.songs} currentSong={this.props.currentSong}/>
      </div>

    )
  }*/

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