import React, { useState, useEffect } from "react";
import { getPlaylistsFromUser } from "../services/playlist";
import { getMusicsFromData } from "../services/getMusicData";
import SongForm from '../components/PostSongs/FormPostSongs';
import { deleteMusicsFromData } from "../services/deleteSong";
import { UpdateForm } from "../components/UpdateSongs/UpdateForm";


export function FeedPage() {
  const [playlists, setPlaylists] = useState([]);
  const [songs, setsongs] = useState([]);

  useEffect(() => {
    fetchPlaylists();
    fetchMusics();
  }, [songs, playlists]);

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

  const handleDelete = async (songId) => {
    try {
      await deleteMusicsFromData(songId);
      fetchMusics();
      alert('Música excluída com sucesso!');
    } catch (error) {
      console.error('Erro ao excluir a música:', error);
      alert('Erro ao excluir a música. Por favor, tente novamente.');
    }
  };

  return (
    <div>
      <h1>My Playlist</h1>
      <ul>
        {Array.isArray(playlists) &&
          playlists.map((playlist, index) => (
            <li key={playlist._id}>{index + 1} {playlist._name} </li>
          ))}
      </ul>
      <h1>All Songs</h1>
      <ul>
        {Array.isArray(songs) &&
          songs.map((song, index) => (
            <li key={song.id}>
              {index + 1} {song.title}
              <button onClick={() => handleDelete(song.id)}>Excluir</button>
            </li>
          ))}
      </ul>
      <SongForm />
      <UpdateSongForm/>
    </div>
  );
}

export default FeedPage;
