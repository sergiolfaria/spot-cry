import React, { useState, useEffect } from 'react';
import { getPlaylistsFromUser } from '../../services/Playlists/playlist'; // Alteração na importação
import { PlaylistContainer as Container, PlaylistHeader, PlaylistTitle, PlaylistButton, List, ListItem } from '../../pages/Styles/FeedStyles';
import { goToLoginPage } from '../../routes/Coordinator';
import styled from 'styled-components';
import { createNewPlaylist } from '../../services/Playlists/CreateNewPlaylist';
import NewPlaylistForm from './NewPlaylistForm';
import { COLORS } from '../../constants/colors';
import FeedLoading from '../Loading/FeedLoading';
import { getPlaylistsByUser } from '../../services/Playlists/GetPlaylistByUser'
import { deletePlaylist } from '../../services/Playlists/deletePlaylist';
import { getUserId } from '../../services/users';


const ActionButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
`;

const CancelButton = styled.div`
  cursor: pointer;
  padding: 4px;
  color: #333;
  border-bottom: 1px solid #ccc;
`;

const DeleteButton = styled.div`
  cursor: pointer;
  padding: 4px;
  color: #fff;
  background-color: #f5222d; /* Cor vermelha para indicar exclusão */
  border: 1px solid #f5222d;
  border-radius: 4px;
`;
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
  const [userPlaylists, setUserPlaylists] = useState([]);
  const [allPlaylists, setAllPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPlaylistId, setSelectedPlaylistId] = useState(null);
  const [contextMenuVisible, setContextMenuVisible] = useState(false);
  const [contextMenuPosition, setContextMenuPosition] = useState({ top: 0, left: 0 });

  
  const fetchData = async () => {
    try {
      setLoading(true);
      
      // Suponha que você tenha uma função chamada `getAllPlaylists`
      const allPlaylistsResponse = await getPlaylistsFromUser();
      setAllPlaylists(allPlaylistsResponse.data.playlists);
      const userid = getUserId();
      const userPlaylistsResponse = await getPlaylistsByUser(userid);
      setUserPlaylists(userPlaylistsResponse.data.playlists);
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
      setLoading(true);
      
      const newPlaylistDetails = {
        name: 'Nome da Playlist',
        description: 'Descrição da Playlist',
      };
      
      await createNewPlaylist(newPlaylistDetails);
      handleClosePopup();
      
      // Chama a função fetchData diretamente após a criação da playlist
      await fetchData();
    } catch (error) {
      console.error('Erro ao criar playlist:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const handlePlaylistClick = (playlistId) => {
    setSelectedPlaylistId(playlistId);
  };
  
  const handleContextMenuClick = async (action) => {
    switch (action) {
      case 'delete':
        await handleDeletePlaylist();
        break;
        default:
          break;
        }
      };
      
      useEffect(() => {
        fetchData();
      }, [])
  const handleDeletePlaylist = async () => {
    if (selectedPlaylistId) {
      setLoading(true);

      try {
        await deletePlaylist(selectedPlaylistId);
        await fetchData();
      } catch (error) {
        console.error('Erro ao excluir a playlist:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  const showContextMenu = (event, playlistId) => {
    event.preventDefault();
    setContextMenuPosition({ top: event.clientY, left: event.clientX });
    setSelectedPlaylistId(playlistId);
    setContextMenuVisible(true);
  };

  const hideContextMenu = () => {
    setContextMenuVisible(false);
  };

  return (
    <Container>
      <div>
        <PlaylistHeader>
          <PlaylistTitle>My Playlists</PlaylistTitle>
          
          <CreatePlaylistButton onClick={handleCreatePlaylistClick}>
            Criar Playlist
          </CreatePlaylistButton>
        </PlaylistHeader>
        {loading ? (
          <FeedLoading />
        ) : (
          <List>
            {Array.isArray(userPlaylists) &&
              userPlaylists.map((playlist, index) => (
                <ListItem
                  key={playlist._id}
                  onClick={() => handlePlaylistClick(playlist._id)}
                  onContextMenu={(event) => showContextMenu(event, playlist._id)}
                >
                  {index + 1} {playlist._name}
                </ListItem>
              ))}
          </List>
        )}
      </div>

      <div>
        <PlaylistHeader>
          <PlaylistTitle>All Playlists</PlaylistTitle>
        </PlaylistHeader>
        {loading ? (
          <FeedLoading />
        ) : (
          <List>
            {Array.isArray(allPlaylists) &&
              allPlaylists
                .filter((playlist) => !userPlaylists.find((userPlaylist) => userPlaylist._id === playlist._id))
                .map((playlist, index) => (
                  <ListItem
                    key={playlist._id}
                    onClick={() => handlePlaylistClick(playlist._id)}
                    onContextMenu={(event) => showContextMenu(event, playlist._id)}
                  >
                    {index + 1} {playlist._name}
                  </ListItem>
                ))}
          </List>
        )}
      </div>

      {showPopup && (
        <PopupContainer>
          <NewPlaylistForm
            onCreate={handleCreatePlaylist}
            onCancel={handleClosePopup}
            fetchData={fetchData}
          />
        </PopupContainer>
      )}

      {contextMenuVisible && (
        <div
          style={{
            position: 'fixed',
            top: contextMenuPosition.top,
            left: contextMenuPosition.left,
            zIndex: 1000,
            backgroundColor: 'white',
            border: '1px solid #ccc',
            borderRadius: '4px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            padding: '8px',
          }}
          onClick={hideContextMenu}
        >
          <ActionButtonsContainer>
            <CancelButton onClick={hideContextMenu}>Cancelar</CancelButton>
            <DeleteButton onClick={() => handleContextMenuClick('delete')}>
              Excluir
            </DeleteButton>
          </ActionButtonsContainer>
        </div>
      )}
    </Container>
  );
};

export default PlaylistsContainer;
