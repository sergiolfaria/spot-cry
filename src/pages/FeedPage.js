import React, { useState, useEffect } from 'react';
import { getPlaylistsFromUser } from '../services/playlist';
import { getMusicsFromData } from '../services/getMusicData';
import SongForm from '../components/PostSongs/FormPostSongs';
import { deleteMusicsFromData } from '../services/deleteSong';
import SongItem from '../components/Song/SongItem';
import {
  FeedContainer,
  PlaylistContainer,
  SongsContainer,
  Title,
  List,
  ListItem,
  AddSongContainer,
} from './Styles/FeedStyles';

function FeedPage() {
  const [playlists, setPlaylists] = useState([]);
  const [songs, setsongs] = useState([]);
  const [editingSongId, setEditingSongId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {

      const playlistsResponse = await getPlaylistsFromUser();
      setPlaylists(playlistsResponse.data.playlists);

      const songsResponse = await getMusicsFromData();
      setsongs(songsResponse.data.songs);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    } 
  };
  const onSubmitSuccess = () => {
    fetchData();
  };

  const handleDelete = async (songId) => {
    try {
      await deleteMusicsFromData(songId);
      fetchData();
      alert('Música excluída com sucesso!');
    } catch (error) {
      console.error('Erro ao excluir a música:', error);
      alert('Erro ao excluir a música. Por favor, tente novamente.');
    }
  };

  const handleEdit = (songId) => {
    setEditingSongId(songId);
  };

  return (
      <FeedContainer>
        <PlaylistContainer>
          <Title>My Playlist</Title>
          <List>
            {Array.isArray(playlists) &&
              playlists.map((playlist, index) => (
                <ListItem key={playlist._id}>{index + 1} {playlist._name} </ListItem>
              ))}
          </List>
        </PlaylistContainer>

        <SongsContainer>
        <Title>All Songs</Title>
        <List>
          {Array.isArray(songs) &&
            songs.map((song, index) => (
              <SongItem
                key={song.id}
                song={song}
                index={index}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                editingSongId={editingSongId}
                setEditingSongId={setEditingSongId}
              />
            ))}
        </List>
      </SongsContainer>

        <AddSongContainer>
          <SongForm onSubmitSuccess={onSubmitSuccess}/>
        </AddSongContainer>
      </FeedContainer>
  );
}

export default FeedPage;
