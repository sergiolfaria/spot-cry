import React, { useState, useEffect } from 'react';
import { getPlaylistsFromUser } from '../services/playlist';
import { getMusicsFromData } from '../services/getMusicData';
import SongForm from '../components/PostSongs/FormPostSongs';
import { deleteMusicsFromData } from '../services/deleteSong';
import SongItem from '../components/Song/SongItem';
import FeedLoading from '../components/Loading/FeedLoading';
import Player from '../components/Player/Player';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  FeedContainer,
  PlaylistContainer,
  SongsContainer,
  Title,
  List,
  ListItem,
  AddSongContainer,
  HeaderList,
} from './Styles/FeedStyles';


function FeedPage() {
  const [playlists, setPlaylists] = useState([]);
  const [songs, setsongs] = useState([]);
  const [editingSongId, setEditingSongId] = useState(null);
  const [loading, setLoading] = useState(true); // Estado para controle do carregamento

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);

      const playlistsResponse = await getPlaylistsFromUser();
      setPlaylists(playlistsResponse.data.playlists);

      const songsResponse = await getMusicsFromData();
      setsongs(songsResponse.data.songs);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    } finally {
      setLoading(false);
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

  const handleCreatePlaylist = () => {
    alert('Lógica de criação de playlist aqui');
  };

  return (
    <FeedContainer>
      <PlaylistContainer>
      
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <Title style={{ marginRight: '10px' }}>My Playlists</Title>
          <button onClick={handleCreatePlaylist}>
            <FontAwesomeIcon icon={faPlus} style={{ color: 'ffffff', marginRight: '5px' }} />
          </button>
        </div>
        <List>
          {Array.isArray(playlists) &&
            playlists.map((playlist, index) => (
              <ListItem key={playlist._id}>{index + 1} {playlist._name} </ListItem>
            ))}
        </List>
      </PlaylistContainer>

      <HeaderList>
        <Title>All Songs</Title>
        <SongForm onSubmitSuccess={onSubmitSuccess} />
      </HeaderList>
      <SongsContainer>
      {loading ? (
          <FeedLoading />
        ) : (
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
        )}
      </SongsContainer>
      <AddSongContainer>
      </AddSongContainer>
      <Player />
    </FeedContainer>
  );
}

export default FeedPage;
