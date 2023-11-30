import React, { useState, useEffect } from 'react';
import { getPlaylistsFromUser } from '../../services/Playlists/playlist';
import { PlaylistContainer as Container, PlaylistHeader, PlaylistTitle, PlaylistButton, List, ListItem } from '../../pages/Styles/FeedStyles'; // Update the import path as needed
import { goToLoginPage } from '../../routes/Coordinator';
import styled from 'styled-components';
import { createNewPlaylist } from '../../services/Playlists/CreateNewPlaylist';
import NewPlaylistForm from './NewPlaylistForm';
import { COLORS } from '../../constants/colors';

const CreatePlaylistButton = styled.button`
  padding: 10px;
  background-color: ${COLORS.blue};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const PopupContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  z-index: 1009;
`;
const PlaylistsContainer = () => {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPlaylistId, setSelectedPlaylistId] = useState(
    localStorage.getItem('selectedPlaylistId') || null
  );

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);

      const playlistsResponse = await getPlaylistsFromUser();
      setPlaylists(playlistsResponse.data.playlists);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);

      if (error.response && error.response.status === 401) {
        console.log('Token expirado, você precisa fazer login novamente!.');
        goToLoginPage();
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCreatePlaylistClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleCreatePlaylist = async () => {
    try {
      const newPlaylistDetails = {
        name: 'Nome da Playlist',
        description: 'Descrição da Playlist',
      };

      await createNewPlaylist(newPlaylistDetails);
      localStorage.removeItem('selectedPlaylistId');
      fetchData();

      handleClosePopup();
    } catch (error) {
      console.error('Erro ao criar playlist:', error);
    }
  };
  const handlePlaylistClick = (playlistId) => {
    localStorage.setItem('selectedPlaylistId', playlistId);
    setSelectedPlaylistId(playlistId);
  };

  return (
    <Container>
      <PlaylistHeader>
        <PlaylistTitle>My Playlists</PlaylistTitle>
        <CreatePlaylistButton onClick={handleCreatePlaylistClick}>
          Criar Playlist
        </CreatePlaylistButton>
      </PlaylistHeader>
      <List>
        {Array.isArray(playlists) &&
          playlists.map((playlist, index) => (
            <ListItem
              key={playlist._id}
              onClick={() => handlePlaylistClick(playlist._id)}
            >
              {index + 1} {playlist._name}
            </ListItem>
          ))}
      </List>
      {showPopup && (
        <PopupContainer>
          <NewPlaylistForm
            onCreate={handleCreatePlaylist}
            onCancel={handleClosePopup}
          />
        </PopupContainer>
      )}
    </Container>
  );
};

export default PlaylistsContainer;