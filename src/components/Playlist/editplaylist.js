import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getMusicsFromData } from '../../services/Songs/getMusicData';
import Loading from '../Loading/Loading';
import { getPlaylistTracks } from '../../services/Playlists/getPlaylistTracks';
import { EditPlayslist } from '../../services/Playlists/EditPlayslist';
import { COLORS } from '../../constants/colors'; // Adiciona a importação das cores

const FormContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  z-index: 1009;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SongListContainer = styled.div`
  max-height: 200px;
  overflow-y: auto;
`;

const StyledInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: ${COLORS.blue}; // Usa a cor azul como destaque
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:disabled {
    background-color: #ddd;
    color: #666;
    cursor: not-allowed;
  }
`;

const EditPlaylistForm = ({ playlistId, onCancel, onUpdate }) => {
  const [playlistName, setPlaylistName] = useState('');
  const [playlistDescription, setPlaylistDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [allSongs, setAllSongs] = useState([]);
  const [selectedSongs, setSelectedSongs] = useState([]);
  const [songsLoading, setSongsLoading] = useState(false);

  const handleCloseForm = () => {
    setPlaylistName('');
    setPlaylistDescription('');
    setSelectedSongs([]);
    onCancel();
  };

  const handleUpdatePlaylist = async () => {
    try {
      if (!playlistName) {
        console.error('O nome da playlist é obrigatório.');
        return;
      }

      setLoading(true);

      const existingTracks = await getPlaylistTracks(playlistId);
      const updatedTracks = [...existingTracks, ...selectedSongs.map((song) => song.id)];

      await EditPlayslist(playlistId, {
        name: playlistName,
        description: playlistDescription,
        tracks: updatedTracks,
      });

      alert('Playlist atualizada com sucesso!');
      onUpdate();
      handleCloseForm();
    } catch (error) {
      console.error('Erro ao atualizar playlist:', error);
      alert('Erro ao atualizar playlist. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const fetchData = async () => {
    try {
      setSongsLoading(true);
      const songsResponse = await getMusicsFromData();
      setAllSongs(songsResponse.data.songs);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    } finally {
      setSongsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [playlistId]);

  const handleSongCheckboxChange = (song) => {
    if (selectedSongs.find((selectedSong) => selectedSong.id === song.id)) {
      setSelectedSongs((prevSelectedSongs) =>
        prevSelectedSongs.filter((selectedSong) => selectedSong.id !== song.id)
      );
    } else {
      setSelectedSongs((prevSelectedSongs) => [...prevSelectedSongs, song]);
    }
  };

  if (songsLoading) {
    return (
      <FormContainer>
        <Loading />
      </FormContainer>
    );
  }

  return (
    <FormContainer>
      <StyledInput
        type="text"
        placeholder="Nome da Playlist"
        value={playlistName}
        onChange={(e) => setPlaylistName(e.target.value)}
      />

      <StyledInput
        type="text"
        placeholder="Descrição da Playlist"
        value={playlistDescription}
        onChange={(e) => setPlaylistDescription(e.target.value)}
      />

      <Button onClick={handleUpdatePlaylist} disabled={loading}>
        Atualizar Playlist
      </Button>
      <Button onClick={handleCloseForm} disabled={loading}>
        Cancelar
      </Button>

      <SongListContainer>
        <div>
          <h3>Selecione as Músicas:</h3>
          {allSongs.map((song) => (
            <label key={song.id} style={{ display: 'block', color: COLORS.blue }}>
              <input
                type="checkbox"
                checked={selectedSongs.some((selectedSong) => selectedSong.id === song.id)}
                onChange={() => handleSongCheckboxChange(song)}
              />
              {song.title}
            </label>
          ))}
        </div>
      </SongListContainer>
    </FormContainer>
  );
};

export default EditPlaylistForm;
