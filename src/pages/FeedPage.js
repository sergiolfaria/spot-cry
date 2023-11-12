import React, { useState, useEffect } from "react";
import { getPlaylistsFromUser } from "../services/playlist";
import { getMusicsFromData } from "../services/getMusicData";
import SongForm from './../components/FormPostSongs/PostSongs';

export function FeedPage() {
  const [playlists, setPlaylists] = useState([]);
  const [songs, setsongs] = useState([]);

  useEffect(() => {
    fetchPlaylists();
    fetchMusics();
  }, [songs,playlists]);

  const fetchPlaylists = async () => {
    try {
      const response = await getPlaylistsFromUser();
      setPlaylists(response.data.playlists);
    } catch (error) {
      console.error("Erro ao buscar playlists:", error);
    }
  };
  const fetchMusics = async () => {
    try {
      const response = await getMusicsFromData();
      setsongs(response.data.songs);
    } catch (error) {
      console.error("Erro ao buscar musicas:", error);
    }
  };

  return (
    <div>
      <h1>My Playlist</h1>
      <ul>
        {Array.isArray(playlists) &&
          playlists.map((playlist,index) => (
            <li key={playlist._id}>{index+1} {playlist._name} </li>
          ))}
      </ul>
      <h1>all songs</h1>
      <ul>
        {Array.isArray(songs) &&
          songs.map((songs,index) => (
            <li key={songs.id}>{index+1} {songs.title} </li>
          ))}
      </ul>
      <SongForm />
    </div>
  );
}

export default FeedPage;
