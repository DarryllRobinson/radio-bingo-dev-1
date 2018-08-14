import React, { Component } from 'react';
import './style.css';
import { FlexyFlipCard } from 'flexy-flipcards';

import Bingo from '../utils/Bingo';

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tiles: []
    };
  }

  componentDidMount() {
    const numTiles = 16;

    for (let i = 0; i < numTiles; i++) {
      Promise.all([
        this.fetchSong(),
        this.fetchArtists()])
        .then((values) => {
          this.prepTiles(values);
        });
      }
  }

  prepTiles(arr) {
    const tile = [];

    tile.push({
      id: arr[0].id,
      name: arr[0].name,
      artist_1: arr[0].artist,
      artist_2: arr[1][0].artist,
      artist_3: arr[1][1].artist
    });

    this.updateTiles(tile);
  }

  fetchSong() {
    const id = Math.floor(Math.random() * 2000) + 1;
    return Bingo.getSong(id);
  }

  fetchArtists() {
    const fetchPromises = [];
    for (let j = 0; j < 2; j++) {
      const id = Math.floor(Math.random() * 10) + 1;
      fetchPromises.push(Bingo.getArtist(id));
    }
    return Promise.all(fetchPromises);
  }

  updateTiles(arr) {
    return new Promise((resolve, reject) => {
      this.setState(prevState => ({
        tiles: [...prevState.tiles, arr]
      }), function() {
        //console.log('State: ', this.state);
        resolve();
      });
    });
  }

  renderSongs() {
    if (this.state.tiles.length > 0) {
      let len = this.state.tiles.length - 1;
      console.log('len: ', len);
      console.log('this.state.tiles[0][0].name: ',
      this.state.tiles[0][0].name);
      console.log('Songs: ', this.state.tiles);

      /*return this.state.tiles[0][0].map(tile => {
        return (
          <div
            className="item"
            key={song.id}>
            <h3>{song.name}</h3>
          </div>
        );
      });*/
    }
  }

  xxxrenderFront() {
    if (this.state.tiles.length > 0) {
      return this.state.tiles.map(tile => {
        return (
          <div
            className="item"
            key={tile[0].id}>
            <h3>{tile[0].name}</h3>
            <br />


            <h4>
              <input type="radio"
                name="artist1"
                value={tile[0].artist_1}
              />
              {tile[0].artist_1}
              <br />
              <br />
              <input type="radio"
                name="artist2"
                value={tile[0].artist_2}
              />
              {tile[0].artist_2}
              <br />
              <br />
              <input type="radio"
                name="artist3"
                value={tile[0].artist_3}
              />
              {tile[0].artist_3}
            </h4>

          </div>
        );
      });
    }
  }

  renderFront() {
    if (this.state.tiles.length > 0) {
      return this.state.tiles.map(tile => {
        return (
          <div
            className="item"
            key={tile[0].id}>
              <FlexyFlipCard
                  frontBackgroundColor="#000034"
                  backBackgroundColor="#000034"
              >
                <div ref="flipper">
                  <h3>{tile[0].name}</h3>
                  <br />
                </div>

                <div ref="flipper">


                  <h4>
                    <input type="radio"
                      name="artist1"
                      value={tile[0].artist_1}
                    />
                    {tile[0].artist_1}
                    <br />
                    <br />
                    <input type="radio"
                      name="artist2"
                      value={tile[0].artist_2}
                    />
                    {tile[0].artist_2}
                    <br />
                    <br />
                    <input type="radio"
                      name="artist3"
                      value={tile[0].artist_3}
                    />
                    {tile[0].artist_3}
                  </h4>
                </div>
              </FlexyFlipCard>

          </div>
        );
      });
    }
  }

  renderBack() {
    if (this.state.tiles.length > 0) {
      return this.state.tiles.map(tile => {
        return (

            <div
              className="item"
              key={tile[0].id}>
              <div ref="flipper">
              <br />


              <h4>
                <input type="radio"
                  name="artist1"
                  value={tile[0].artist_1}
                />
                {tile[0].artist_1}
                <br />
                <br />
                <input type="radio"
                  name="artist2"
                  value={tile[0].artist_2}
                />
                {tile[0].artist_2}
                <br />
                <br />
                <input type="radio"
                  name="artist3"
                  value={tile[0].artist_3}
                />
                {tile[0].artist_3}
              </h4>
            </div>
          </div>

        );
      });
    }
  }

  render() {
    return (
      <div className="Landing">
        <h2>Your Radio Bingo Board</h2>

        <div className="tileCard">

          <div className="item-list">
            {this.renderFront()}
            </div>

        </div>

      </div>
    )
  }

  printSongs() {
    if (this.state.tiles.length > 0) {
      //console.log('this.state.tiles[0]: ', this.state.tiles[0]);
      console.log('this.state.tiles[0][0].id: ', this.state.tiles[0][0].id);
      console.log('this.state.tiles[0][0].name: ', this.state.tiles[0][0].name);
      console.log('this.state.tiles[0][0].artist: ', this.state.tiles[0][0].artist);


      console.log('this.state.tiles[0][1][0].id: ', this.state.tiles[0][1][0].id);
      console.log('this.state.tiles[0][1][0].artist: ', this.state.tiles[0][1][0].artist);


      console.log('this.state.tiles[0][1][1].id: ', this.state.tiles[0][1][1].id);
      console.log('this.state.tiles[0][1][1].artist: ', this.state.tiles[0][1][1].artist);
    }
  }

  renderArtists() {
    return this.state.artists.map(artist => {
      return (
          <div className="item"
            key={artist.id}>
            <h4>
              <input type="radio"
                name="artist1"
                value={"value1"}
              />
              {console.log('artist.artist:', artist.artist)}
              {artist.artist}
              <br />
              <br />

              <input type="radio"
                name="artist1"
                value={"value1"}
              />
              {artist.artist}
              <br />
              <br />

              <input type="radio"
                name="artist1"
                value={"value1"}
              />
              {artist.artist}
              <br />
              <br />
            </h4>
          </div>
      );
    });
  }

  xxxrender() {
    return (
      <div className="Landing">
        <h2>Your Radio Bingo Board</h2>

        <div className="tileCard">

          <div className="item-list">
            <div className="item">
              <FlexyFlipCard
                  frontBackgroundColor="#B96aC9"
                  backBackgroundColor="#231b1b"
              >
                  <div>
                      Front 1
                      <div ref="flipper">
                      >>>
                      </div>
                    </div>
                    <div ref="flipper">
                      Back 1
                    </div>
              </FlexyFlipCard>
            </div>

              <div className="item">
                <FlexyFlipCard
                    frontBackgroundColor="#B96aC9"
                    backBackgroundColor="#231b1b"
                >
                    <div ref="flipper">
                        Front 2
                      </div>
                      <div ref="flipper">
                        Back 2
                      </div>
                </FlexyFlipCard>
              </div>

            </div>

        </div>

      </div>
    )
  }
}

export default Landing;
