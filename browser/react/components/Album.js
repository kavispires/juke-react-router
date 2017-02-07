import React, { Component } from 'react';
import Songs from '../components/Songs';

export default class Album extends Component {
  constructor(props) {
    super(props)

console.log('props', props)
    this.album = props.album;
    this.currentSong = props.currentSong;
    this.isPlaying = props.isPlaying;
    this.toggleOne = props.toggleOne;
    this.albumId = +props.routeParams.albumId
  }

  componentDidMount() {
    const albumId = this.props.routeParams.albumId;
    const selectAlbum = this.props.selectAlbum;

    selectAlbum(albumId);
  }

  render() {
    return (

      <div className="album">
        <div>
          <h3>{this.album.name}</h3>
          <img src={this.album.imageUrl} className="img-thumbnail" />
        </div>
        <Songs
          songs={this.album.songs}
          currentSong={this.currentSong}
          isPlaying={this.isPlaying}
          toggleOne={this.toggleOne} />
      </div>
    )
  }

}








/*const Album = (props) => {

    console.log(props)
  const album = props.album;
  const currentSong = props.currentSong;
  const isPlaying = props.isPlaying;
  const toggleOne = props.toggleOne;
  const albumId = +props.routeParams.albumId

  return (

    <div className="album">
      <div>
        <h3>{ album.name }</h3>
        <img src={ album.imageUrl } className="img-thumbnail" />
      </div>
      <Songs
        songs={album.songs}
        currentSong={currentSong}
        isPlaying={isPlaying}
        toggleOne={toggleOne} />
    </div>
  );
}

export default Album;*/
