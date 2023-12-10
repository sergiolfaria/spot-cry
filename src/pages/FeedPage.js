import React, { useState, useEffect } from 'react';
import { getMusicsFromData } from '../services/Songs/getMusicData';
import Player from '../components/Player/Player';
import PlaylistContainer from '../components/Playlist/PlaylistsContainer';
import { goToLoginPage } from '../routes/Coordinator';
import SongsContainer from '../components/Song/SongsContainer';
import { FeedContainer, Playercontainer } from './Styles/FeedStyles';
import { useNavigate } from 'react-router-dom';

function FeedPage() {
  const [allSongs, setAllSongs] = useState([]); // Armazena todas as músicas
  const [loading, setLoading] = useState(true);
  const [currentSong, setCurrentSong] = useState(null);
  const [selectedPlaylistId, setSelectedPlaylistId] = useState(null); // Adiciona o estado para armazenar o ID da playlist selecionada
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, [selectedPlaylistId]); // Adiciona selectedPlaylistId como dependência para refetch quando a playlist é alterada

  const fetchData = async () => {
    try {
      setLoading(true);

      // Use selectedPlaylistId para obter músicas específicas da playlist
      const songsResponse = await getMusicsFromData(selectedPlaylistId);
      const allSongsData = songsResponse.data.songs;

      if (Array.isArray(allSongsData) && allSongsData.length > 0) {
        setAllSongs(allSongsData);
        setCurrentSong(allSongsData[0]);
      } else {
        console.warn('Nenhuma música encontrada.');
      }
    } catch (error) {
      console.error('Erro ao buscar dados:', error);

      if (error.response && error.response.status === 400) {
        console.log('Token expirado, você precisa fazer login novamente!.');
        localStorage.removeItem('token');
        goToLoginPage(navigate);
      }
    } finally {
      setLoading(false);
    }
  };

  const handlePlay = (selectedSong) => {
    setCurrentSong(selectedSong);
  };

  const handlePlaylistChange = (playlistId) => {
    
    setSelectedPlaylistId(playlistId);
  };

  return (
    <FeedContainer>
      {/* Adiciona a propriedade onPlaylistChange para passar a função de mudança de playlist */}
      <PlaylistContainer onPlaylistChange={handlePlaylistChange} />
      {/* Passa o ID da playlist selecionada para o componente SongsContainer */}
      <SongsContainer songs={allSongs} handlePlay={handlePlay} />
      <Playercontainer>
        <Player currentSong={currentSong} />
      </Playercontainer>
    </FeedContainer>
  );
}

export default FeedPage;
