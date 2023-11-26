import React, { useState } from 'react';
import UpdateForm from '../UpdateSongs/UpdateForm';
import OptionsButton from './OptionsButton';
import { SongArtist, SongDetails, SongItemContainer, SongTitle, PlayButton} from './Style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

function SongItem({ song, index, handleDelete, handleEdit, onPlay, editingSongId, setEditingSongId }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleOptionClick = (option) => {
    if (option === 'edit') {
      handleEdit(song.id);
    } else if (option === 'delete') {
      handleDelete(song.id);
    }
  };

  return (
  <SongItemContainer key={song.id} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    <SongDetails>
      <SongTitle>{index + 1} {song.title}</SongTitle>
      <SongArtist>{song.artist}</SongArtist>
    </SongDetails>
    <PlayButton onClick={() => onPlay(song)}>
      <FontAwesomeIcon icon={faPlay} />
    </PlayButton>
    <OptionsButton onOptionClick={(option) => handleOptionClick(option)} showIcon={isHovered} song={song} />
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
