import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
     const params = this.getHarshParams();
    this.state ={
      // loggedIn: params.access_token ? true : false,
      nowPlaying: {
        name: 'Lets stay together',
        image: ''
      }
    }
  }
  
  getHarshParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  render(){
    return (
      <div className="App">
        <a href='http://localhost:8888'>
         <button>Login with Spotify</button>
       </a>
       <div>
       Now Playing: { this.state.nowPlaying.name }
       </div>
     <div>
      <img src={ this.state.nowPlaying.name } style= {{ width: 100}}/>
    </div>
 


    <body>
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Gaegu&family=MuseoModerno:wght@300&display=swap');
    </style>

      <h1 className="spotiphytesHeader">Spotiphyte</h1>
      <h2 className="moodRing">Water me with your tune</h2>

      <div class="wrapper">

      <form method="post" action="http://localhost:3000/keyword" onSubmit={this.onFormSubmit}>
    
        <input type="text" className="input" placeholder="Ain't no sunshine without a song..." id="keyword" name="keyword" 
        style={{width: '300px'}}/>
        <span className="underline"></span>
        <button className='textButton' type="submit"/>
      </form>

      </div>
      <div className="spotifyPlayer" id="spotiPlayer">
      <iframe src="https://open.spotify.com/embed/album/6N8uPmDqbgXD3ztkCCfxoo" width="260" height="340" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>


    </body>
   </div>
  
  );
 }
};


export default App;
