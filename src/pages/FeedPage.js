import React, { useState, useEffect } from 'react';
import { getPlaylistsFromUser } from '../services/Playlists/playlist';
import { getMusicsFromData } from '../services/Songs/getMusicData';
import PostSongForm from '../components/PostSongsForm/PostSongForm';
import { deleteMusicsFromData } from '../services/Songs/deleteSong';
import SongItem from '../components/Song/SongItem';
import FeedLoading from '../components/Loading/FeedLoading';
import Player from '../components/Player/Player';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchBar from '../components/Song/SearchBar';
import { FeedContainer, PlaylistContainer, SongsContainer, Title, List, ListItem, Playercontainer, HeaderList, SongsAndHeaderContainer, Headerduo } from './Styles/FeedStyles';


function FeedPage() {
  const [playlists, setPlaylists] = useState([]);
  const [allSongs, setAllSongs] = useState([]); // Armazena todas as músicas
  const [songs, setSongs] = useState([]); // Armazena as músicas exibidas após filtro
  const [editingSongId, setEditingSongId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentSong, setCurrentSong] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);

      const playlistsResponse = await getPlaylistsFromUser();
      setPlaylists(playlistsResponse.data.playlists);

      const songsResponse = await getMusicsFromData();
      const allSongsData = songsResponse.data.songs;

      if (Array.isArray(allSongsData) && allSongsData.length > 0) {
        setAllSongs(allSongsData);
        setCurrentSong(allSongsData[0]);
        setSongs(allSongsData);
      } else {
        console.warn('Nenhuma música encontrada.');
      }
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

  const handlePlay = (selectedSong) => {
    setCurrentSong(selectedSong);
  };

  const handleSearch = (searchTerm) => {
    // Filtra as músicas com base no termo de busca
    const filteredSongs = allSongs.filter((song) =>
      song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        song.artist.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSongs(filteredSongs);
  };

  
  return (
    <FeedContainer>

      <PlaylistContainer>
        <Title>My Playlists</Title>
        <button onClick={handleCreatePlaylist}>
          <FontAwesomeIcon icon={faPlus} style={{ color: 'ffffff', marginRight: '5px' }} />
        </button>
        <List>
          {Array.isArray(playlists) &&
            playlists.map((playlist, index) => (
              <ListItem key={playlist._id}>{index + 1} {playlist._name} </ListItem>
            ))}
        </List>
      </PlaylistContainer>


      <SongsAndHeaderContainer>
        <HeaderList>
          <Title>All Songs</Title>
          <Headerduo>
            <PostSongForm onSubmitSuccess={onSubmitSuccess} />
            <SearchBar songs={allSongs} onSearch={handleSearch} />
          </Headerduo>
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
                    onPlay={handlePlay}
                    editingSongId={editingSongId}
                    setEditingSongId={setEditingSongId}
                  />
                ))}
            </List>
          )}
        </SongsContainer>

      </SongsAndHeaderContainer>

      <Playercontainer>
        <Player currentSong={currentSong} />
      </Playercontainer>


    </FeedContainer>
  );
}

export default FeedPage;
