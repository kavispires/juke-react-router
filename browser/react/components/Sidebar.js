import React from 'react';
import { Router, Route, Link } from 'react-router';

// onClick = { deselectAlbum }

const Sidebar = (props) => {

  const deselectAlbum = props.deselectAlbum;

  return (
    <sidebar>
      <img src="juke.svg" className="logo" />
      <section>
        <h4 className="menu-item active">
          <Link to={'/'} href="#" >ALBUMS</Link>
        </h4>
      </section>
      <section>
        <h4 className="menu-item">
          <Link to={'/artists'}>ARTISTS</Link>
        </h4>
      </section>
    </sidebar>
  );
}

export default Sidebar;
