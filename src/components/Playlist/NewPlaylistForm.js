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
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState();
  const [playlists, setPlaylists] = useState();

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
        songs: []
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
      // Atualiza a lista de playlists
      setPlaylists(playlistsResponse.data.playlists);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
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

      <button onClick={handleCreatePlaylist} disabled={loading}>Criar Playlist</button>
      <button onClick={handleClosePopup} disabled={loading}>Cancelar</button>
    </FormContainer>
  );
};

export default NewPlaylistForm;
