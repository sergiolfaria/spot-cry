import React, { useState } from 'react';
import styled from 'styled-components';
import { createNewPlaylist } from '../../services/Playlists/CreateNewPlaylist';
import { getPlaylistsFromUser } from '../../services/Playlists/playlist';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const NewPlaylistForm = ({ onCreate, onCancel }) => {
  const [playlistName, setPlaylistName] = useState('');
  const [playlistDescription, setPlaylistDescription] = useState('');
  const [showPopup, setShowPopup] = useState(false)
  const [loading, setLoading] = useState()
  const [playlists, setPlaylists] = useState()

  const fetchData = async () => {
    try {
      setLoading(true);

      const playlistsResponse = await getPlaylistsFromUser();
      setPlaylists(playlistsResponse.data.playlists);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);

    } finally {
      setLoading(false);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleCreatePlaylist = async () => {
    try {
      const newPlaylistDetails = {
        name: playlistName,
        description: playlistDescription,
      };
  
      // Chame o serviço para criar uma nova playlist
      await createNewPlaylist(newPlaylistDetails);
  
      // Atualize a lista de playlists
      fetchData();
  
      // Feche o popup após a criação
      handleClosePopup();
    } catch (error) {
      console.error('Erro ao criar playlist:', error);
      // Exibir ou tratar o erro, se necessário
    }
  };

  const handleCancel = () => {
    // Limpar os campos em caso de cancelamento
    setPlaylistName('');
    setPlaylistDescription('');

    // Chamar a função de cancelamento, se necessário
    onCancel();
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

      <button onClick={handleCreatePlaylist}>Criar Playlist</button>
      <button onClick={handleCancel}>Cancelar</button>
    </FormContainer>
  );
};

export default NewPlaylistForm;
