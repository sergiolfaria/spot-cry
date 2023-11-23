import React, { useState } from 'react';
import UpdateForm from '../UpdateSongs/UpdateForm';
import OptionsButton from './OptionsButton';
import { SongArtist, SongDetails, SongItemContainer, SongTitle } from './Style';

function SongItem({song, index, handleDelete, handleEdit, editingSongId, setEditingSongId, onAddToPlayer }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleOptionClick = (option, song) => {
    if (option === 'edit') {
      handleEdit(song.id);
    } else if (option === 'delete') {
      handleDelete(song.id);
    } else if (option === 'addToPlayer') {
      onAddToPlayer(song);
    }
  };

  return (
    <SongItemContainer key={song.id} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <SongDetails>
        <SongTitle>{index + 1} {song.title}</SongTitle>
        <SongArtist>{song.artist}</SongArtist>
      </SongDetails>
      <OptionsButton onOptionClick={(option, song) => handleOptionClick(option, song)} showIcon={isHovered} song={song} />
      {editingSongId === song.id && (
        <UpdateForm
          songId={song.id}
          onCancel={() => setEditingSongId(null)}
        />
      )}
    </SongItemContainer>
  );
}

export default SongItem;
