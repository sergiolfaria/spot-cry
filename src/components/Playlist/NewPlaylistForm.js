import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { createNewPlaylist } from '../../services/Playlists/CreateNewPlaylist';
import { getPlaylistsFromUser } from '../../services/Playlists/playlist';
import { getMusicsFromData } from '../../services/Songs/getMusicData';
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  div {
    display: flex;
    flex-direction: column;
    gap: 5px;

    label {
      display: flex;
      align-items: center;
    }
  }
`;

const StyledInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const NewPlaylistForm = ({ onCreate, onCancel }) => {
  const [playlistName, setPlaylistName] = useState('');
  const [playlistDescription, setPlaylistDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [allSongs, setAllSongs] = useState([]);
  const [selectedSongs, setSelectedSongs] = useState([]);
  const [playlists, setPlaylists] = useState([]);

  const handleClosePopup = () => {
    setPlaylistName('');
    setPlaylistDescription('');
    onCancel();
  };

  const handleCreatePlaylist = async () => {
    try {
      if (!playlistName) {
        console.error('O nome da playlist é obrigatório.');
        return;
      }

      setLoading(true);

      await createNewPlaylist({
        name: playlistName,
        description: playlistDescription,
        songs: selectedSongs.map(song => song.id)
      });

      alert('Playlist criada com sucesso!');

      // Chama a função fetchData diretamente após a criação da playlist
      fetchData();

      // Fecha o formulário
      handleClosePopup();
    } catch (error) {
      console.error('Erro ao criar playlist:', error);
      // Exibe alerta de erro
      alert('Erro ao criar playlist. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const fetchData = async () => {
    try {
      const playlistsResponse = await getPlaylistsFromUser();
      const songsResponse = await getMusicsFromData(); // Modifique de acordo com sua implementação real

      // Atualiza a lista de playlists e de músicas
      setPlaylists(playlistsResponse.data.playlists);
      setAllSongs(songsResponse.data.songs);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Adiciona um array vazio para garantir que o useEffect seja chamado apenas uma vez ao montar o componente

  const handleSongCheckboxChange = (song) => {
    // Verifica se a música já está selecionada
    if (selectedSongs.find(selectedSong => selectedSong.id === song.id)) {
      // Se estiver selecionada, remove da lista de músicas selecionadas
      setSelectedSongs((prevSelectedSongs) =>
        prevSelectedSongs.filter((selectedSong) => selectedSong.id !== song.id)
      );
    } else {
      // Se não estiver selecionada, adiciona à lista de músicas selecionadas
      setSelectedSongs((prevSelectedSongs) => [...prevSelectedSongs, song]);
    }
  };

  return (
    <FormContainer>
      <label htmlFor="playlistName">Nome da Playlist:</label>
      <StyledInput
        type="text"
        id="playlistName"
        value={playlistName}
        onChange={(e) => setPlaylistName(e.target.value)}
      />

      <label htmlFor="playlistDescription">Descrição da Playlist:</label>
      <StyledInput
        type="text"
        id="playlistDescription"
        value={playlistDescription}
        onChange={(e) => setPlaylistDescription(e.target.value)}
      />

      <button onClick={handleCreatePlaylist} disabled={loading}>
        Criar Playlist
      </button>
      <button onClick={handleClosePopup} disabled={loading}>
        Cancelar
      </button>

      <div>
        <h3>Selecione as Músicas:</h3>
        {allSongs.map((song) => (
          <label key={song.id}>
            <input
              type="checkbox"
              checked={selectedSongs.some(selectedSong => selectedSong.id === song.id)}
              onChange={() => handleSongCheckboxChange(song)}
            />
            {song.title}
          </label>
        ))}
      </div>
    </FormContainer>
  );
};

export default NewPlaylistForm;
