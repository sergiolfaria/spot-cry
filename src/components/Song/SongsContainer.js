// SongsContainer.js
import React, { useState, useEffect } from 'react';
import { getMusicsFromData } from '../../services/Songs/getMusicData';
import PostSongForm from '../../components/PostSongsForm/PostSongForm';
import { deleteMusicsFromData } from '../../services/Songs/deleteSong';
import SongItem from '../../components/Song/SongItem';
import FeedLoading from '../../components/Loading/FeedLoading';
import SearchBar from '../../components/Song/SearchBar';
import { SongsContainer as Container, Title, List,HeaderList,Headerduo, SongsAndHeaderContainer } from '../../pages/Styles/FeedStyles'; // Update the import path as needed

const SongsContainer = ({ handlePlay }) => {
  const [allSongs, setAllSongs] = useState([]);
  const [songs, setSongs] = useState([]);
  const [editingSongId, setEditingSongId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);

      const songsResponse = await getMusicsFromData();
      const allSongsData = songsResponse.data.songs;

      if (Array.isArray(allSongsData) && allSongsData.length > 0) {
        setAllSongs(allSongsData);
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

  const handleSearch = (searchTerm) => {
    const filteredSongs = allSongs.filter((song) =>
      song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSongs(filteredSongs);
  };

  return (
    <SongsAndHeaderContainer>
        <HeaderList>
          <Title>All Songs</Title>
          <Headerduo>
            <PostSongForm onSubmitSuccess={onSubmitSuccess} />
            <SearchBar songs={allSongs} onSearch={handleSearch} />
          </Headerduo>
        </HeaderList>
        <Container>
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
        </Container>

      </SongsAndHeaderContainer>
  );
};

export default SongsContainer;
