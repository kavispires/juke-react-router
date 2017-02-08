import React, { Component } from 'react';
import Songs from '../components/Songs';

export default class Album extends Component {

  componentDidMount() {
    const albumId = this.props.routeParams.albumId;
    const selectAlbum = this.props.selectAlbum;

    selectAlbum(albumId);
  }

  render() {
        // can add consts here
    return (

      <div className="album">
        <div>
          <h3>{this.props.album.name}</h3>
          <img src={this.props.album.imageUrl} className="img-thumbnail" />
        </div>
        <Songs
          songs={this.props.album.songs}
          currentSong={this.props.currentSong}
          isPlaying={this.props.isPlaying}
          toggleOne={this.props.toggleOne} />
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
